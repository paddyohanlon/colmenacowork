---
layout: blog
title: Blog
image: assets/images/social/default.png
lang: es
ref: blog
---

{% assign posts=site.posts | where:"lang", page.lang %}

<ul>
{% for post in posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
