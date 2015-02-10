---
layout: postWithComments
name: ConfiguringLog4netPart2
title: Configuring log4net and Using the AppLogger Class - Part 2
time: 2010-07-24 19:34:00.005000000 -07:00
category: blog
tags:
- ".NET"
- Logging
- C#
- Visual Studio
- Code
- log4net
redirect_from: "/2010/07/configuring-log4net-and-using-applogger_24.html"
---
_Read the [Part 1](/ConfiguringLog4netPart1/) for an intro to this post._

The AppLogger class is a class I use to encapsulate log4net and make easy to use. By “ease of use” I mean less lines for me to write to start logging. But, this ease of use comes on the expense of customizability. The AppLogger class is not built to fit your (or all) needs necessarily but with little work it can.

AppLogger contains my preferred configurations for both debug and release builds, and it embeds the XML configurations into the output assembly, while reducing the number of lines I need to write to initiate logging.

I’ve uploaded a copy of the project (VS2008 project) containing the class to my SkyDrive. You can find it [here](http://cid-a0f4e46186f7cce4.office.live.com/self.aspx/Public/Blog/AppLogger/AppLoggerClass.7z) (To decompress the project files, use [7zip](http://www.7-zip.org/)).

Normally, you would add AppLogger and the XML configuration files to your project and include it under the namespace you’re using. This way you would avoid adding another assembly to your project. For the purpose of distributing the code, I created a separate project and a separate namespace. Also, the project is using .NET framework 2.0, but it should work fine on any later version.

Let’s check out the project files

<img class="imageInCenter" src="{{ site.imgFolder_blog }}{{ page.name }}/AppLogger-ProjectFiles.png">

The **LoggerInitializationException** is a fancy way of throwing an exception, it doesn’t really hold any more information than a regular exception but you can modify it to do just that.

The files **Log4netDebugConfigurations** &amp; **Log4netReleaseConfigurations** in the **Resources** folder are used to configure log4net in the Debug and Release build configurations. In this example, they have the same configurations.

The configurations use a [Rolling File Appender](http://logging.apache.org/log4net/release/sdk/log4net.Appender.RollingFileAppender.html) which writes to file until the file reaches a certain size (1MB in this case), then it renames the file by adding a number and write to a new file with the name you chose.

The pattern used in the configurations for each line in the log is

<script src="https://gist.github.com/AmrEldib/f4e684971160e4ea8855.js"></script>

It adds the **date/time stamp**, **thread**, **level** (Debug, Info, Warn, Error, Fatal), name of the **logger**, and **message**.

You can notice in the configuration file that the file name is not specified.  

<script src="https://gist.github.com/AmrEldib/4086774fa1f098a48f8b.js"></script>

This is intentioned as we’ll replace it at runtime.  
AppLogger is written so that you can log using just one line of code without any preparations, like this:  

<script src="https://gist.github.com/AmrEldib/e1968212ba7d9fadcca0.js"></script>

The **Logger** property is a static property that holds an **AppLogger** object and it doesn’t need to be set. If you are calling the property for the first time, it will create a new **AppLogger** object and return it to the calling method.  

<script src="https://gist.github.com/AmrEldib/a7dffcaa5ff49218bf91.js"></script>

The **AppLogger** constructor takes care of configuring log4net using the embedded XML files based on the build configurations.

<script src="https://gist.github.com/AmrEldib/0bdc92291fd92f9ed336.js"></script>

You can see that the constructor creates a file in the Temp folder (for ups and downs of this choice, read [Part 1](/ConfiguringLog4netPart1/)), and modifies the XML file before configuring log4net with a stream of the file. Then it sets the **LogFilePath** property with a path to the log file.

It also uses preprocessor directives (**#if DEBUG**) to configure log4net differently in the debug and release configurations. You can make the code less in size by using the same configurations. This constructor happens to use the same configuration but I wanted to show that you can use different configurations.
By default, AppLogger will suppress its errors. So even if initialization failed or any other error occurs, logging will stop but you don’t have to modify your code to catch any exceptions.

If you want to catch logging exceptions, you can change the **SuppressError** property by writing:

<script src="https://gist.github.com/AmrEldib/82a2b5f03f54b2555b78.js"></script>

AppLogger makes it easy and fast to start logging but it has its downsides as well. Calling the **AppLogger.Logger** static property has a performance overhead more than other properties since it checks if the logger hasn’t been created yet. If your application has one entry point (Console application, Windows application, etc.) you can move the initialization code to the entry point and get rid of the overhead.

Also, the configuration I’m using creates a log file with a name that is not predefined which makes it difficult to find sometimes unless you use the **LogFilePath** property. You can change the configurations to fit your workflow, as this fits mine.
I’ve used the AppLogger class for number of projects and it’s working fine, I hope it helps you as well.

Feel free to offer any suggestions or questions in the comments.
The code is offered under the Creative Commons Attribution 2.5 Canada License. You can use and modify this code, you can use it in commercial and non-commercial work. Kindly attribute this code to its original author.