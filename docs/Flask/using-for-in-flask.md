# Flask에서 for loop 사용하는 법

## 사용법

```html
{% for job in jobs %}
<span>{{job.title}}</span>
<span>{{job.company}}</span>
<span>{{job.location}}</span>
<span>{{job.link}}</span>
{%endfor%}
```
