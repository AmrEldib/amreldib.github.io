---
layout: blogPost
name: PersonalClouds
title: Personal Clouds
time: 2012-09-16 23:19:00.001000000 -07:00
category: blog
commentsSection: 'true'
tags:
- Cloud
- Open Source
- Windows
- Smartphone
- Android
- IT Industry
- Apple
- Microsoft
- MacOS
redirect_from: "/2012/09/personal-clouds.html"
---
<img class="imageOnRight" title="Cloud" src="{{ site.imgFolder_blog }}{{ page.name }}/CloudIcon.png">
"The Cloud is coming". Actually, it’s more like "The cloud is here". It’s being forced upon us on every platform (Almost every platform, at least, Windows, OSX, iOS, Ubuntu and Android). With the spread of smartphones, the cloud now not only makes sense but is also useful. 

Let me go back a step to make a distinction. 
There are two meanings for the word "The Cloud": 

- One is common in IT departments, although not very popular, I assume. Think Amazon Cloud Services, and Windows Azure. We’ll call it the Cloud.
- The other is common between end users. Think iCloud, SkyDrive and Office Web Apps. This is more like Cloud Services; it’s services that live in the Cloud.

Only an advancement in the first made the second possible. Giant software companies are now building these huge data centers that can be used in a very efficient way. Unlike before, when renting a server meant that you actually were allocated a physical server (or a folder on a server) in a certain data center. Those days, if the machine stopped, or the data center lost power that meant that your web site went offline. Now, your web application is hosted in a Virtual Machine that – along with 1000s or other VMs – form a layer between you and the physical server. Now, the server – or even the data center – can go offline and your application would still continue. Maybe with few minutes of downtime if you were running a single instance of VM.

Another advancement that is directly affecting these cloud services is the spread of smartphones and tablets. These cloud services play one of two roles:

- Back-end to an application that runs on two different devices and shares state through the cloud. The simplest example is a text editor running on your phone modifying a file on Dropbox. Every time you modify the file, it get synced to your computer where you can continue your edits using a different text editor. These are two different applications running on two different devices, yet they’re sharing the state of the data they’re manipulating.
- Server-side application available on multiple platforms. Think Evernote. You can access it through your phone, your desktop client, any web browser. You think it’s the same application which technically is not true. There’s a web application, maybe written in Ruby. A Windows client that could written in .NET. An iPhone app written in Objective-C. These are three different application that share state through Evernote’s servers but more importantly they share a lot of backend services like OCR, search, archiving, and other. That’s why you consider it one application. That’s why it’s one application.

In either case (and they’re very similar) the cloud is extremely useful. Being able to move seamlessly from one device to another is incredible and we’re just starting. In few years, we should be able to move from one device to another for a much larger number of applications that we do now. As more applications is built directly to the cloud, compared to now where web applications are modified to include these capabilities.
While the cloud offer a great capability to users, it offers even bigger advantages to big software companies. They now control your digital life. I spent the last five years of my life writing all these tiny tweets, 140-characters at a time, all 36,000+ of them. Now, I can’t get them back. Twitter has sucked them into a void. They won’t let me download them. They won’t let me search them. They won’t let me even browse them. Meanwhile, Twitter is building this profile of my interests and feeding me all these ads about all the silly things I demonstrated that I care about.
I can’t get out of Twitter, I’ve invested five of years into it. I’ve built networks of friends. I need twitter more than they need me, it seems. When you cut off 3<sup>rd</sup> party developers, or block my favorite desktop client or change the terms of services; all are things I don’t agree of, but not enough to make me leave the service.
Same goes for many other services. After a while, there’s nothing you can do about changes to the service when you don’t agree of them. Google can change Google Reader by shutting down sharing, and force you to use Google+, but you won’t leave. Facebook can change their terms of service or privacy policy, and you would just click “I Accept”. Nothing you could do really.
Let me sum up what I see is the problem with these services in three – not so – brief points:

