---
layout: post
name: UsingIntellisenseWithEsriJsapiInVisualStudio
title: Using Intellisense with Esri’s JavaScript API in Visual Studio
time: 2013-03-03 14:05:00.001000000 -08:00
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
First, download the VSDoc file for the JSAPI from <strike>here</strike> [here](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/jsapi_vsdoc12_v33.zip) (direct link to Zip file). <strike>The file was released with [the 3.1 version](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#new_v31) of the API, it could be a little outdated. I couldn’t find a newer version of the file. If you do, please share it in the comments.</strike>Updated version of the file could be found [here](http://help.arcgis.com/en/webapi/javascript/arcgis/jsapi/#api_codeassist). Thanks to <span class="usertitle">[Ken Buja](http://forums.arcgis.com/members/1411-kenbuja) who provided the updated file on [Esri JSAPI forum](http://forums.arcgis.com/threads/78957-Is-the-VSDoc-for-JSAPI-Up-to-Date).</span>

### Visual Studio 2012
Open the Options Dialog 
[![1-OpenOptionsDialog](http://lh5.ggpht.com/-gAj2ZZCjOJY/UTPJA7fys3I/AAAAAAAAASg/SCTUDboeLrU/1-OpenOptionsDialog_thumb%25255B2%25255D.png?imgmax=800 "1-OpenOptionsDialog")](http://lh3.ggpht.com/-jZUAvSldgt4/UTPJAZBqlsI/AAAAAAAAASY/Ok707xfrFlA/s1600-h/1-OpenOptionsDialog%25255B4%25255D.png) 
Under Text Editor &gt; JavaScript &gt; Intellisense &gt; References, switch to Implicit (Web) in the drop down list, and make sure that “~/Scripts/_references.js” is added. 
[![2-PrepareJsReferences](http://lh4.ggpht.com/-vACNgMfgJ9E/UTPJBa0jFLI/AAAAAAAAASw/F1jb1_Z-wUM/2-PrepareJsReferences_thumb%25255B1%25255D.png?imgmax=800 "2-PrepareJsReferences")](http://lh4.ggpht.com/-1X9PuW4GEY4/UTPJBL-EW2I/AAAAAAAAASo/-kz0DFnden4/s1600-h/2-PrepareJsReferences%25255B3%25255D.png) 
This will tell Visual Studio that in any project, you will place a file named “_references.js” under a folder named “Scripts” at the root of the project, and in that file you will add references to the JavaScript API files with intellisense. You can change the file name or folder to anything you like. 
Now, let’s add the _references.js file. Add a new item under the Scripts folder. 
[![3-AddNewItem](http://lh4.ggpht.com/-geikr3VQUJU/UTPJCVBzjiI/AAAAAAAAATA/iWTHrSmDJrc/3-AddNewItem_thumb%25255B1%25255D.png?imgmax=800 "3-AddNewItem")](http://lh5.ggpht.com/-QhUt174g4pg/UTPJB9A2gcI/AAAAAAAAAS4/EYbVDoPGmmg/s1600-h/3-AddNewItem%25255B3%25255D.png) 
Then, name the new file _references.js 
[![4-AddReferencesFile](http://lh6.ggpht.com/-btS6mOLVKfI/UTPJDFIGOAI/AAAAAAAAATQ/whReJ81J75Q/4-AddReferencesFile_thumb%25255B1%25255D.png?imgmax=800 "4-AddReferencesFile")](http://lh5.ggpht.com/-aF3GlnQVuQc/UTPJCmefZuI/AAAAAAAAATI/2prXDAuRJtA/s1600-h/4-AddReferencesFile%25255B3%25255D.png) 
In the new file, add references to the VSDoc file you included in your project. You can simply drag the file from the Solution Explorer and drop it on to the file. 
[![5-ContentOfReferenceFile](http://lh5.ggpht.com/-SegmH4ctiJs/UTPJD7NGOSI/AAAAAAAAATg/4eM7Pq_ipDg/5-ContentOfReferenceFile_thumb%25255B8%25255D.png?imgmax=800 "5-ContentOfReferenceFile")](http://lh3.ggpht.com/-wMlz_wLYiw8/UTPJDU8qjEI/AAAAAAAAATY/_WkLjDIMddk/s1600-h/5-ContentOfReferenceFile%25255B5%25255D.png) 
You can see in this file, I’ve added references to jQuery, SignalR, and the JSAPI. 
Now, you’ll get intellisense in your JavaScript file. 
[![6-EsriJsApiIntellisenseVS2012](http://lh6.ggpht.com/-VuS1qddCFgY/UTPJEi4U9vI/AAAAAAAAATw/XoEMqPedfLA/6-EsriJsApiIntellisenseVS2012_thumb%25255B7%25255D.png?imgmax=800 "6-EsriJsApiIntellisenseVS2012")](http://lh4.ggpht.com/-VbiOEfkh2To/UTPJEO2kGPI/AAAAAAAAATo/xXtRJdYUMBM/s1600-h/6-EsriJsApiIntellisenseVS2012%25255B5%25255D.png) 

### Visual Studio 2010
In Visual Studio 2010, there’s no section in Options to add a reference to the _references.js file. So, you’ll need to add a reference to that file in each file you’re working on. 
[![7-AddingReferenceFileInVS2010](http://lh5.ggpht.com/-xdvHou8oRw8/UTPJFNPVGNI/AAAAAAAAAUA/Mv0FGWm3bQ8/7-AddingReferenceFileInVS2010_thumb%25255B8%25255D.png?imgmax=800 "7-AddingReferenceFileInVS2010")](http://lh5.ggpht.com/-Pd2OPPhp-wQ/UTPJE_ey5hI/AAAAAAAAAT4/9b7gjdghMtw/s1600-h/7-AddingReferenceFileInVS2010%25255B6%25255D.png) 
You’ll get the same results.        

[![8-EsriJsApiIntellisenseVS2010](http://lh5.ggpht.com/-p9PuutmFoy4/UTPJFinHsMI/AAAAAAAAAUQ/7PHjryKtahM/8-EsriJsApiIntellisenseVS2010_thumb%25255B5%25255D.png?imgmax=800 "8-EsriJsApiIntellisenseVS2010")&nbsp;](http://lh6.ggpht.com/-RvlMNiqflpU/UTPJFaPNF1I/AAAAAAAAAUI/Fq7o-3PbigU/s1600-h/8-EsriJsApiIntellisenseVS2010%25255B4%25255D.png)

&nbsp;**Update**: I've updated the links to VSDoc file to the latest version.
  