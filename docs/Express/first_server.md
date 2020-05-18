# Express로 첫 번째 서버 만들기

## 서버 생성

1. require를 통해서 express를 불러온다.
2. express를 실행해서 application을 만든다.
3. application을 지정한 Port 번호로 listen 해준다.
4. Terminal에서 index.js를 node로 실행한다.

``` js
// index.js
/* require를 통해 express를 불러온다. node_module/express */
const express = require("express");
// app이라는 변수에 express를 실행해서 application을 만든다.
const app = express();
const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
```

``` shell
node index.js
```

## package.json으로 scripts 만들기

``` json
"scripts": {
    "start": "node index.js"
}
```

위와 같이 scripts를 추가할 수 있다.

Scripts를 추가하고 나면 Terminal에서 `node index.js`와 같이 실행하는 대신에 `npm start`와 같이 실행할 수 있다.

