---
layout: post
name: PowerShellStudyNotes
title: PowerShell Study Notes
time: 2011-11-01 14:05:00.001000000 -07:00
tags:
- ".NET"
- PowerShell
redirects:
- /2011/11/powershell-study-notes.html
---
<img class="imageOnRight" src="{{ site.imagesFolder }}{{ page.name }}/PowerShellLogo.jpg">

Last week, I found a great PowerShell tutorial over at [Pluralsight](http://www.pluralsight-training.net/microsoft/Courses/TableOfContents?courseName=powershell-intro) (by [Robert Cain](http://arcanecode.com)). PowerShell has been a topic that I wanted to learn about for quite a while. As any power user/geek type of person, the command line is my friend but the standard DOS command line has been the same for years. That’s why PowerShell seemed so compiling. But the fact that it’s based on/using .NET objects and that it’s now integrated in Visual Studio 2010 made it a priority to understand what it’s all about.

I finished the tutorial in a day. It’s less than 3 hours long and it’s pretty straight forward. I went over the tutorial again for a deeper understanding and took down some notes that I’m attacking to this post (You can [view the document online here]({{ site.imagesFolder }}{{ page.name }}/PowerShell Study Notes.docx)).

I also found [another tutorial here](http://www.powershellpro.com/powershell-tutorial-introduction/), that is a series of posts with more details on PowerShell. You’ll find the list of posts in the series on the right side under the title “PowerShell Tutorials”.

Basically PowerShell is a command line that handles .NET objects so that when a command return a result that result is a .NET object that you can retrieve the values of its properties or execute its methods. Even if the result is a simple string or integer, it’s a string object or int object.

PowerShell is built with three very nice concepts in mind. **One**, it has a script language built-in that has the basic capabilities and concepts of any programming language. Most are like .NET languages but always check your assumptions as it might lead to some confusion. **Two**, it uses aliases for commands, so you’ll find that most DOS and Linux commands are supported; not as native commands but rather as aliases to native commands. **Three**, it uses providers to support additional commands. For example, you can load the SQL provider and access SQL objects.

I don’t want to dive too much into the topic, but I thought I should sum it up to get you interested if you’re new to it.

Meanwhile, I hope the study notes can help. You can [try out the Pluralsight courses here](https://www.pluralsight-training.net/microsoft/Subscribe/Step1?isTrial=True), they have very reasonable [subscription plans](http://www.pluralsight-training.net/microsoft/Products/Individual). You can follow them and thank them on [their Facebook page](https://www.facebook.com/pluralsight) if you like their stuff.

PowerShell Study Notes
<iframe style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview" marginheight="0" src="https://skydrive.live.com/embedicon.aspx/Public/Blog/PowerShell%20Study%20Notes/PowerShell%20Study%20Notes.docx?cid=a0f4e46186f7cce4&amp;sc=documents" frameborder="0" marginwidth="0" scrolling="no"></iframe>  