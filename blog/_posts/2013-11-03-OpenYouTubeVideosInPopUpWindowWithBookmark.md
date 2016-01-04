---
layout: blogPost
name: OpenYouTubeVideosInPopUpWindowWithBookmark
title: Open YouTube Videos in PopUp Window with a Bookmark
time: 2013-11-03 19:03:00.000000000 -08:00
category: blog
commentsSection: 'true'
excerpt: "Follow these steps to add a bookmark to your browser that opens YouTube videos in a popup window"
tags:
- JavaScript
- YouTube
- Tips
- Browsers
- Code
redirect_from: "/2013/11/OpenYouTubeVideosInPopUpWindowWithBookmark.html"
---
**TL;DR** Follow these steps to add a bookmark to your browser that opens YouTube videos in a popup window. 

Aside from my laptop, I use two monitors. This allows my to "multitask" which is fancy talk for having something running/playing in the background while I'm actually working.
Sometimes the thing that is running in the background is a YouTube video. This is great with music videos and long videos that don't need my full attention. However, I find it annoying to have the YouTube page or video fill the entire screen. What I need is a small window with just the video. I don't really need the comments, suggestions, header, etc.

The embed HTML is the key here. You can right-click on the video and directly copy the embed code. It looks like this:
[![]({{ site.imgFolder_blog }}{{ page.name }}/CopyYouTubeEmbedCode.png)]({{ site.imgFolder_blog }}{{ page.name }}/CopyYouTubeEmbedCode.png)  

<script src="https://gist.github.com/AmrEldib/7297359.js"></script>

Embed code has a lot of options that you can view in the [help section](https://support.google.com/youtube/answer/171780?hl=en#171780).  
This embed code is of an iFrame that opens a YouTube page at a certain URL. YouTube would actually take care of removing all of the extra stuff that I don't need.  
Browser bookmarks can run a JavaScript function which would open a popup window of a YouTube page with just this video.

<script src="https://gist.github.com/AmrEldib/7297410.js"></script>

The JavaScript function looks at the active browser tab and picks up the unique ID of the video before constructing the embed URL and opening a new browser window with that URL.
To avoid a predictable problem, the function will make sure that you're on a YouTube page before it opens the popup window. If not, it will display an error message. 

### How to Add This to My Browser

1.  Copy this code:  
<script src="https://gist.github.com/AmrEldib/7297410.js"></script>  
2.  Open your browser's Bookmark window.
3.  Create a new bookmark, and give it a name. Say: Popup YouTube Video.
4.  In the location, paste the code listed above.
5.  You're all done.