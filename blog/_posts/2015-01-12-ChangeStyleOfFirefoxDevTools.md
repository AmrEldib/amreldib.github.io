---
layout: postWithComments
name: ChangeStyleOfFirefoxDevTools
title: Change Style of Firefox DevTools
time: 2015-01-12 16:32:00.003000000 -08:00
category: blog
frontpage: 'true'
tags: 
- Firefox
- DevTools
- Tips
---

<img class="imageInCenter" title="Firefox DevTools with Ubuntu font size 14px" src="{{ site.blogImagesFolder }}{{ page.name }}/FirefoxDevTools.png">

I spend a lot of time now in the Firefox Dev Tools. The console has a very nice dark theme which makes things easier but some times that's not enough. You can find the font a little small (which you can fix with a Ctrl + '+'), but mostly after a while you just find yourself bored of looking at the same thing. Time for a bit of change.  
After a quick search on DuckDuckGo, I find the [answer](http://askubuntu.com/questions/426326/how-to-change-firefox-debugger-font-size) on StackExcange (the AskUbuntu site), and it was really easy.  

Create a new userChrome.css file (You read that right. Before Chrome, chrome just meant window). Create the file under: 

```
%USERPROFILE%\AppData\Roaming\Mozilla\Firefox\Profiles\<PROFILE NAME>\chrome\userChrome.css
```

In the file, add the style you want.

```
@namespace url(http://www.w3.org/1999/xhtml);
@-moz-document regexp("chrome://browser/content/devtools/.*"){
* { font-size: 20px !important }
}
```

Restart Firefox.