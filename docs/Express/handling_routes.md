# [Express] Routes 다루기

``` js
/* require를 통해 express를 불러온다. node_module/express */
const express = require("express");
// app이라는 변수에 express를 실행해서 application을 만든다.
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile.");
}

// Routes 생성
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

```



## Routes 생성

Application을 통해서 Routes를 생성하려면, `app.get()`을 이용한다.

## request object

만약 내가 정보를 얻고자 한다면, 예를들어 누가 페이지를 요청했는지, 어떤 종류의 데이터가 전송되었는지... 이럴 때는 request object를 이용한다.

## response object

뭔가 응답을 하기 위해서는 response object를 사용해야 하는데

위의 코드에서 볼 수 있듯이 `res.send()`를 사용해서 data를 보내주면 된다.

만약, 이 서버가 웹사이트 서버처럼 작동하길 원한다면 완전한 html, css 파일을 send 해줘야 한다.