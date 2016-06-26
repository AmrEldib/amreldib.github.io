---
layout: blogPost
name: FixJekyllCaseSensitiveUrlsOnGitHubPages
title: "Fix Jekyll Case Sensitive URLs On GitHub Pages"
time: 2016-02-06 22:51:00.003000000 -08:00
category: blog
commentsSection: 'true'
frontpage: 'true'
excerpt: "GitHub Pages requires case sensitive URLs. Here's how to overcome this problem and avoid 404s for your Jekyll site hosted there."
tags: 
- Jekyll
- GitHub Pages
---

I like to capitalize the first letters in names that doesn't allow for spaces. It makes it easier to read.  
Consider this name 'fixjekyllcasesensitiveurlsongithubpages' compared to this 'FixJekyllCaseSensitiveUrlsOnGitHubPages'. The first is just a long string of characters while the second is easily readable text even without spaces.  
This is why I like to maintain my URLs to have capital letters. However, GitHub pages URLs are case sensitive. It's a [well known issue](http://stackoverflow.com/questions/25815954/make-github-pages-case-insensitive).  
While most people just use lower case for their URLs. I didn't like this option.  
To fix this, I can let the user go to the 404 page and have a script there match the URL entered by the user with the URLs of all pages on the site (while ignoring the casing). If there's a match, forward the user to the URL with the correct casing.  
To implement this in your Jekyll site hosted on GitHub Pages, add this script (inside a script tag) to your 404 page.  
  
<script src="https://gist.github.com/AmrEldib/81a4660fe00da8f11956.js"></script>
  
  
Try it by visiting this URL [amreldib.com/blog/howtoaskaquestion/](//amreldib.com/blog/howtoaskaquestion/) which should be [amreldib.com/blog/HowToAskAQuestion/](//amreldib.com/blog/HowToAskAQuestion/)  
