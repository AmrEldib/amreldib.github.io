---
layout: blogPost
name: HowToUseIpfsToFixNpm
title: "How to Use IPFS to Fix NPM"
time: 2016-03-23 12:10:00.003000000 -08:00
category: blog
commentsSection: 'true'
frontpage: 'true'
excerpt: "Let's avoid repeating the left-pad saga"
twitter_image: "ipfs-npm.png"
tags: 
- NPM
- IPFS
- Open Source
---

<img class="imageInCenter" title="My Cmder shell after customization" src="{{ site.imgFolder_blog }}{{ page.name }}/ipfs-npm.png">

Last night and this morning, everyone is talking about how [one developer took down big number of large JavaScript projects](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/) by [removing his modules from NPM](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.z1pjotygm).  
People always talk about how NPM is a single point of failure. "*boy, if NPM is gone, we'll be in big trouble*". Usually the concern is about NPM having problems, or NPM (the company) going evil. We don't usually think about one package disappearing like what happened yesterday.  
  
There's a lot to be said about what happened, and decry the irony of Open Source depending on one company. But, I'm not gonna talk about this. Let's move directly to one possible solution.  
  
One solution is to use [IPFS](http://ipfs.io/) to refer to packages instead of file names and URLs that point to a location.  
IPFS (InterPlanetary File System, a not-great name by the admission of its creator) is a proposed distribution protocol for addressing content (creating URLs) that points to content using their *signature* rather than their location. The signature (the file name) is unique and depends on the content.  
Once a package is created, it gets uploaded to any site, and people can copy it.  
If you ask the network for a certain signature, it'll get you that file from wherever is closer to you. It uses a [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table) (DHT) to find where to find the content.  
Content can still be referred to using a human-friendly name using [IPNS](https://github.com/ipfs/examples/tree/master/examples/ipns) (a DNS for IPFS) and ([later](https://github.com/ipfs/notes/issues/41)) [Namecoin](http://namecoin.info/).  
[Neocities](https://neocities.org/) (the CMS/blog hosting services) is [already working](https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html) to add IPFS support. By the way, this last link is an IPFS link. So, [an implementation is already out there](https://github.com/ipfs/go-ipfs) and can be tested.  
This way, if you decide to put out a release of a package, you don't have to maintain its hosting forever. As long as someone else is hosting a copy, people will get it. As long as someone has a copy of the file, they can re-upload it (offer it on the network) and it'll be offered using the same name.  
If you decide to remove your code repository, you aren't breaking anyone's code.  
This way, people decide to put their content online package by package and release by release. You can't go back and remove old stuff you already released.   

[awesome-ipfs](https://github.com/ipfs/awesome-ipfs) has some great resources.   
Here's a good talk on the motivations and ideas for IPFS  

<div class="youtube-container">
   <div class="youtube-player" data-id="HUVmypx9HGI"></div>
</div>
  
**Update**: Last December, [David Dias](https://twitter.com/daviddiasfront) did a demo on one way IPFS could be used to mirror NPM. Here's a [video of the talk](https://www.youtube.com/watch?v=-S-Tc7Gl8FM), and his [blog post on the topic](http://blog.daviddias.me/2015/12/08/stellar-module-management).  