- **Privacy**: your data is not just yours anymore. Your data can be mined, copied, passed to law enforcement, peaked at by bored employees, or stolen by hackers who are now shooting at larger targets.
- **Freedom**: you may only run the features and functionality that are available and permitted by the software vendor. If the vendor upgrades the service to include more – or less – features, you have no choice to roll back to another version. If you’re using a feature that only few users like, that feature will likely be removed. Your online petition won’t really help bring it back. You may integrate this software with other services that are permitted by the software vendor. If there’s a service or functionality you’d like but is not available, you can’t easily build your own. You’re being handed fully cooked meals instead of ingredients you can put together to make something new.
- **Competition**: these companies that are building full solutions are the ones in a better position to survive the competition. If you’re building a service that does only one thing, (I’m looking at you, Dropbox) you are at a worse position than your competitor whose building two things into their service (to follow on the example, iCloud and SkyDrive). _Integration_. Windows 8, and the whole family of new Windows products, is built on the promise of integration. Windows on your phone, Windows on your PC, Windows on your tablet, and Windows on your Game console and TV set. Companies that are building two features/things into their service have an incentive to make you use their new shinny third feature even though it’s much worse than the competition. They can integrate it better than the competition. Notice how ‘Files’ are taking a back seat in all these services. There are no files any more. On your phone, there are no files, there are only apps. People think of files are a pain to handle, because there are so many of them and you have to arrange them in folders and remember where you stored them. They are a pain. But files are very important because they allow for mobility of your data. Any application that can read this file is an application that you can move to. If one application does a certain feature that your default application doesn’t do, you can move to it as long as it can read that file format. Some applications use proprietary file formats but eventually open standard file format tend to dominate. With apps, you can’t move from one app to another because there are no files. You’re stuck with that app.

You can look at these problems and think that they’re not very important or that you don’t affect you very much or even think that it’s a natural advancement or how computers work now. I see them as warning signs.
There must be a solution.
I consider the benefits of the cloud and cloud services to be huge. It’s something that you can’t live without once you get used to it. Living off the cloud is not an option.
At its core, the cloud is a computer that is always on running a certain piece of software. Actually it’s some number of computers running each with a specific software. I have a Dropbox computer, a Gmail computer, a twitter computer, and so on. If I can get these pieces of software to run on my machine, and make that machine available online and accessible to my phone and other devices then I would have my own cloud.
What I need is a Virtual Machine, only accessible to me (or any service/person I give and control permission to), that is running a server-side operating system and a software that replaces each service I’m using. It would have an email server, a calendar, a cloud storage service, a synchronization service, a node of social media, a blog, a Wiki, and any other type of cloud service I’m using.
There are alternatives to a lot of the services that any user is using daily. Instead of [Blogger](http://www.blogger.com/), use your own [Wordpress](http://wordpress.org/). Instead of [Gmail](http://www.gmail.com/), use [SmarterMail](http://www.smartertools.com/smartermail/mail-server-software.aspx), [Zimbra](http://www.zimbra.com/), or [Sendmail](http://www.sendmail.com/sm/open_source/). Instead of [Dropbox](https://www.dropbox.com/), use [Tonido](http://www.tonido.com/) or [SparkleShare](http://sparkleshare.org/). Instead of [Flickr](http://flickr.com/) or [Instagram](http://instagram.com/), use [OpenPhoto](http://theopenphotoproject.org/). 

There are few services that doesn’t have great alternatives but they can be built.
For such proposal to work, <strike>two</strike> three key issues have to be addressed:

- **Ease of Management**: 
in any cloud service, all you need to manage the service is sign up. You don’t need to worry about updates, maintenance or troubleshooting any problems. Running your own cloud will definitely come a certain level of trouble. Think taking a cab vs. owning a car. It shouldn’t be so much pain. It should be relatively easy at least for techies in the beginning. With all these years of software development experience, it should be possible now to build a piece of software that is possible to troubleshoot by a non-techie. A dashboard with shiny gauges and handles should show status and allow control of these services.
- **Integration**: 
these alternatives, that I’ve listed some of above, are built in isolation but they shouldn’t stay that way. They should integrate to offer a complete solution. Either by bridges that are small pieces of software that makes one service communicate with another without being aware of it, or by all these services adhering to a standard API to perform most common tasks.
- **Mobile Support**: 
one of the main reasons of having a always-available service is to be able to access from your smartphone. Support for smartphones is a must for any cloud service, commercial or personal. This support can be through web or native apps, depending on the kind of service consumed.

Frankly, I don’t know what to make of this idea. I’m certainly not the first to come forward with some sort of proposal for a Personal Cloud. I’m aware of at least one other proposal (by [@windley](https://twitter.com/windley)) which can be found [here](http://www.windley.com/cloudos/) but it’s more of a complete platform for personal clouds that require building a new type of operating system. Promising idea but strikes more as a Computer Science project rather than a piece of software than can be built and used in the near future.
I think this could be a big project that brings together all the pieces of open source projects together in one proposal that stands side by side with current offers from Apple, Microsoft and Google. Not only that it would an alternative, but also it would be good for software and for the benefit of users.

Update: Earlier version of this post didn't included Mobile Support as a key issue to be addressed when building personal clouds.