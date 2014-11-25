---
layout: post
name: ChangeStyleOfFirefoxDevTools
title: Change Style of Firefox DevTools
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

## Tiny Things that Windows Should Fix

- Make all the Windows Resizable.
	- Example is the Disk Cleanup windows. Why is this not resizable?
- Make all the Icons high-resoulation.
- Make all the fonts look better on all screens.
- Description of every thing.
- Search all the dialogs/options.
	- One of the best things about the new Visual Studio is the search box for the Options dialog. I must be able to search for any option.
	- I also should be able to search using something like: "I want to do x?" and not know what dialog I should use.
	- Example: "I want to open port x" should take me to the Firewall section.
- Registry editor is overdue for an upgrade.
	- Add ability for backup built into it. Call is snapshots.
	- Add descriptions.
	- There are plenty of well-known safe Registry Hacks that can easily be added to the Regsitry that allows users much greater control.
