---
layout: post
name: SyncWindowsLiveWriterPostsBetweenComputers
title: Sync Windows Live Writer Posts Between Computers
time: 2012-01-11 21:25:00.001000000 -08:00
tags:
- Tools
- Windows Live Writer
- Windows Live
- Sync
- Microsoft
redirects:
- /2012/01/sync-windows-live-writer-posts-between.html
---
![](https://public.sn2.livefilestore.com/y1pXz9ghSH071kCGDO68fx3YcX_s4r_Sa1Mgtl4A3-gYaCHW4rsiWuBfvBf3ebP9KNoMh1ByZWWaiukqRLpMf2b0Q/Windows_Live_Writer_logo.png?psid=1)With all the different PCs between work and home, desktops and laptops, synchronization is becoming very important. I wanted to sync blog drafts between different computers which turned out to be very simple. Unfortunately, Windows Live doesn’t offer a solution out of the box, even though Windows Live Essentials comes with Live Mesh along with Live Writer. It’s a matter of putting two and two together which what I’ll do.

First, [change the posts folder of WLW](http://www.lehsys.com/2011/04/how-to-change-the-drafts-and-recent-posts-folder-in-windows-live-writer-2011/) (Windows Live Writer):
 > > _1. Open up regedit (in Win7, just type “regedit” into the start menu) _ <p>_2.** **Navigate to **HKEY_CURRENT_USER\Software\Microsoft\Windows Live\Writer**_  <p>_3. Right click on the “Writer” folder in the left pane and choose New &gt; String Value _ <p>_4. Name the value **PostsDirectory** and then double-click on it to edit _ <p>_a. You can try pointing it to your documents folder, which is normally “C:\Users\&lt;your-username&gt;\Documents\” in Win7 _ <p>_b. Or point it somewhere else. Note that Writer will create two child folders wherever you point it: **Drafts** and **Recent Posts**._ <p>The folder I switch to is a folder under the folder I keep synced with Live Mesh. On the other computer, do the same steps. Change the posts folder to the folder you keep synced with Live Mesh. You’ll need to copy your existing posts and drafts from their original location which normally is **_C:\Users\[User Name]\Documents\My Weblog Posts_**  <p>Now you can start a post on my computer and finish it on the other. More importantly, you now have a backup of all your drafts on your SkyDrive.  <p>You can, of course, use Dropbox or any other synchronization service to keep the posts in sync.     