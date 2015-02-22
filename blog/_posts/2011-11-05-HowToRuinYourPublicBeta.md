---
layout: blogPostWithComments
name: HowToRuinYourPublicBeta
title: How To Ruin Your Public Beta
time: 2011-11-05 14:57:00.001000000 -07:00
category: blog
tags:
- Software Development
- Adobe
- IT Industry
- Flash
redirect_from: "/2011/11/how-to-ruin-your-public-beta.html"
---
<img class="imageOnRight" title="Adobe" src="{{ site.imgFolder_blog }}{{ page.name }}/AdobeLogo.jpg">

Couple of days ago, I downloaded and installed the latest beta of Adobe Flash (11.2.202.18 Beta 1). I downloaded the IE version and the non-IE version, and the x64 version. I like to test out the latest betas of almost all the software that I'm using; [I use Mozilla Nightly and Chrome beta](http://www.amreldib.com/2011/10/what-i-use-part-2.html) (just updated to version 17 today). It's my way of staying updated and keeping up with what's coming next. I understand that I have to take some hits for using beta software but in return I get to enjoy all the new ideas months before everyone else, and every once in a blue moon I get to affect some feature in some upcoming release by providing feedback.

After I installed Flash, I started noticing this annoying beta disclaimer appearing on YouTube videos (a Flash element).

<img class="imageInCenter" title="Beta disclaimer on YouTube Videos" src="{{ site.imgFolder_blog }}{{ page.name }}/FlashBetaDisclaimer01.png">

<img class="imageOnRight" title="Beta disclaimer on Audible Sample button" src="{{ site.imgFolder_blog }}{{ page.name }}/FlashBetaDisclaimer02.png">

I ignored it at first, but then it started being really annoying. It's hiding the full screen button in the YouTube player as you can see above. Then it started to get really annoying when it showed up on really small Flash elements; elements that are so small that I couldn't see anything other than the disclaimer (look at the small Audible “Sample” button on the right). Naturally, I turned to Bing to start finding a solution for this annoyance. I found this [post on Adobe forums](http://forums.adobe.com/thread/797926?start=0&amp;tstart=0). Here's the answer from an Adobe employee:  

> _Incubator builds are not preview, alpha or beta quality. It's before that state - this is code under active development. The watermark is a visual indicator of that fact. Many companies follow this practice for pre-release software - **for example, Microsoft Windows pre-release builds have a watermark with version in the bottom right corner of the screen** to indicate it an evaluation and not a final version._

_Also, Flash Player is one of the most widely distributed pieces of software and our audience is quite broad. End users are by far our biggest customer segment. **We need to make sure people - developer or end user - that install Incubator builds know and understand what they're getting themselves into.** In the past, we have seen links to previews and betas delivered out of context of the content we have on Labs that explains that pre-releases have not yet gone through security review, may not be stable, etc. These builds don't give users auto-update notification and can make it difficult for a user to install a release player (because it is a later version, or you must run the uninstaller before you install a different version)._

So, there's no way to remove the disclaimer. Now, beta users who are willing to use such an early beta of a software like Flash (which is a component more than a software) are not stupid users. They understand that this is a beta, they accept the risks of using such a software, they just don't want to be annoyed by a stupid disclaimer.

Someone argued in the forum post with a beta user about how Adobe is right and the beta users are wrong in complaining about this. One thing said is:  

> _With all due respect tom, your comments are the very reason why Adobe tends not to let things publically available this early. They are afraid that people like you will make comments/judgments like this. You need to understand a little bit about software development, this is called an alpha build._

Not only that Adobe has already made this beta public, so they should just accept how users react. It also this a little condescending to assume that the user doesn't know anything about software development, especially something as simple as what an alpha build is.

To go back to the example that Adobe used to defend their choice, the beta disclaimer in Windows is actually an option in Windows that [you can turn on even in a non-beta release](http://www.windowssquad.com/how-to-display-windows-7-build-version-number-on-desktop/23/). Microsoft just chooses to turn it on by default in a beta release and leaves to the users the option to turn it off if they want to.

Beta users are volunteers who come to you as a software maker and give you a great opportunity to take advantage of their time to test out your software and find out bugs and usage scenarios about it that you wouldn't imagine. Their reward shouldn't be that you treat them like crap and tell them that they're wrong and don't understand how software works. Their reward should be to make their lives easier, to welcome their feedback and suggestions, to treat them like they're part of the team.

Mozilla gives beta users access to a [feedback dashboard](http://input.mozilla.com/en-US/). They give them a button that is very simple to use with happy face and sad face and you only need to write a single sentence to say what's on your mind. You don't have to register, you don't have to answer a survey or pick from a list. No, it's a minimum barrier of entry, because they want you feedback and they'll figure out how to make most of it.

A public beta is not just publishing an early release of your upcoming version. It's a process of including a new member in your development team; the public. Like any other member that is joining your team, if you don't have a job description for them, or have tools ready for them to use, it's all a waste of time and money. And what do Adobe do to this team member who is providing feedback, they decline their most basic feedback to have an option to turn this thing off. It's a shame for Adobe to miss up something as simple as this. But others might say “What else is new?”.

I'm uninstalling this early beta of Flash and going back to the version before that.
