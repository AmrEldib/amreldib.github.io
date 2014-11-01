---
layout: post
name: ConfiguringLog4netPart2
title: Configuring log4net and Using the AppLogger Class - Part 2
time: 2010-07-24 19:34:00.005000000 -07:00
tags:
- ".NET"
- Logging
- C#
- Visual Studio
- Code
- log4net
redirects:
- /2010/07/configuring-log4net-and-using-applogger_24.html
---
_Read the [Part 1](http://www.amreldib.com/2010/07/configuring-log4net-and-using-applogger.html) for an intro to this post._

The AppLogger class is a class I use to encapsulate log4net and make easy to use. By “ease of use” I mean less lines for me to write to start logging. But, this ease of use comes on the expense of customizability. The AppLogger class is not built to fit your (or all) needs necessarily but with little work it can.

AppLogger contains my preferred configurations for both debug and release builds, and it embeds the XML configurations into the output assembly, while reducing the number of lines I need to write to initiate logging.

I’ve uploaded a copy of the project (VS2008 project) containing the class to my SkyDrive. You can find it [here](http://cid-a0f4e46186f7cce4.office.live.com/self.aspx/Public/Blog/AppLogger/AppLoggerClass.7z) (To decompress the project files, use [7zip](http://www.7-zip.org/)).

Normally, you would add AppLogger and the XML configuration files to your project and include it under the namespace you’re using. This way you would avoid adding another assembly to your project. For the purpose of distributing the code, I created a separate project and a separate namespace. Also, the project is using .NET framework 2.0, but it should work fine on any later version.

Let’s check out the project files

![](http://tcglkg.blu.livefilestore.com/y1pgc-cSCu4HjMdpiqlk9aZXdeM2tsTs6LRD9sS0DtGhJxKu-KOfAzfv5AQJsgr7GhiTLrzrfqk2BNVOTGPLqLTpWQOgzCnF7oL/AppLogger-ProjectFiles.png?psid=1)

The **LoggerInitializationException** is a fancy way of throwing an exception, it doesn’t really hold any more information than a regular exception but you can modify it to do just that.

The files **Log4netDebugConfigurations** &amp; **Log4netReleaseConfigurations** in the **Resources** folder are used to configure log4net in the Debug and Release build configurations. In this example, they have the same configurations.

The configurations use a [Rolling File Appender](http://logging.apache.org/log4net/release/sdk/log4net.Appender.RollingFileAppender.html) which writes to file until the file reaches a certain size (1MB in this case), then it renames the file by adding a number and write to a new file with the name you chose.

The pattern used in the configurations for each line in the log is
<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">&lt;</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(163, 21, 21);">conversionPattern </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:red;">value</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">=</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">'</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">* %date -- [%thread] -- %-5level
-- %logger -- %message%newline</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">' </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">/&gt;</span></pre>It adds the **date/time stamp**, **thread**, **level** (Debug, Info, Warn, Error, Fatal), name of the **logger**, and **message**.

You can notice in the configuration file that the file name is not specified.
<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">&lt;</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(163, 21, 21);">file </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:red;">value</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">=</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">"</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">==LOG_FILE_PATH==</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">" </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">/&gt;</span></pre>This is intentioned as we’ll replace it at runtime.
AppLogger is written so that you can log using just one line of code without any preparations, like this:
<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Logger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Debug</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(255, 255, 230);">"This is a message."</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);</span></pre>The **Logger** property is a static property that holds an **AppLogger** object and it doesn’t need to be set. If you are calling the property for the first time, it will create a new **AppLogger** object and return it to the calling method.

<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">public static </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Logger
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">{
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">get
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">{
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// if logger is null, create an instance.
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">if </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_Logger </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">== </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">null</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">)
    {
        </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">try
        </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">{
            </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_Logger </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">new </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(255, 255, 230);">"AppLogger"</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
        }
        </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">catch </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">LoggerInitializationException</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">)
        {
            </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_Logger </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">new </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">();
        }
    }
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// return logger
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">return </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_Logger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
}
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">private set </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">{ </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_Logger </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">value</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">; }
}</span></pre>The **AppLogger** constructor takes care of configuring log4net using the embedded XML files based on the build configurations.

