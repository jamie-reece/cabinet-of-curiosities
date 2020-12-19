---
title: Tags
permalink: /about/tags/
---
{% assign part_one_tags = site.artificialia | map: "tags" %}
{% assign part_two_tags = site.naturalia | map: "tags" %}
{% assign all_tags = part_one_tags | concat: part_two_tags %}
{% assign tags = "" | split: "," %}
{% for tag in all_tags %}
  {% assign tags = tags | push: tag | uniq | sort %}
{% endfor %}

<section class="section">
  <div class="container">
  {% for tag in tags %}
  <div class="block">
    <h2 id="{{ tag | slugify }}" class="title is-3">{{ tag | capitalize }}</h2>
    {% assign part_one_works = site.artificialia | where: "tags", tag %}
    {% assign part_two_works = site.naturalia | where: "tags", tag %}
    {% assign works = part_one_works | concat: part_two_works %}
    {% for item in works %}
    <p><a href="{{ item.url }}">{{ item.title }}</a></p>
    {% endfor %}
  </div>
  {% endfor %}
  </div>
</section>