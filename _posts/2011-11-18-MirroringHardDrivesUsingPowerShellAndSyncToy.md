---
layout: post
name: MirroringHardDrivesUsingPowerShellAndSyncToy
title: Mirroring Hard drives Using PowerShell and SyncToy
time: 2011-11-18 09:24:00.001000000 -08:00
tags:
- ".NET"
- VHD
- Virtualization
- SyncToy
- PowerShell
- SQL Server
- Backup
redirects:
- /2011/11/my-main-protection-against-hard-drive.html
---
![](https://sn2files.storage.live.com/y1pEqScU3Qzm04LrZAfaxrVuyoZ5-bVd236pu-9bPHmIIU-XF6G4isOlmp7gE5PHZnQfi-4uKO9Y9s/PowerShellLogo.jpg?psid=1)![](https://sn2files.storage.live.com/y1pcyUQd4CpJG44gFqyyO9-I9fFQC-Ru43151DTeqlrOZPHZ2GRZLbjiKbNPa2Jzb5HpXU0yTR9Q58/SyncToyLogo.jpg?psid=1)My main protection against hard drive failure for a long time has been [RAID 1](http://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_1). I would get two identical hard drives and RAID them so that everything I do on the first drive would be replicated on the second. One time, this actually saved me from a hard drive failure with almost zero down time.

I can say that this has worked out very well for a long time until one day I made a stupid mistake and accidently chose the wrong drive when installing Windows. I wiped out the data drive and sure enough RAID has mirrored everything I did. It was 4 days of crying, recovering data with [DiskDigger](http://diskdigger.org/), banging my head on the desk, recovering data, more crying, and so on. Since then, I dropped the RAID 1 on all my hard drives and switched to using SyncToy to mirror identical disks once a day.

SyncToy is very simple to use and you can [use it with Windows Task Scheduler](http://www.pchell.com/support/synctoy.shtml) to sync the drives at night. However, I ran into two main problems: Copying SQL Server database files, and Copying mounted VHD files. These files won’t get copied if they’re in use. To solve this problem, I need to stop the SQL Server service, and un-mount the VHD file before mirroring the drives. To do that and after [learning all about it](http://www.amreldib.com/2011/11/powershell-study-notes.html), I’ll be using PowerShell.

### Running PowerShell Scripts

The first thing to try out is running PowerShell scripts in Windows. If you’re running Windows 7 like I’m, you could run into the issue of restricted execution policy. If you try to run a PowerShell script, any script, you’ll find this error message:
 > <pre>_**File C:\test.ps1 cannot be loaded because the execution of scripts is disabled on this system. **
> **Please see "get-help about_signing" for more details.**_</pre>

This is caused by Windows limiting the ability to run PowerShell scripts by default. You can get the status of the execution policy using the PowerShell cmdlet **_Get-ExecutionPolicy_**

> _<font color="#0000ff" face="Courier New">Get-ExecutionPolicy</font>_

To change the status of the execution policy use the **_Set-ExecutionPolicy_** cmdlet. Here, I’m switching to “Unrestricted”:

> _<font face="Courier New"><font color="#0000ff">Set-ExecutionPolicy</font> <font color="#0000a0">–ExecutionPolicy</font> <font color="#9b00d3">Unrestricted</font></font>_

Changing the execution policy is a one-time thing, you won’t have to worry about it again. Now, your Windows 7 is ready to run PowerShell scripts. You can read all about execution policy and running PowerShell scripts on Windows in this [TechNet article](http://technet.microsoft.com/en-us/library/ee176949.aspx).

### Running PowerShell Scripts using Task Scheduler

The Task Scheduler will be responsible for running the script. It can’t run it directly, we’ll have to run PowerShell.exe and pass the script as an argument. It’s like running a PowerShell script from the command line. To do that we enter the PowerShell.exe path followed by **“&amp;** then the path to the script surrounded by single or double quotes ([Source](http://www.leeholmes.com/blog/2006/05/05/running-powershell-scripts-from-cmd-exe/)). This helps with running scripts that have space in their path. Here’s an example:

> _<font face="Courier New">**“C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe” “&amp; 'D:\Folder Name\Our Script.ps1'**</font>_

### Copying Database Files

Before we start writing the script, we’ll have to test copying the database file. I stopped the SQL service using the Services management console and tried to copy the file but it failed. Database files by default are not owned by your Windows user account. You have to take ownership of the files (the MDF file and the Log file) and grant your Windows account sufficient permission to be able to copy the files. You can use the Properties dialog to take ownership of the files. I do that and now I can copy the files.

I can write all the commands in the PowerShell script directly, but I would rather break down the script into reusable functions. To prepare to copy the database files, I have 3 functions; check the status of the SQL service, stop the service and start it. I would like to maintain the status of my SQL service as it is after the mirroring is complete. I want to stop the service and start it again only if it was actually running.

Checking the service status, stopping it, and starting it is the same for all services and is not related to SQL Server. You can read all about it [here](http://www.computerperformance.co.uk/powershell/powershell_service_start.htm). We can simply use the commands **_Get-Service_**, **_Stop-Service_** and **_Start-Service_**.

I’m writing the functions in a bit of a generic way so that I can use them later in other scripts without having to change their content (only their name have to change). For example, I’m passing the name of the service. Here’s the **_Get-SqlServiceStatus_** function as an example:

> _<font face="Courier New">
    [![Properties Window of SQL Service](https://sn2files.storage.live.com/y1px6JqF-PvGPZErGVqqnJG7MYACI6XJcxAoyxwoi3mt8qEYJTI0Jj88fmKP-ZVjJ1bCJR38-VYq0A/SqlServicePropertiesWindow.jpg?psid=1)](https://sn2files.storage.live.com/y1px6JqF-PvGPZErGVqqnJG7MYACI6XJcxAoyxwoi3mt8qEYJTI0Jj88fmKP-ZVjJ1bCJR38-VYq0A/SqlServicePropertiesWindow.jpg?psid=1)**<font color="#0000a0">function</font> <font color="#9b00d3">Get-SqlServiceStatus</font> (<font color="#ff0000">$serviceName</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#008000"># Get a reference to the service</font>
    > &nbsp;&nbsp;&nbsp; <font color="#ff0000">$sqlService</font> = <font color="#0000ff">Get-Service</font> <font color="#ff0000">$serviceName</font>**
</font>_
>
> _<font face="Courier New">
    **&nbsp;&nbsp;&nbsp; <font color="#008000"># Return the service status</font>
    > &nbsp;&nbsp;&nbsp; <font color="#0000ff">return</font> <font color="#ff0000">$sqlService</font>.status
    > }**
</font>_

All I need now is the name of the SQL service on my computer. To get the name of the service, navigate to the service properties dialog and pick the name of the service (not the display name). Make sure to use PowerShell escape characters to enter the name correctly. For example: “**MSSQL$SQLEXPRESS**” have a dollar sign ($), so I have to add a backtick before the dollar sign to make PowerShell parse the name correctly “**MSSQL`$SQLEXPRESS**”.

&nbsp;

### Mounting VHDs

I think that the common way to mount a VHD in PowerShell is using [WMI](http://en.wikipedia.org/wiki/Windows_Management_Instrumentation) (Windows Management Instrumentation). A quick search online will confirm this. However, WMI is not available for Windows 7, it’s for Windows Server. We can’t mount the VHD file using WMI because the namespace “Root\Virtualization” is [not available on Windows 7](http://social.technet.microsoft.com/Forums/en-US/winserverpowershell/thread/a08ad18f-4b6a-46a0-bd1f-274fbbc5b737). This namespace include the class that could be used to mount the VHD file. If you’re running Windows Server and can use WMI, here’s a [description of how to mount virtual hard drives with HyperV and WMI](http://blogs.msdn.com/b/virtual_pc_guy/archive/2008/02/01/mounting-a-virtual-hard-disk-with-hyper-v.aspx).

Aside from using WMI, normally we’d mount a VHD using the [DiskPart command](http://www.windows7news.com/2010/01/14/how-to-automatically-attach-vhd-images-in-windows-7/). To do that, create a file and name it AttachMyVHD.s for example and add this to it:

> `_**select vdisk file=c:\MyVHD.vhd
> attach vdisk**_`

Then create a Windows command (.cmd) file that call the diskpart command and pass this file to it.

> `_**DiskPart -s "c:\AttachMyVHD.s"**_`

In the S file, we’re selecting the VHD by specifying its location, then attaching it. In the Windows command file, we’re passing the S file to the DiskPart command.

In PowerShell, we’ll just execute the Windows command file. This **Mount-Codebox** function declares a variable with the location of the Windows command file. Codebox is the name of the VHD file I’m using.

> _<font face="Courier New">
    **<font color="#0000a0">function</font> <font color="#9b00d3">Mount-Codebox</font>
    > {
    > &nbsp;&nbsp;&nbsp;&nbsp; <font color="#ff0000">$scriptFile</font> = ****<font color="#c0504d">
        “D:\VBox\HardDrives\AttachVHD.cmd”
        >
    </font>&nbsp;&nbsp;&nbsp;&nbsp; <font color="#a5a5a5">&amp; </font><font color="#ff0000">$scriptFile</font>
    > }**
</font>_

To unmount a VHD, you can do the same thing, except in the S file, use **_detach vdisk_** instead of **_attach vdisk_**.

Before we unmount the VHD and re-mount it after the mirroring, we need to check if it’s already mounted. We don’t want our script to change an existing status, we want it to maintain it. If the VHD is not already mounted, don’t try to unmount, then re-mount it at the end. Just skip this step altogether.

To check if the VHD is already mounted, we’ll just check if the drive it creates exists or not. To check if a drive exists, we’ll use the **_[Exists-Drive function](http://powershell.com/cs/media/p/202.aspx)_**.

> <font face="Courier New">
    _**<font color="#0000a0">function</font> <font color="#9b00d3">Exists-Drive</font> (<font color="#ff0000">$driveletter</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#ff0000">$drive</font> = <font color="#444444">New-Object</font> <font color="#9b00d3">System.IO.DriveInfo</font>(<font color="#ff0000">$driveletter</font>)
    > &nbsp;&nbsp;&nbsp; <font color="#ff0000">$drive</font>.DriveType <font color="#a5a5a5">-ne</font> <font color="#c0504d">'NoRootDirectory'</font>&nbsp;&nbsp;
    > }**_
</font>

### Run SyncToy

To run SyncToy from PowerShell, we’ll use the same way we called the Windows command file above; using the **_&amp;_** symbol to execute the SyncToy EXE file. We’ll call the SyncToyCmd.exe file which is the command line equivalent of the application so we can pass the name of the backup plan as an argument. If you use the command line to call SyncToyCmd, it’ll look like this:

> **_<font face="Courier New">SyncToyCmd –R “MyBackupPlan”</font>_**

We’ll create the **_Run-SyncToy_** function with the backup plan name as an input so we can call it multiple times for different plans.

> **_<font face="Courier New">
    <font color="#0000a0">function</font> <font color="#9b00d3">Run-SyncToy</font> (<font color="#ff0000">$backupPlan</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#ff0000">$Exe</font> = <font color="#c0504d">"C:\Program Files\SyncToy 2.1\SyncToyCmd.exe"</font>
    > &nbsp;&nbsp;&nbsp; &amp; <font color="#ff0000">$Exe</font> <font color="#0000a0">-R</font> <font color="#ff0000">$backupPlan</font>
    > }
</font>_**

### Write PowerShell Output to File

Logically, I’m running this script overnight and I would like to understand what happened while I’m away, so we’ll write the output of the script to a log file named with the date of when the script ran.

To write the output of any PowerShell command or function to file, use the **_Out-File_** cmdlet. This [TechNet page](http://technet.microsoft.com/en-us/library/ee176924.aspx) explains how to use it. Example:

> **_<font face="Courier New"><font color="#0000ff">Get-ChildItem</font> | <font color="#0000ff">out-file</font> <font color="#c0504d">"D:\MyOutputFile.txt"</font> <font color="#0000a0">-Append -Force</font> </font>_**

This line write the output of the **_Get-ChildItem_** cmdlet to the text file named **_MyOutputFile.txt_** under the D drive. Notice the use of the two arguments –**_Append_**&nbsp; (which appends to the file if it already exists) and –**_Force_** (which creates the file if it doesn’t exist).

We’ll need to stamp the file name with time of when the script ran, to do that we’ll use the **_Get-Date_** cmdlet and the argument –**_Format_**. Example:

> _**<font face="Courier New"><font color="#0000ff">Get-Date</font> <font color="#0000a0">-format</font> <font color="#c0504d">"yyyy-MM-dd HH-mm-ss"</font></font>**_

### Putting It All Together

You can notice that all the work above just creates functions to be used in the main body of the script. Here’s where we put it all together.

> _**<font face="Courier New">
    <font color="#0000ff">Clear-Host</font>
    > <font color="#008000">
        # Decleare variable to hold the service name
        >
    </font><font color="#ff0000">$serviceName</font> = <font color="#c0504d">"MSSQL`$SQLEXPRESS"</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Where the log file will be stored</font>
    > <font color="#ff0000">$logHome</font> = <font color="#c0504d">"D:\Amr\Backup\BackupLogs\"</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Get timestamp</font>
    > <font color="#ff0000">$timeStamp</font> = <font color="#0000ff">Get-Date</font> <font color="#0000a0">-Format</font> <font color="#c0504d">"yyyy-MM-dd HH-mm-ss"</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Generate name of log file</font>
    > <font color="#ff0000">$logFile</font> = <font color="#ff0000">$logHome</font> + <font color="#c0504d">"Backup Log "</font> + <font color="#ff0000">$timeStamp</font> + <font color="#c0504d">".txt"</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Write a starting message</font>
    > <font color="#c0504d">"Starting backup at $timestamp"</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000">
        # Stop the SQL service if it's running
        >
    </font><font color="#ff0000">$serviceStatus</font> = <font color="#0000ff">Get-SqlServiceStatus</font> (<font color="#ff0000">$serviceName</font>)
    > <font color="#c0504d">"Service $serviceName is $serviceStatus."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#0000a0">if</font> (<font color="#ff0000">$serviceStatus</font> <font color="#a5a5a5">-eq</font> <font color="#c0504d">"Running"</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#c0504d">"SQL service is running, stopping it..."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > &nbsp;&nbsp;&nbsp; <font color="#0000ff">Stop-SqlService</font> (<font color="#ff0000">$serviceName</font>) <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > }
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Unmount Codebox if it was already mounted</font>
    > <font color="#ff0000">$CodeboxMounted</font> = <font color="#0000ff">Exists-Drive</font> <font color="#c0504d">
        "M:"
        >
    </font><font color="#0000a0">if</font> (<font color="#ff0000">$CodeboxMounted</font> <font color="#a5a5a5">-eq</font> <font color="#c0504d">"True"</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#c0504d">"Codebox is mounted. Unmounting Codebox..."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#008000">&nbsp;&nbsp;&nbsp; # Unmount Codebox</font>
    > <font color="#0000ff">&nbsp;&nbsp;&nbsp; Unmount-Codebox</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#c0504d">&nbsp;&nbsp;&nbsp; "Codebox is not mounted now."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > }
    > <font color="#0000a0">else</font>
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#c0504d">"Codebox is not mounted"</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > }
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Run sync toy</font>
    > <font color="#0000ff">Run-SyncToy</font> (<font color="#c0504d">"TestBackup"</font>) <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Mount Codebox if it was already mounted</font>
    > <font color="#0000a0">if</font> (<font color="#ff0000">$CodeboxMounted</font> <font color="#a5a5a5">-eq</font> <font color="#c0504d">"True"</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#c0504d">"Mounting Codebox..."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#008000">&nbsp;&nbsp;&nbsp; # Mount Codebox</font>
    > <font color="#0000ff">&nbsp;&nbsp;&nbsp; Mount-Codebox</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#c0504d">&nbsp;&nbsp;&nbsp; "Codebox is mounted now."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > }
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Run the SQL service if it's stopped</font>
    > <font color="#ff0000">$serviceStatus</font> = <font color="#0000ff">Get-SqlServiceStatus</font> (<font color="#ff0000">$serviceName</font>)
    > <font color="#c0504d">"Service $serviceName is $serviceStatus."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#0000a0">if</font> (<font color="#ff0000">$serviceStatus</font> <font color="#a5a5a5">-eq</font> <font color="#c0504d">"Stopped"</font>)
    > {
    > &nbsp;&nbsp;&nbsp; <font color="#c0504d">"Starting SQL service..."</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > <font color="#0000ff">&nbsp;&nbsp;&nbsp; Start-SqlService</font> (<font color="#ff0000">$serviceName</font>) <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
    > }
</font>**_
>
> _**<font face="Courier New">
    <font color="#008000"># Write end message</font>
    > <font color="#ff0000">$finishTime</font> = <font color="#0000ff">Get-Date</font> <font color="#0000a0">-Format</font> <font color="#c0504d">"yyyy-MM-dd HH-mm-ss"</font>
    > <font color="#c0504d">"Backup script finished at $finishTime"</font> <font color="#a5a5a5">|</font> <font color="#0000ff">out-file</font> <font color="#ff0000">$logFile</font> <font color="#0000a0">-Append -Force</font>
</font>**_

### Try It Out Yourself

You probably have a different backup strategy, but you can still take advantage of PowerShell and SyncToy in a whole host of other scenarios. [Download the script here](https://skydrive.live.com/?cid=a0f4e46186f7cce4&amp;sc=documents&amp;id=A0F4E46186F7CCE4%211240#). Tweak it till it fit your requirements and please leave a comment below if you have a question or found a bug somewhere in the script. Even if not for mirroring hard drives, this still was a nice exercise for using PowerShell.

<iframe style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview" marginheight="0" src="https://skydrive.live.com/embedicon.aspx/Public/Blog/Mirroring%20Hard%20Drives%20using%20PowerShell%20and%20SyncToy/MirrorDrives.ps1?cid=a0f4e46186f7cce4&amp;sc=documents" frameborder="0" marginwidth="0" scrolling="no"></iframe>  