<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">public </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">string </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">loggerName</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">)
{
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">try
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">{
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Initiate logger object
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">this</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Log </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">LogManager</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">GetLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">loggerName</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">#if </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">DEBUG
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Create a log file in the Temp folder
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">string </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">logFilePath </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">Path</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">GetTempFileName</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">();
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Add log file path to the configurations stream
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">string </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">loggerConfigurations </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">
Resources</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Log4netReleaseConfigurations</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">loggerConfigurations </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">
loggerConfigurations</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Replace</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">_LoggerLocationSymbol</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">, </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">logFilePath</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Convert embedded configurations file to a stream
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">byte</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">[] </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">byteArray </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">
Encoding</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">ASCII</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">GetBytes</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">loggerConfigurations</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">MemoryStream </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">stream </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">new </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">MemoryStream</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">byteArray</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Configure logger from stream
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">XmlConfigurator</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Configure</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">stream</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Store log file path
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">LogFilePath </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">logFilePath</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">#endif
#if </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">!DEBUG
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:gray;">// Create a log file in the Temp folder
    string logFilePath = Path.GetTempFileName();
    // Add log file path to the configurations stream
    string loggerConfigurations =
Resources.Log4netReleaseConfigurations;
    loggerConfigurations =
loggerConfigurations.Replace(AppLogger._LoggerLocationSymbol, logFilePath);
    // Convert embedded configurations file to a stream
    byte[] byteArray =
Encoding.ASCII.GetBytes(loggerConfigurations);
    MemoryStream stream = new MemoryStream(byteArray);
    // Configure logger from stream
    XmlConfigurator.Configure(stream);
    // Store log file path
    AppLogger.LogFilePath = logFilePath;
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:blue;">#endif
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Supress logger errors/exceptions by default
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">this</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">SuppressErrors </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">true</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
}
</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">catch </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">Exception </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">e</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">)
{
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Empty logger object
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">this</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Log </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">null</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:green;">// Throw exception
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">LoggerInitializationException </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">ex </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">
new </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">LoggerInitializationException</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">(</span><span style="background: none repeat scroll 0% 0% rgb(255, 255, 230);">"Logger initialization failed"</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">, </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">e</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">);
    </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">throw </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">e</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;
}
} </span></pre>You can see that the constructor creates a file in the Temp folder (for ups and downs of this choice, read [Part 1](http://www.amreldib.com/2010/07/configuring-log4net-and-using-applogger.html)), and modifies the XML file before configuring log4net with a stream of the file. Then it sets the **LogFilePath** property with a path to the log file.

It also uses preprocessor directives (**#if DEBUG**) to configure log4net differently in the debug and release configurations. You can make the code less in size by using the same configurations. This constructor happens to use the same configuration but I wanted to show that you can use different configurations.
By default, AppLogger will suppress its errors. So even if initialization failed or any other error occurs, logging will stop but you don’t have to modify your code to catch any exceptions.

If you want to catch logging exceptions, you can change the **SuppressError** property by writing:
<pre class="code"><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248); color: rgb(166, 83, 0);">AppLogger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">Logger</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">.</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:maroon;">SuppressErrors </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">= </span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);color:navy;">false</span><span style="background: none repeat scroll 0% 0% rgb(248, 248, 248);">;</span></pre>AppLogger makes it easy and fast to start logging but it has its downsides as well. Calling the **AppLogger.Logger** static property has a performance overhead more than other properties since it checks if the logger hasn’t been created yet. If your application has one entry point (Console application, Windows application, etc.) you can move the initialization code to the entry point and get rid of the overhead.

Also, the configuration I’m using creates a log file with a name that is not predefined which makes it difficult to find sometimes unless you use the **LogFilePath** property. You can change the configurations to fit your workflow, as this fits mine.
I’ve used the AppLogger class for number of projects and it’s working fine, I hope it helps you as well.

Feel free to offer any suggestions or questions in the comments.
The code is offered under the Creative Commons Attribution 2.5 Canada License. You can use and modify this code, you can use it in commercial and non-commercial work. Kindly attribute this code to its original author.