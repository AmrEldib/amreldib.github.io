---
layout: post
name: Windows7MissingPoint
title: 'Windows 7: Missing The Point'
time: 2008-12-29 21:40:00.001000000 -08:00
tags:
- Windows
- Microsoft
redirects:
- /2008/12/windows-7-missing-point.html
---
With everyone reviewing the first “beta” of Windows 7, I wouldn’t say that this is a first look. If you haven’t seen these snapshots before, you’re definitely not online.

Two quick notes before we start. **First**, It’s not really a beta, it’s just Build 7000 which the Microsoft [page](http://www.microsoft.com/windows/windows-7/) for Windows 7 doesn’t confirm as an official beta. However they have a “What’s coming in the Windows 7 beta” title in the page. **Second**, how I got it and how can you. It’s out there, man. you know it, I know it, even Microsoft knows it. Anyway, Let’s dive in.

Was it 20 minutes? maybe a little more, I’m not sure. But I’m sure that the installation is much faster than Vista and XP. The installation is pretty much straight forward and similar to Vista except for the option to setup a “homegroup” which was the first thing to grab my attention (only because I saw the new task bar in snapshots. We’ll get to that later).

Homegroup is simply a simple way to create a home network. The name is – I think – an opposite to Workgroup which is the nickname for any network group with no domain controller. So, Other than the name, how’s a Homegroup is different from a Workgroup?

<a title="Click for larger image" href="{{ site.imagesFolder }}{{ page.name }}/Win7-CreateHomegroupStep2.jpg">
    <img class="imageOnRight" src="{{ site.imagesFolder }}{{ page.name }}/Win7-CreateHomegroupStep2-Zoom.jpg">
</a>
It’s easier to create/join a Homegroup. Open a Windows Explorer and choose “Homegroup” on the left and you get the wizard. When you click to create a homegroup you get the option to share a “Library”.

Library is a new word for me, so I decided to follow what it means. I found in the task bar an icon with a folder in it.

<img class="imageInCenter" src="{{ site.imagesFolder }}{{ page.name }}/Win7-TaskbarWithWindowsExplorer.jpg">

I assumed that it’s “My Computer” or “Computer” (since Microsoft decided in Vista that it’s not mine anymore) but it turns out to be Windows Explorer and it opens on “libraries”

<a title="Click for larger image" href="{{ site.imagesFolder }}{{ page.name }}/Win7-LibrariesBig.jpg">
    <img class="imageInCenter" src="{{ site.imagesFolder }}{{ page.name }}/Win7-LibrariesSmall.jpg">
</a>

Interesting, so is this like [Virtual folders](http://en.wikipedia.org/wiki/Virtual_folder#Windows) from Vista that never really made it to mainstream? Yes, but with a different approach. Virtual folders was [a shortcut to the results of search keyword](http://www.winsupersite.com/showcase/winvista_virtualfolders.asp) except the results are dynamic. It wasn’t a snapshot of the results but a shortcut to the search. In Windows 7, a library is a pool of the content of many folders in one view which is great if you want to find things quickly unless those things have the same name because the view doesn’t show content with the same name differently. so you can easily end up with this.

<a title="Click for larger image" href="{{ site.imagesFolder }}{{ page.name }}/Win7-LibraryViewBig.jpg">
    <img class="imageInCenter" src="{{ site.imagesFolder }}{{ page.name }}/Win7-LibraryViewSmall.jpg">
</a>

So, a library is a folder of folders which is cool but my question is “Why?”. Isn’t the whole point of folders is to keep things organized and if you want to find them use “Search”. The only logical benefit of libraries is to combine the content of different folders in your machine and offer them in one entry point on a Homegroup which is exclusive to Windows 7 machines (a note in the Help section) at Home (at least for now, not clear if it’s offered through Windows Server).

What I’m trying to say – again - is “Why?”. Libraries in Windows 7 are replacing “My Documents”. If you click “Documents” in Start menu, windows explorer opens on the “Documents” library. So, Microsoft is pushing libraries as the default option (with no obvious chance for the user to change this default).

Anyway, what’s the default folders included in this Documents library? Two folders, [My] Documents and Public Documents. This choice brings another subject to my attention. My Documents. There are couple of issues here:

- Anyone who ever had to suddenly re-install Windows (which is a big portion of the Windows population) knows very well that keeping files under My Documents is a bad bad bad idea. Why there isn’t a way to easily change the default location of My Documents, anyway?
- The default and only breakdown of folders includes Documents, Downloads, Favorites, Music, Pictures, Videos (and other less famous ones). Of course you can create new folders, but Microsoft is treating those folders specially, they’re referenced in all Microsoft application in Windows and sometimes you can’t get rid of them. Like Windows Media Player you can’t remove the “Users” folder. You can only “Ignore” it.

<img class="imageInCenter" src="{{ site.imagesFolder }}{{ page.name }}/MediaPlayer-LibraryFolders.jpg">

- Other than My Documents, there are also Public Documents. Now, you can share My Documents and you can share Public Documents. In Windows 7 they’re combined in the Documents library. Again, the urging question, “Why?”. What’s the point of having two folders?

**Back to libraries in Windows 7**, if you take a look at the [image]({{ site.imagesFolder }}{{ page.name }}/Win7-CreateHomegroupStep2.jpg) of the wizard. You’ll notice that you can select the libraries to share and they’re only limited to the default libraries created by Microsoft (by the way, if you shared a default library after you have deleted it. It will be created again!!!). Now, What about “My” libraries? the ones that I created. I have to use something similar to “Share” in Windows Vista. _How is this faster or simpler?_ Why can’t the windows Users folder be easily customizable and expandable. Why can’t it have profiles based on the user category? Does Microsoft really think that ALL Windows users are the same? I want to be able to apply a certain User folder based on my category (Student, Power user, Developer, Mum, etc.) and I want those profiles to be expandable, editable and created by the community.

For my first look at Windows 7, Microsoft is missing the point on why they’re making changes. Not only for the libraries, but also for the new taskbar. But that’s another post.
