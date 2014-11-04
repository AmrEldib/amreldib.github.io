---
layout: post
name: ChangeStyleOfFirefoxDevTools
title: Change Style of Firefox DevTools
time: 2016-01-01 16:32:00.003000000 -08:00
tags: []
---
This works for me in ~/.mozilla/firefox/profile-name/chrome/userChrome.css.

@namespace url(http://www.w3.org/1999/xhtml);
```
@-moz-document regexp("chrome://browser/content/devtools/.*"){
* { font-size: 20px !important }
}
```

