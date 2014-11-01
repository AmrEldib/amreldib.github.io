---
layout: post
name: VMBasedDevelopmentEnvironment
title: VM-based Development Environment
time: 2010-08-15 12:30:00.001000000 -07:00
tags:
- VMware
- Tools
- Software Development
- Windows
- Virtualization
- VirtualBox
- Visual Studio
- Microsoft Virtual PC
redirects:
- /2010/08/vm-based-development-environment.html
---
![](http://tcglkg.blu.livefilestore.com/y1pDV1HHKQTRsCo0eVj0C8rG5GZKJL3q5JGSgvXgp8pHDUyKM6fn_-qqvNV3488okfBVyUYftUbAgdbhP-fCh84lDSnrleQeXxF/VirtualBox.png?psid=1)![](http://public.blu.livefilestore.com/y1pV7Xk3S8Ndl7Ey04VzVu6iXSOerQaFQ0dTeC7bo8Mc4gcaIyjPbBLFzO8NrB-L4wa7mICKgBm7eIg9CxXnyt3kw/VMware.png?psid=1)I love VMs. To have a sandbox inside which there’s an operating system of your choice where you can try anything and not fear its effect on your host machine, that is empowering.

&#160;

I started using VMs a long time ago, but recently I moved to what I call a “VM-based Development Environment”. As a GIS developer, I have a problem which is that [ArcGIS](http://www.esri.com/products/index.html#desktop_gis_panel) (the main GIS application/platform I’m using) doesn’t allow for side-by-side installation. So, if you want to install version 9.3.1, you have to uninstall version 9.3. And those are two different versions against which you have to develop and test your code.

Over the years, I had a simple solution. Pick a version that I mostly work with and install on my development machine. If I’m moving to a new project that needs a different version, I would uninstall the version I’m using and install the new one. This is, aside from being painful and inefficient, an outdated solution and it created another problem that I found out about at the end of one project I was working on.

Because my personal machine was updated and I install all these kinds of applications with their requirements, there was a software requirement I didn’t add to the installation package and that caused a problem on one client’s machine.

When I started using VMs, I moved the secondary versions of ArcGIS (the ones other than the version I’m mainly using) to VMs. Also, VMs helped with testing, especially when testing installation packages using snapshots (I’ll talk about that later). However, when I faced the missing requirement problem, I decided to take VMs a step further.

I’m using my machine for my personal software (Browser, Outlook, Office, Video, Music, Social Media, etc), and removed all development-related software (including ArcGIS) to a Virtual Machine. So when I work on code, I turn on a VM and start coding on a machine that has the least number of software installed.

### Ups

Moving all development work to a VM offer number of advantages:

*   <div align="justify">To quote a development concept “Separation of Concerns”. you can have a different VM for each project if you want, if the development software is different for each project, the operating system your team is using is different, or even you just want a different mode for each project.</div>*   <div align="justify">Clean-slate machine can help you easily identify the requirements of your code and detect the software it might conflict with.</div>*   <div align="justify">Working on Client-Server project where you want to deploy to a server and develop or test in a environment similar to the production environment.</div>*   <div align="justify">Create a VM and pass to other team members and you’ve got yourself a unified development environment for all team members.</div>*   <div align="justify">You can expand on the concept and create other VMs that can help with tasks related to development like a source code server, continuous integration server, etc.</div>*   <div align="justify">If you want to upgrade or re-install Windows on your host machine or even moved across the country to a whole new machine, copy few files and you still have your development environment intact.</div>*   <div align="justify">Distracted by all the e-mails, IMs, and tweets, just click “Full Screen” and you can easily shut all the annoyance on your host machine.</div>

### Tips

Building a VM is not that difficult but if you’re going to create number of VMs, few if not tens, maybe I can help with some tips:

*   <div align="justify">**Categorize Your Machines**: I have 4 classes of VMs:</div>
*   <div align="justify">**Base**: a building block I use to install all other VMs. It’s an installed and updated OS with the very basic applications (Browser, Anti-virus, etc) that makes it very easy to install a new VM within minutes. You can also have a base for specific environments like Visual Studio 2008 or 2010.</div>*   <div align="justify">**Dev**: a machine for development. I Turn it on and start banging on the keyboard like a monkey :)</div>*   <div align="justify">**Lab**: I use those for testing. It’s important to have different operating system with all variations (x86 and x64 for example).</div>*   <div align="justify">**Sandbox**: want to try something that you’re not sure is completely safe? want to try a trial product that you could remove later but could leave all these bits of crap behind? Use a sandbox.</div>*   <div align="justify">**Come Up with a Naming Convention**: I usually name a VM with a meaningful name that easily explain its configurations, like this</div>

VMClass-OS-InstructionSet-VisualStudioVersion

for example:

Dev-7-x64-10

is a development machine with Windows 7 x64 and Visual Studio 2010

*   <div align="justify">**Use Memorable Names**: in addition to the naming convention, I give memorable names to the machines I use most frequently. It also helps if those names represent the different classes. For example, I give cities names to Dev machines (Cairo, Phoenix, Jakarta, etc), and I give names of the [periodic table](http://en.wikipedia.org/wiki/Periodic_table) elements to Lab machines (Neon, Cobalt, Titanium, etc).</div>*   <div align="justify">**Understand Your Virtualization Software**: whether you’re using [VMware Desktop](http://www.vmware.com/), [Microsoft Virtual PC](http://www.microsoft.com/windows/virtual-pc/), or [VirtualBox](http://www.virtualbox.org/). Make sure to fully understand the capabilities of the software, otherwise you could be missing out on some features that could help you.</div>*   <div align="justify">**Use Snapshots**: one feature that VMs offer that host machines doesn’t very well is ‘Snapshots’. Snapshots helps you save the state of a machine and easily return to it with a click of a button. It’s like Windows’ Restore Point or Mac’s Time Machine but much much faster. You can also have a tree of snapshots.</div>*   <div align="justify">**Create a CodeBox**: To share code between different machines, either create a separate virtual hard drive and store all your data on it or create a shared folder on your host machine and map it as a network drive. I use the first choice because it’s easier to backup (just copy a few files), and avoid a potential security problem of having a shared folder. Be aware of the fine differences of creating a virtual hard drive between different virtualization software and make sure that virtual hard drive persistence doesn’t depend on VM persistence </div>

### Downs

Using VMs as your main development environment isn’t hassle-free and it does have its own disadvantages:

*   <div align="justify">**Memory Monster**: VMs require that you allocate full memory capacity to them once they’re on. So, you better throw away that 3-years old 2GB laptop. If you want to use VMs, you must have at least 4GB RAM. You’re gonna be using a VM for development which means longer hours where you can’t tolerate using a 1GB RAM machine. Do you? :). With 4GB you can have 2GB for your host and 2GB for the VM but you’ll miss out on the benefits of running another VM. Upgrade to 8GB to get full power.</div>*   <div align="justify">**Code Not at Your Fingertips**: If no Visual Studio installed on your host machine, you have to turn on (or de-hibernate) a VM to get to your code. That takes about just a minute but it’s still something.</div>*   <div align="justify">**Maintenance, Maintenance, Maintenance**: all these VMs require taking care of. Updating Windows, anti-virus, and applications is a headache because it’s not fully automated. Mainly I focus on the few machines I’m using, but once a month, I start all Base machines to keep them updated.</div>

[![](http://tcglkg.blu.livefilestore.com/y1pTnMClwm_NKSn93D_A9y1lafQWu2Dexbi3LOtKalQrlHA_8n3ZMlelYui4w26zX7vyzKMAGZRPciLrdQbVZcqZAcx63IYiiit/TwoUpdateWindowsSmall.png?psid=1)](http://public.blu.livefilestore.com/y1pvAXtVd0Lmuip0zcei1bHrDJFK9Nc0Oo3eFQlTa3wPilb9rNHQB9oeVDxoXKmsh-Y6rEQYZhZdEaSyvgXX8lYqQ/TwoUpdateWindows.png?psid=1)

_Two Update Windows, one for a VM and the other for my host machine._

*   <div align="justify">**Gigabytes to Spare**: you should have a lot of those because a plain simple Windows 7 machine with no software uses about 12GB of hard drive space.</div>

I’ve used VMs for development for quite a while now, and I feel that it improved how I work. Give it a try a let me know if it helped.
