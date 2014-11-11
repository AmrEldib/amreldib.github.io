---
layout: post
name: ConfiguringLog4netPart1
title: Configuring log4net and Using the AppLogger Class - Part 1
time: 2010-07-18 10:54:00.002000000 -07:00
tags:
- ".NET"
- Logging
- C#
- Visual Studio
- Code
- log4net
redirects:
- /2010/07/configuring-log4net-and-using-applogger.html
---
It’s been quite a while since I started using log4net for logging, and it changed how I debug applications. I found it much easier to find the source of an error by reading the log after the application crashes rather than using the step-by-step debugging in Visual Studio.

I started using log4net after reading an excellent tutorial by Jim Christopher on his blog [BeefyCode](http://www.beefycode.com/). You can find a list of all the posts in the tutorial [here](http://www.beefycode.com/post/Log4Net-Tutorials-and-Resources.aspx).

Some people prefer to log the application activities for debugging purposes only which works well in desktop applications that doesn’t have a mechanism for sending the log back to the developer in case of unexpected behavior. This has its obvious upside, which is improving the application performance by avoiding logging. To limit logging to debugging purposes only, simply surround all logging code with the conditional preprocessor directive #if.

For the using statements:

<script src="https://gist.github.com/AmrEldib/a47245174b9b0e4e297d.js"></script>

And for the logging code:

<script src="https://gist.github.com/AmrEldib/dabf83db0a6450605e12.js"></script>

There are different choices for a destination of your application’s log, Database, Console, File, System event log, Memory, E-mail, Telnet, and even [Twitter](http://caseywatson.com/2009/07/07/log4net-twitter-awesome/) which I don’t think is very practical (no one would follow a feed that delivers only bad news).

Those different destinations offer different advantages and are fit for different scenarios. You can use the preprocessor directive to apply different configurations for debugging and release.

One obvious scenario is to use a database for debugging and a file for release. In a large development environment where different individuals work on development and testing, logging to a database offers some advantages like keeping a record of how the application behaves and easily sharing that record among different team members. With simple tools and shared procedure, this log can be linked to the issue tracking system within the organization.

I use a text file as a destination. It’s easy to set up and use and not so difficult to read. I also use a XML file for configurations rather than programmatically (which only few prefer). I found that the best of both worlds is to embed the configurations file in the application resources and then stream it at runtime to configure the logger using the stream.

<script src="https://gist.github.com/AmrEldib/32551c94813e78d24298.js"></script>

This helps solving one of the problems I ran into, which is configuring log4net for the release version. In the debug mode, you can easily hard code the path to the destination file and you have administrator privileges to write to any folder you like. In the release mode, you can’t really control – or predict – the environment where the logger will work. You have to plan for something safe that you know will work in any environment.

Writing log to the application installation folder does not work under Windows 7 (or Vista). Unless the application is running as an administrator, logging will fail. Try to use the Application Data folder or the Temp folder.

In the Application Data folder, you have to manage the growing number of files as the application continues to log to them but you have the advantage of being able to keep the log files (unless the user goes to the folder and delete the files, nothing will happen to them).

In the Temp folder, you have to avoid creating a file with a name that already exist, and your log file will probably be deleted by the next time you run the application.

I create a log file in the Temp folder because I don’t really need the log file beyond the current session, and to avoid creating a file with a duplicate name simply use:

<script src="https://gist.github.com/AmrEldib/c742277b8302fff05b67.js"></script>

Now, I want to:

-   Configure log4net using XML file.
-   Determine the path to the log file at runtime.
-   Avoid shipping a configuration file with the assembly (include the configuration file inside the assembly).
-   Reduce the number of lines I have to write to initiate logging.

To do all that, and reuse the solution across all the projects I work on, I use the AppLogger class. How use it and how it works is a topic of [another post](/ConfiguringLog4netPart2/).  