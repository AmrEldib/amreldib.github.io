---
layout: blogPost
name: Chocolatey
title: 'Chocolatey: Install Software like a Pro'
time: 2014-02-09 15:35:00.001000000 -08:00
category: blog
commentsSection: 'true'
tags:
- Chocolatey
- Tools
- Tips
- Windows
- PowerShell
- Microsoft
redirect_from: "/2014/02/ChocolateyInstallSoftwareLikeAPro.html"
---
<img class="imageOnRight" src="{{ site.imgFolder_blog }}{{ page.name }}/chocolateyicon.gif">

I use a lot of software, and always there's a nagging voice in head saying "you're not using the latest version. Update. Update. Update". Of course, sometimes that nagging voice is up on the screen asking me to update. However, as fun as using the latest version can be, the process of updating is not as fun. Downloading and installing takes a lot of time. Sometimes you have to uninstall the previous version. Sometimes, you even have to check if there's a new version yourself. You have to be careful to avoid installing adware. While some software is getting better at this, others (I'm looking at you, Adobe Flash. You really suck) are going backward and ask you to download the software yourself.

One the best thing about Linux that all this is taking care of. On Ubuntu, for example, you use apt-get to download and install software and keep it update with a single command.
Now, [Chocolatey](http://chocolatey.org/) brings this smooth install and update process to Windows. Chocolatey is an open source free software built on top of [NuGet](https://www.nuget.org/); a package management technology offered as part of Visual Studio.

Chocolatey offers a [gallery](http://chocolatey.org/packages) of software, much like an App Store where you can browse for the application you like, find the command for it, then from your command line, install it.

First you need to setup Chocolatey on your system, using a PowerShell command:

> @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex  ((new-object  net.webclient).DownloadString('https://chocolatey.org/install.ps1'))"  && SET PATH=%PATH%;%systemdrive%\chocolatey\bin

This one line command will download a PowerShell script from Chocolatey and run it, after allowing for unrestricted execution policy (which you disable later).

After you run this command, you can now install applications. Here's how to install [7-zip](http://chocolatey.org/packages/7zip.install):  

> cinst 7zip.install

This command will install 7-zip under the "Program Files" folder (or "Program Files (x86)" if you use a x64 system). It will also register 7-zip with Chocolatey so that it can be updated later. If 7-zip is already installed, it will be updated (if an update is available), and registered with Chocolatey.

When you're picking a package from the Chocolatey gallery, make sure you're choosing the correct one. Sometimes there are packages with different options. For example: there's a [portable package](http://chocolatey.org/packages/7zip) for 7-zip, and there's the [install package](http://chocolatey.org/packages/7zip.install) that I used above. You can read more about [Chocolatey's install vs. portable](https://github.com/chocolatey/chocolatey/wiki/ChocolateyFAQs#wiki-what-distinction-does-chocolatey-make-between-an-installable-and-a-portable-application) packages.

While you're installing your applications, make sure to keep track of all the commands you used. This will be helpful later when you're installing a new system. In one text file, you can keep track of almost all the applications you're using.

Later on, you'll need to update. Super easy, just type in the command line: > `cup all`

If you need help remember those commands: _cinst_ is short of _**C**hocolatey **Inst**all_. _cuninst_ is short for _**C**hocolatey **UnInst**all_. And _cup all_ is short for _**C**hocolatey **Up**date **All**_.
You can read the [Chocolatey command reference](https://github.com/chocolatey/chocolatey/wiki/CommandsReference) for more details.

If you like the ease of Chocolatey but hate the command line, you can use [Chocolatey GUI](http://chocolatey.org/packages/ChocolateyGUI) to do the same thing. It's a little bit slow so far, but it's very promising. 