---
layout: post
name: TldrAntiClickbait
title: 'TL:DR - The Anti-Clickbait'
time: 2016-01-01 16:32:00.003000000 -08:00
tags: []
---
[Source](http://askubuntu.com/questions/426326/how-to-change-firefox-debugger-font-size)

This works for me in ~/.mozilla/firefox/profile-name/chrome/userChrome.css.

@namespace url(http://www.w3.org/1999/xhtml);
```
@-moz-document regexp("chrome://browser/content/devtools/.*"){
* { font-size: 20px !important }
}
```

