# HTML `<form>` tag

## action Attribute

action 속성은 form이 submitted 되었을 때 form-data를 어디로 보낼 것인지를 정의한다.

```html
<form action="URL"></form>
```

## method Attribute

메소드 속성은 form-data를 어떻게 보낼 것인지를 지정한다.

```html
<form method="get|post"></form>
```

### Attribute Values

- get: Default. form-data를 URL에 name/value 쌍으로 추가한다.
  ```
  URL?name=value&name=value
  ```
- post: HTTP post transaction으로서의 form-data 보낸다.
