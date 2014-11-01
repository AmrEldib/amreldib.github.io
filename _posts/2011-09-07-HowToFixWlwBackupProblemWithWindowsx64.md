---
layout: post
name: HowToFixWlwBackupProblemWithWindowsx64
title: How to fix WLW Backup problem with Windows x64
time: 2011-09-07 07:25:00.001000000 -07:00
tags:
- Tools
- ".NET"
- Windows Live Writer
- Windows Live
- Debugging
- Backup
redirects:
- /2011/09/how-to-fix-wlw-backup-problem-with.html
---
![](http://pocketpccentral.net/blog/wp-content/uploads/2009/08/Windows_Live_Writer_logo.png)I, like most bloggers out there, love Windows Live Writer. One problem I have with it is that I have to set it up whenever I re-install Windows. Long ago I found that I can backup all my posts (recently posted and drafts) just copying the two folders “Drafts” and “Recent Posts” from the folder
 > **C:\Users\&lt;UserName&gt;\Documents\My Weblog Posts**

However, I wanted to backup more than that. I wanted to backup my blog configurations and other settings. So, I searched a little bit (using [Kngine](http://www.kngine.com/) which is great, give it a try) and I found [WLW Backup tool](http://wlwbackup.codeplex.com/) that can backup blog settings, drafts, recent posts, and plugins. The link I’ve listed here is for the project on CodePlex where the project went open source by its developer [Scott Lovegrover](http://scottisafool.wordpress.com/).

Before I found this latest version I downloaded version 2.0 and tried to backup my WLW settings and an error occurred.
 > **System.BadImageFormatException: Could not load file or assembly 'CabLib, Version=6.9.26.0, Culture=neutral, PublicKeyToken=null' or one of its dependencies. An attempt was made to load a program with an incorrect format.
> File name: 'CabLib, Version=6.9.26.0, Culture=neutral, PublicKeyToken=null'**

The application comes in two simple assemblies LiveWriterBackup.exe and CabLib.dll (and two icons). [CabLib.dll](http://www.codeproject.com/KB/files/CABCompressExtract.aspx) is compression and extraction library that LiveWriterBackup.exe is using to compress all the backed up files into one file. This was a .NET exception, so I got interested and started to try to fix the problem. Reading the error, it seems like LiveWriterBackup.exe can’t find CabLib.dll. A bit of searching, and I found that [some SharePoint developers](http://sharepoint400.blogspot.com/2011/02/could-not-load-file-or-assembly-cablib.html) were having the same problem with the CabLib.dll file. They fixed it by replacing the CabLib.dll with the x64 version. I tried that but now I got a new error:
 > **System.IO.FileLoadException: Could not load file or assembly 'CabLib, Version=6.9.26.0, Culture=neutral, PublicKeyToken=null' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)**

Seems like the two assemblies didn’t really match. Instead of getting around it, I needed to fix the actual problem. Why can’t LiveWriterBackup.exe find CabLib.dll? Maybe there’s a bug with the application itself. I decided to look inside. I fired up [JustDecompile](http://www.telerik.com/products/decompiler.aspx) and loaded the LiveWriterBackup.exe. The executable have a direct reference to CabLib.dll and don’t have any assumptions other than how .NET assemblies [find other assemblies](http://msdn.microsoft.com/en-us/library/15hyw9x3%28v=VS.100%29.aspx).

Back to search. Remove some search words and try different combinations. Then I found the solution on a [Chinese blog](http://www.cnblogs.com/atfield/archive/2009/04/03/1429286.html). ![](http://images.cnblogs.com/cnblogs_com/atfield/WindowsLiveWriter/CorFlagsWindowsLiveWriterBackupUtilityBu_120B4/clip_image006%5B4%5D.jpg)God bless Google translation which [came to the rescue](http://translate.google.com/translate?sl=zh-CN&amp;tl=en&amp;js=n&amp;prev=_t&amp;hl=en&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;u=http%3A%2F%2Fwww.cnblogs.com%2Fatfield%2Farchive%2F2009%2F04%2F03%2F1429286.html). The problem wasn’t in the CabLib.dll but rather in LiveWriterBackup.exe which was built with the setting “Any CPU” on a 32bit machine so all it’s testing went okey. But when tried on a 64bit machine like mine, it actually ran as a 64bit application trying to call a 32bit CabLib.dll. You can see that in the screenshot of Task Manager. You can see 32bit applications have a *32 next to them while the LiveWriterBackup.exe process doesn’t.

So the solution is get an executable that is built for 32 bit configurations. Or we just use [Corflags](http://msdn.microsoft.com/en-us/library/ms164699%28VS.80%29.aspx). It’s a tool that allows you to configure the CorFlags section of the header of an executable. It’s what Rafeel Rivera was referring to in his [recording](http://www.hanselman.com/blog/HanselminutesPodcastEpisodeRollup273Through280GlimpseJavaScriptKinectScriptPolyGlotAzureWindowsAndGraphDatabases.aspx) (listen [here](http://www.hanselminutes.com/default.aspx?showID=299)) with Scott Hanselman as “flipping bits” which seems to be a known term. Here’s “<font style="font-weight: normal">[Flipping bits on managed images to make them load with the right bitness](http://blogs.msdn.com/b/joshwil/archive/2005/05/06/415191.aspx)</font>”

I just browsed using the command line to the location of the Corflags executable (C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin) and I ran the command
 > **Corflags “C:\Program Files (x86)\Windows Live Writer Backup\LiveWriterBackup.exe” /32BIT+**

Tried again to backup settings and it worked. Testing on x64 machines is necessary as x64 machines are becoming more and more popular. Also, try not to build to “Any CPU” unless you test on all CPUs. More importantly, when debugging try to know the bitness of all the participating assemblies that are causing trouble.

Happy debugging.
