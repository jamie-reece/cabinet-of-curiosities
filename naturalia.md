---
title: Naturalia
subtitle: Part two of the cabinet
---
<section class="section p-0">
  <div class="columns is-multiline">
    {% for chapter in site.naturalia %}
      {% include chapter_block.html %}
    {% endfor %}
  </div>
</section>
