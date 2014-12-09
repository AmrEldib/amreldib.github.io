---
layout: postWithComments
name: UsingIntellisenseWithEsriJsapiInVisualStudio
title: Using Intellisense with Esri’s JavaScript API in Visual Studio
time: 2013-03-03 14:05:00.001000000 -08:00
category: blog
tags:
- JavaScript
- VS2012
- GIS
- Esri
- VS2010
- Visual Studio
- ArcGIS
redirects:
- /2013/03/using-intellisense-with-esris.html
---
We all love Intellisense in Visual Studio, but with JavaScript is a little difficult to do that given it’s a dynamic language. However, most JavaScript libraries now comes with VSDoc files that provide a way to add intellisense to JavaScript in Visual Studio (and other IDEs). 
This [post](http://blog.craigtp.co.uk/post/Javascript-jQuery-Intellisense-in-Visual-Studio-2012.aspx) describe how to add the VSDoc files of any JavaScript library to your project in Visual Studio (Some of the images in this post are from [here](http://blog.craigtp.co.uk/post/Javascript-jQuery-Intellisense-in-Visual-Studio-2012.aspx)). In this post, I’ll expand on that to add intellisense for the Esri JavaScript API (JSAPI). 
First, download the VSDoc file for the JSAPI from [here](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/jsapi_vsdoc12_v33.zip) (direct link to Zip file). Updated version of the file could be found [here](http://help.arcgis.com/en/webapi/javascript/arcgis/jsapi/#api_codeassist). 
Thanks to <span class="usertitle">[Ken Buja](http://forums.arcgis.com/members/1411-kenbuja) who provided the updated file on [Esri JSAPI forum](http://forums.arcgis.com/threads/78957-Is-the-VSDoc-for-JSAPI-Up-to-Date).</span>

### Visual Studio 2012
Open the Options Dialog  

![Open Options Dialog]({{ site.baseurl }}public/images/JsapiIntellisense/1-OpenOptionsDialog.png)  

Under Text Editor &gt; JavaScript &gt; Intellisense &gt; References, switch to Implicit (Web) in the drop down list, and make sure that “~/Scripts/_references.js” is added. 

![Prepare Javascript References]({{ site.baseurl }}public/images/JsapiIntellisense/2-PrepareJsReferences.png)  

This will tell Visual Studio that in any project, you will place a file named “_references.js” under a folder named “Scripts” at the root of the project, and in that file you will add references to the JavaScript API files with intellisense. You can change the file name or folder to anything you like. 

Now, let’s add the _references.js file. Add a new item under the Scripts folder. 

![Add New File]({{ site.baseurl }}public/images/JsapiIntellisense/3-AddNewItem.png)  

Then, name the new file _references.js 

![Add Reference File]({{ site.baseurl }}public/images/JsapiIntellisense/4-AddReferencesFile.png)  

In the new file, add references to the VSDoc file you included in your project. You can simply drag the file from the Solution Explorer and drop it on to the file. 

![Content of Reference File]({{ site.baseurl }}public/images/JsapiIntellisense/5-ContentOfReferenceFile.png)  

You can see in this file, I’ve added references to jQuery, SignalR, and the JSAPI. 
Now, you’ll get intellisense in your JavaScript file. 

![Intellisense in VS 2012]({{ site.baseurl }}public/images/JsapiIntellisense/6-EsriJsApiIntellisenseVS2012.png)  

### Visual Studio 2010
In Visual Studio 2010, there’s no section in Options to add a reference to the _references.js file. So, you’ll need to add a reference to that file in each file you’re working on. 

![Adding Reference File in VS 2010]({{ site.baseurl }}public/images/JsapiIntellisense/7-AddingReferenceFileInVS2010.png)  

You’ll get the same results.        

![Intellisense in VS 2010]({{ site.baseurl }}public/images/JsapiIntellisense/8-EsriJsApiIntellisenseVS2010.png)  

**Update**: I've updated the links to VSDoc file to the latest version.
  