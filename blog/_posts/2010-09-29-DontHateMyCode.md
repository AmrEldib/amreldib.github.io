---
layout: blogPostWithComments
name: DontHateMyCode
title: Don't Hate My Code
time: 2010-09-29 02:35:00.001000000 -07:00
category: blog
tags:
- Software Development
- ".NET"
redirect_from: "/2010/09/dont-hate-my-code.html"
---
One very common problem that occurs when a new team takes over an existing project is their desire to "just move some stuff around". That's a code word for "I can't believe that you’re calling this crap a software application" :D. This, of course, varies from one project to the other. Sometimes it's justified and is for good reasons and other times it's not. The reason is not the desire of the new team to make a quick impact (although sometimes that's the case "You know, we had to fix a lot of stuff behind the scene"). But most of the time the reason is derived from the simple fact that reading code is much harder than writing it.  
A programming language, like any other language, just because you know all the letters and all the words doesn't mean you can parse the intended meaning. A code block, in its own way, is written to convey a certain intent to computers as their primary audience but also to other developers as a secondary audience. Some programming languages don't care about developers and just target computers, like [Assembly Language](http://en.wikipedia.org/wiki/Assembly_language).   
The problem with new teams is that they never think that one day they, too, would be the “old team”. The way to really solve this problem (having to rewrite/re-organize/restructure the codebase) is to write code in a clear enough way that anyone can understand it. Then, one day this will be common enough that you'll understand what you are getting as anyone would understand what you are giving (Day dreaming?) (actually, on second thought, I'll remove the question mark).  
The point is: _Don't just write “good code”, write “readable good code”.  
However, modifying your code to be more readable is burdening your code with a responsibility that it shouldn't have. When you read the part above about conveying intent, you’ll notice that the whole point of making the code readable is to give the reader an insight into my thought process. How did I arrive to the decision of structuring the code like that?  
Code is not easy to read because it’s not in sequence, you don’t know where to start and where to end and you can’t read one part of it and figure out the rest.  
My code has to come with that insight into my thought process. Here's what I would do (and what I do do) to make this happen:

##### Write in Bullet Points
Programmers don't want to read a long story. They want simple concise quick-to-read scannable sorted items that are not affected by how bad my morning coffee was.

I’m not specifying what type of document. This goes for all documents.

##### Use XML Documentation

You know, the [little green XML tags](http://msdn.microsoft.com/en-us/library/b2s063f7%28v=VS.100%29.aspx) before each member. .NET developers would know those. My summary for the "DoSomething" method used to be "Does something". I stopped doing that when I read this description on somebody else’s code. Now, I take a moment and describe what is the "Something", what do I mean by "Do", what kind of output does the method deliver and what impact it has on the system, what assumptions it requires. Take a moment to think. Always take a moment.

##### Write Comments First

Comments for code that has been already written tend to describe what the code does. “Loop through list until find target value” instead of “Find target value in list”. Changes to how the objective is achieved would impact the description even though the objective didn’t change. If I removed the loop and used a method to find the target value, I wouldn’t have to change “Find target value in list”.

Writing comments before code aims at outlining what is the objective of this method (or a code block within the method) and what are the logical steps and the possible scenarios that the method handles. Think of it this way, you’re a senior developer who doesn’t write code anymore but helps junior developers write the code. Use the comments to outline how the juniors will reach their goal, think in big picture (big as in the objective of the method and class). Don’t care about how you’re reading the text file, think about what do you want to do with the content of the file after it’s read. Later, you’ll go to the junior developer role and think about the optimum way to read a text file. This is done in iterations, feedback from the junior could affect the outline set by the senior who made assumptions about how this would work. Some changes have to be made to the outline to accommodate that.

Eventually, the comments would describe the steps that the method goes through to reach its goal. Reading code would add more details about the specific technical implementation while reading the comments would only give you a summary.

##### It’s Not Personal, It’s Technical

Don’t include details about people, events, dates, timeline, or progress in the project documents. Keep those items separate in their own documents. These “Team Documents” are for temporary consumption mainly by management, sometimes they’re useful for historical record but they don’t matter for new teams who just wants to read the code.

##### Use Meaningful Names with Standard Naming Convention

Use “i” for counter and “x” for quick math operations. Beyond that, use meaningful names that helps the reader keep track of the code flow.

Use standard naming convention to name and write the names of different members. I use the naming conventions of the [Framework Design Guidelines](http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613).

As a standard rule, pet names doesn’t count as meaningful names, unless you pet is named “UserAccountID”.

##### Make It Part of the Process. Use Documents to Make Decisions

Some developers look at documentation as “I’ll get to it if/when I have time”. Not only that they never have time, but also they’re missing the point of why they should use documents in the first place. I use documents to collaborate with team members on making decisions about the different possible solutions of a specific problem. I use documents to define, scope, list possible solutions and their upsides and downsides and eventually choose the solution.

Communicating technical details through documents is much easier than through discussions which tends to easily stray away from the main topic, include a lot of not-fully-thought ideas, and require real time interaction (meetings which are difficult for remote teams and time consuming for… what’s the word for non-remote teams).

##### Keep Documents Updated

If you’re like me, and you use documents as an intro to writing code. It’s important to keep documents updated with the changes you made later to the code you wrote earlier.

##### Use a Tool

Using a tool like a [SharePoint](http://sharepoint.microsoft.com/en-us/Pages/default.aspx) document library or a [Wiki](http://en.wikipedia.org/wiki/Wiki) (I like [Screwturn](http://www.screwturn.eu/)) would encourage developers to participate in this addition to their daily tasks. It wouldn’t be just a collection of documents stored in some folder. It would be an essential part of the daily work.

##### Keep Versions. Don’t Throw Anything Away

Using a tool helps you keep versions of the documents. This lets you review the progress of each document and makes you able to go back to earlier solutions that you dismissed earlier but could be viable now.

##### Know When to Stop

Keep documents updated, make it part of the process, keep versions, write comments, bla bla bla. Remember that you’re getting paid to write code and create software. Using documents to build software can be really helpful but it’s not building software. Put a ceiling on how many documents and how much details you’re producing and make it supplemental to writing code. If it’s not going to lead to better code, don’t do it. Eventually you’ll find the balance the fits your process.
