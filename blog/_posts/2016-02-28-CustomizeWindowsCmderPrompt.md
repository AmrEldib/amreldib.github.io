---
layout: blogPost
name: CustomizeWindowsCmderPrompt
title: "Customize Windows Cmder Prompt"
time: 2016-02-28 22:22:00.003000000 -08:00
category: blog
commentsSection: 'true'
frontpage: 'true'
excerpt: "Give your Windows command line a cool new look"
twitter_image: "CmderPrompt.png"
tags: 
- Windows
- Command line
- Customization
---

<img class="imageInCenter" title="My Cmder shell after customization" src="{{ site.imgFolder_blog }}{{ page.name }}/CmderPrompt.png">
  
I'm finding myself spending more and more time in the command line. But I use Windows, which isn't very clever in the command line. It doesn't have Linux [OhMyZsh](http://ohmyz.sh/), but it has [Cmder](http://cmder.net/), which I like a lot.  
Cmder comes with Git integration. It shows the Git status of current folder. [Install it from Chocolatey](https://chocolatey.org/packages/Cmder/1.1.4.101).  
  
What Cmder lacks (as far as I know) is customization packages you can download and install easily.  
  
I was watching a [video on YouTube](https://youtu.be/zmjfh099zYg?t=10m54s) when the speaker showed his Shell, and I wondered if I can get the same prompt on Cmder.  
  
Cmder uses an **init.bat** file to set the prompt. It customizes Git using a **git.lua** file.  
The shell in the video seems to be done using [powerline](https://github.com/powerline/powerline) or something similar.  
  
After lots of poking around, I managed to get the same look in Cmder. Here's what I've done:  
**CAUTION: Please backup your settings before making any changes. These changes work on my machine, not sure how it will affect yours.**  
- Download the [powerline fonts](https://github.com/powerline/fonts), they include the arrow ending and branch symbols. You can use the powershell script included in the downloaded zip file to quickly install those fonts. I used the **Anonymice Powerline** font with **bold** and monospace settings.  
- In Cmder main settings, make sure to choose Font Charset as **ANSI**.  
- In the settings, under **Startup > Tasks**, pick up where your init.bat is saved. Open the file and replace it with the content of the [init.bat](https://gist.github.com/AmrEldib/1d31cd54409a8ec612df#file-init-bat).  
- The important changes in **init.bat** is [line 12](https://gist.github.com/AmrEldib/1d31cd54409a8ec612df#file-init-bat-L12) where the prompt is modified.  
`@prompt $E[37;44m$P$S{git}$_$E[34;40m{lamb}$S$E[0m`  
This line sets the prompt's font color and background color. Here's a [list of all colors](http://ascii-table.com/ansi-escape-sequences.php). I've avoided using text attributes to make sure that font color and background colors will match.  
- Find where **Cmder** is installed, you should find a **config** folder there.  
- In the **config** folder, there's a **git.lua** file. We'll replace this with this [git.lua](https://gist.github.com/AmrEldib/1d31cd54409a8ec612df#file-git-lua) file.  
- This file adds the Git status to the command prompt if the folder contains a git repo.  
- The changes I've made include changing colors, and adding arrow ending and branch symbols.  
- You'll notice that some characters aren't readable in the gist (lines 30, 31, 40, 44 and 51). Those are characters that are only included in the powerline fonts. The picture below (from [here](https://gist.github.com/agnoster/3712874)) shows the symbols and their unicode number.  
  
<img class="imageInCenter" title="Powerline symbols and their unicode number" src="{{ site.imgFolder_blog }}{{ page.name }}/Characters.jpg">
  
The two symbols I'm using are the right arrow for line ending with unicode **E0B0** and branch with unicode **E0A0**.  
If you copy the snippets from the gist and those symbols aren't copied correctly. Go to Windows Character Map and find them using the unicode under the **Anonymice Powerline** font and copy and paste them in Notepad++ (or any application that will preserve the character).  
Open Cmder and enjoy the new shell.  
If you have any cool customizations for Cmder, please share them in the comments.  
