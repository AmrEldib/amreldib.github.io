---
layout: post
name: AddRtlSupportAndWebFontsToTumblrPosts
title: Add RTL Support and Web Fonts to Tumblr Posts
time: 2013-05-04 16:53:00.001000000 -07:00
tags:
- Tools
- Tumblr
- Tips
- CSS
- HTML
- Arabic
- RTL
- Code
redirects:
- /2013/05/add-rtl-and-web-fonts-to-tumblr-posts.html
---
<a href="{{ site.baseurl }}public/images/RtlSupportInTumblr/ArabicTumblr_thumb.png"><img style="float: right" src="{{ site.baseurl }}public/images/RtlSupportInTumblr/ArabicTumblr_thumb.png"></a>
This is my technical blog. My [personal blog](http://amreldib.tumblr.com/), where I write mostly in my native Arabic, is hosted on Tumblr which is a nice platform but is really bad in supporting Arabic and other RTL languages. At least that's my experience.

 So finally I got sick of it and decided that I’m gonna fix this with some HTML and CSS magic. Maybe with [some help](http://rtl-this.com/tutorial/how-rtl-your-tumblr-theme). I did find that Tumblr has some nice features that helps fixing the problem. Let’s see how.

Tumblr lets you modify the HTML and insert additional CSS to your page. You gotta be careful when you’re doing this. At least make a backup of your page before you try new changes.

One nice feature is that you can add [{TagsAsClasses}](http://www.tumblr.com/docs/en/custom_themes) as a CSS class. This will allow Tumblr to read the tags you attach to your post and apply them as a CSS class. I’ll use this as a way of marking the Arabic posts that I’d like to display from Right-to-Left. For every one of these posts, I’ll add the tag “arabic” and then Tumblr will apply the CSS class to that post.

I’ve used a simple theme named [Quite Big](http://www.tumblr.com/theme/9601) as my base theme. You’ll find a DIV with the classes “content” and “_x_-post”. x-post is not the name of a class but rather text-post, photo-post, quote-post, and link-post. One class for each type of post.

<a href="{{ site.baseurl }}public/images/RtlSupportInTumblr/TumblrPostsTypes_thumb.png"><img style="float: right" src="{{ site.baseurl }}public/images/RtlSupportInTumblr/TumblrPostsTypes_thumb.png"></a>

You’ll need to find each one of these DIVs and add “{TagsAsClasses}” to its CSS classes.

<script src="https://gist.github.com/AmrEldib/5519226.js"></script>

###  Wait, where can I get the HTML?

In the [Settings](https://www.tumblr.com/settings) section, click on the item at the bottom of the list on the left where you should see your avatar. Next to “Theme”, click “Customize”.
On the left, you’ll find “Edit HTML”.

After you save the modified HTML. While in the “Customize” mode, scroll down to the bottom in the pane on the left. You’ll find a “Add Custom CSS” section. This is where we’ll add a definition of how we want to display the Arabic posts.

{TagsAsClasses} allows us to add a tag to any post and apply it as a CSS class. The name of the CSS class must match the name of the tag. In my case, I chose “arabic”. Here’s the CSS I used.

<script src="https://gist.github.com/AmrEldib/5519240.js"></script>

This will apply the RTL direction, it will align the text to the right, and make the font size a little bit bigger.

###  How to Use Web Fonts?

Now that I went through the posts and added the “arabic” tag and everything is right to left. I need a good font to really make the blog look beautiful. Nothing pleases me when I’m writing Arabic like the [Amiri font](http://sourceforge.net/projects/amiri/). Since it’s available on [Google Web Fonts](http://www.google.com/fonts/earlyaccess), this makes my task much easier.

First, I import Amiri.css. I go back to the HTML of my pages. Before the very end of the **_&lt;style&gt;_** element in the **_&lt;head&gt;_** (search for **_&lt;/style&gt;_** and place the next line right before it):

<script src="https://gist.github.com/AmrEldib/5519244.js"></script>

Then I got back to the additional CSS, and slightly modify the CSS to look like this:

<script src="https://gist.github.com/AmrEldib/5519246.js"></script>

###  What about the Headers?

I notice the headers need a little bit of a change. They don’t have the right font. So, I go back to the HTML, and find the H3 element for the titles, and change it to look like this:

<script src="https://gist.github.com/AmrEldib/5519249.js"></script>

Then modify the CSS to look like this:

<script src="https://gist.github.com/AmrEldib/5519196.js"></script>

Now, the headers and the body are using Amiri and the header has the right size.

I’ve published the [modified HTML file](https://gist.github.com/AmrEldib/5519192) on a GitHub gist if you want to use the same theme. Here is the [additional CSS](https://gist.github.com/AmrEldib/5519196). 