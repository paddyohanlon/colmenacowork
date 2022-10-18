---
layout: blog
title: Blog
description: El blog del coworking La Colmena.
image: assets/images/social/default.jpg
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
