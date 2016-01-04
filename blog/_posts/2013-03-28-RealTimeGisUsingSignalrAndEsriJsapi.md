---
layout: blogPost
name: RealTimeGisUsingSignalrAndEsriJsapi
title: Real-Time GIS Using SignalR and Esri's JavaScript API
time: 2013-03-28 10:43:00.001000000 -07:00
category: blog
commentsSection: 'true'
excerpt: "Building Real-time capabilities into Esri JavaScript API applications"
tags:
- JavaScript
- GIS
- DevSummit
- Esri
- SignalR
- Presentation
- ArcGIS
- Code
redirect_from: "/2013/03/real-time-gis-using-signalr-and-esris.html"
---
<img class="imageOnRight" title="SignalR" src="{{ site.imgFolder_blog }}{{ page.name }}/SignalR.jpg">
<img class="imageOnRight" title="Javascript" src="{{ site.imgFolder_blog }}{{ page.name }}/JavascriptLogo.png">

Everybody loves command centers. We all would love to be Capitan Kirk, setting there seeing information coming in from all over the place, and we can act on it without having to do much work.

The problem with building command centers is that they represent a big unnecessary load on the servers. Command centers now are not like the Star Trek command centers. No, they're hundreds of users connected to your service, each trying to command their own one decision which in aggregate with hundreds of other users form the output of the system.

These hundreds of computers calling the server every few seconds checking if there's an update or not represent a big unnecessary load on the server. What I prefer is to call the server when I know that there's an update, or better, have the server call me, the client, when there's an update.

*That's where SignalR comes in.*

[SignalR](http://signalr.net/) is an open source library that let's you build front-end real-time applications using JavaScript (or .NET). On the back-end you'll use .NET.

SignalR was a side project started by two guys; [David Fowler](https://twitter.com/davidfowl) and [Damian Edwards](https://twitter.com/DamianEdwards). The [source code](https://github.com/SignalR/SignalR) is hosted on GitHub. The project got so much support that [Microsoft is now supporting](http://www.asp.net/signalr/open-source) it as part of its ASP.NET family even while maintaining it's status as an open source project developed in the open.

[Listen](http://www.hanselminutes.com/352/making-open-source-work-at-microsoft-with-signalr-and-damian-edwards) to Damian Edwards interviewed by Scott Hanselman about SignalR.  
[Watch](http://channel9.msdn.com/Series/Building-Web-Apps-with-ASP-NET-Jump-Start/Building-Web-Apps-with-ASPNET-Jump-Start-08-Real-time-Communication-with-SignalR) Damian Edwards and Scott Hanselman demo how to use SignalR.

SignalR makes it incredibly simple to add real-time functionality to your application.

It’s simple because it provides you with a way to just call a function on the client-side. Just RPC a function on the client-side.

It’s simple because your code will work – without you having to change it – with a number of different technologies under the hood.

It starts with WebSockets, and falls back to other technologies if it’s not available.

There are two examples for SignalR you can check out right now: [Jabbr](http://jabbr.net/) which is a chat room service. And [ShootR](http://shootr.signalr.net/); a space craft shooter game built with HTML5.

SignalR is split into a .NET component on the server side, and a JavaScript component on the client side. Basically, you create a class that inherits from a Hub class and whatever public method you create is now callable from the client side.

The important thing is that you can define client side functions that are also callable from the server side.

We can use this to add real-time capability to an ArcGIS JavaScript API application. Using a [sample from the documentation](http://help.arcgis.com/en/webapi/javascript/arcgis/jssamples/graphics_add.html), I've added the real-time capability using a C# class and few modifications to the client side JavaScript.

Here's a video for how the final proof-of-concept looks like:

<iframe width="750" height="422" src="//www.youtube.com/embed/kY3AQL6n2-8" frameborder="0" allowfullscreen></iframe>

The code is all up on [GitHub](https://github.com/AmrEldib/RealTimeGisWithSignalR).

I was invited to speak at Esri DevSummit 2013 on March 28, 2013. Here are the [slides for my talk]({{ site.imgFolder_blog }}{{ page.name }}/Real-Time GIS Using SignalR and Esri's JavaScript API.pdf). They provide few more details. 

There's a few book on SignalR out now, you can get [here](http://www.campusmvp.net/signalr-ebook/). 