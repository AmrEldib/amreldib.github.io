---
layout: blogPostWithComments
name: EnableWindowsAuthenticationInFirefox
title: Enable Windows Authentication in Firefox
time: 2014-09-27 17:21:00.001000000 -07:00
category: blog
frontpage: 'true'
tags:
- Security
- Tips
- Windows
- Firefox
redirect_from: "/2014/09/EnableWindowsAuthenticationInFirefox.html"
---
**_TL;DR:_** for Firefox users, here’s how to integrate Windows Authentication to enable logging like IE (without entering credentials). 

I use Firefox as my primary browser. At work, we've just started a big consolidation of all the companies sites and cloud services (that we use) to rely on Windows Authentication. Instead of just Windows and Outlook requiring your Windows credentials, now everything needs them including CRM, messaging service, partner sites, etc. So, I found that I’m entering my credentials over and over all the time.

IE, of course, integrates Windows Authentication. Firefox, for the longest time I thought, doesn't.

But I wanted to avoid this (laziness is the mother of all inventions). So, I did a bit of research and found that Firefox actually does support integrating Windows Authentication. However, it’s done via a white-list of sites that are pre-approved. Once this is configured, signing in is done automatically without having to enter credentials anymore.

**<u>To configure Firefox to skip the Windows credentials dialog, do the following</u>**:

*   In the address bar, type _about:config_ and press Enter.
*   Click “_I’ll be careful, I promise!_”.
*   Search for “_network.automatic-ntlm-auth.trusted-uris_”.
*   Double-click on the entry to modify its value.
*   Enter a comma-separated list of sites you want to enable Windows Authentication for.
*   The URLs to be added should be the base URL without ‘http://’ in front. This makes it easy to avoid entering the wrong value.

If you use Firefox, apply these steps to quickly log into sites that uses Windows authentication.

If you don’t use Firefox, you really should. Check out [Tab Groups](https://support.mozilla.org/en-US/kb/tab-groups-organize-tabs).

[![]({{ site.imgFolder_blog }}{{ page.name }}/TabGroup.jpg)]({{ site.imgFolder_blog }}{{ page.name }}/TabGroup.jpg)

It’s better than this :D
[![]({{ site.imgFolder_blog }}{{ page.name }}/ChromeTabs.jpg)]({{ site.imgFolder_blog }}{{ page.name }}/ChromeTabs.jpg)
