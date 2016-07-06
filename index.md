---
layout: default
title: Home
---

# Hi, I'm Amr

I'm a software developer building GIS applications. These are some of my thoughts on software, technology, books and more.

Here are some recent things I wrote about

<div class="related">
	<ul class="related-posts">
		{% for post in site.related_posts limit:5 %}
		<li>
			<h3 {% if post.lang= ='ar' %}class="rtl" dir="rtl" lang="ar" {% endif %}>
				<a href="{{ post.url }}">
					{{ post.title }}
				</a>
			</h3>
			<small><bdi>{{ post.date | date_to_string }}</bdi></small>
			<p>
				{{ post.excerpt }}
				<a href="{{ post.url }}">
					{% if post.lang == 'ar' %}
					... إقرأ المزيد
					{% else %}
					... read more
					{% endif %}
				</a>
			</p>
		</li>
		{% endfor %}
	</ul>
</div>

Or, check out the sections of my website

## [Blog](/blog/)  
{{ site.rss_description_blog }}  

## [Projects](/projects/)  
{{ site.rss_description_projects }}  

## [Writings](/writings/)  
{{ site.rss_description_writings }}  

## [Linkblog](/linkblog/)  
{{ site.rss_description_linkblog }}  

## [Bookshelf](/bookshelf/)  
{{ site.rss_description_bookshelf }}  

## [Reviews](/reviews/)  
{{ site.rss_description_reviews }}  

## [Talks](/talks/)  
{{ site.rss_description_talks }}  

## [Audio and Video](/av/)  
{{ site.rss_description_av }}  

<!--
##[Tools](/tools/)##  
{{ site.rss_description_tools }}  

##[Bookmarks](/bookmarks/)##  
{{ site.rss_description_bookmarks }}  

##[Favorites](/favs/)##  
{{ site.rss_description_favs }}  
    -->

### Find Me on the Interwebs  
<ul style="list-style-type:none">
    <li>
        <a class="sidebar-nav-item side-nav-icon" 
   href="https://twitter.com/{{ site.author.username.twitter }}" rel="me">
            <i class="fa fa-twitter fa-lg frontPageIcons" title="twitter.com/{{ site.author.username.twitter }}"></i>@{{ site.author.username.twitter }}
        </a>
    </li>
    <li>
        <a class="sidebar-nav-item side-nav-icon"
	   href="https://github.com/{{ site.author.username.github }}" rel="me">
		    <i class="fa fa-github fa-lg frontPageIcons" title="github.com/{{ site.author.username.github }}"></i>GitHub Page
	    </a>
    </li>
    <li>
        <a class="sidebar-nav-item side-nav-icon" 
           href="http://www.goodreads.com/{{ site.author.username.goodreads }}" rel="me">
            <span style="font-family: helvetica; vertical-align: text-top;padding-left:4px;" class="fa-lg frontPageIcons" title="goodreads.com/{{ site.author.username.goodreads }}">g</span>Goodreads Bookshelf
        </a>
    </li>
    <li>
        <a class="sidebar-nav-item side-nav-icon"
   href="https://www.linkedin.com/in/{{ site.author.username.linkedin }}" rel="me">
            <i class="fa fa-linkedin-square fa-lg frontPageIcons" title="linkedin.com/{{ site.author.username.linkedin }}"></i>LinkedIn Resume
        </a>
    </li>
    <li>
        <a class="sidebar-nav-item side-nav-icon" 
           href="{{ site.rss_page }}">
            <i class="fa fa-rss-square fa-lg frontPageIcons" title="Follow via RSS"></i>RSS
        </a>
    </li>
</ul>
