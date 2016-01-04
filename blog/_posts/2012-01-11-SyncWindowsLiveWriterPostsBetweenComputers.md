---
layout: blogPost
name: SyncWindowsLiveWriterPostsBetweenComputers
title: Sync Windows Live Writer Posts Between Computers
time: 2012-01-11 21:25:00.001000000 -08:00
category: blog
commentsSection: 'true'
excerpt: "Keep posts in sync to write anywhere"
tags:
- Tools
- Windows Live Writer
- Windows Live
- Sync
- Microsoft
redirect_from: "/2012/01/sync-windows-live-writer-posts-between.html"
---
<img class="imageOnRight" title="Windows Live Writer" src="{{ site.imgFolder_blog }}{{ page.name }}/Windows_Live_Writer_logo.png">

With all the different PCs between work and home, desktops and laptops, synchronization is becoming very important. I wanted to sync blog drafts between different computers which turned out to be very simple. Unfortunately, Windows Live doesn’t offer a solution out of the box, even though Windows Live Essentials comes with Live Mesh along with Live Writer. It’s a matter of putting two and two together which what I’ll do.

First, [change the posts folder of WLW](http://www.lehsys.com/2011/04/how-to-change-the-drafts-and-recent-posts-folder-in-windows-live-writer-2011/) (Windows Live Writer):
1. Open up regedit (in Win7, just type “regedit” into the start menu).  
2. Navigate to **HKEY_CURRENT_USER\Software\Microsoft\Windows Live\Writer**  
3. Right click on the "Writer" folder in the left pane and choose New &gt; String Value  
4. Name the value **PostsDirectory** and then double-click on it to edit:  
	- You can try pointing it to your documents folder, which is normally "C:\Users\&lt;your-username&gt;\Documents\" in Win7  
	- Or point it somewhere else. Note that Writer will create two child folders wherever you point it: **Drafts** and **Recent Posts**.  

The folder I switch to is a folder under the folder I keep synced with Live Mesh. On the other computer, do the same steps. Change the posts folder to the folder you keep synced with Live Mesh. You'll need to copy your existing posts and drafts from their original location which normally is **_C:\Users\[User Name]\Documents\My Weblog Posts_**   
Now you can start a post on my computer and finish it on the other. More importantly, you now have a backup of all your drafts on your SkyDrive.  
You can, of course, use Dropbox or any other synchronization service to keep the posts in sync.     