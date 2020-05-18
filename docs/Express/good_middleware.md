# [Express] 알아두면 좋은 Middlewares

## 1. Morgan

HTTP request logger middleware for node.js

logging에 도움을 주는 미들웨어이다. logging이란 어디서 무슨 일이 일어나는지를 기록하는 것이다.

### 설치법

`$ npm install morgan`

### 사용법

```js
import morgan from "morgan";
app.use(morgan("format"));
```

format으로는 `combined`, `common`, `dev`, `short`, `tiny`가 있다.

## 2. Helmet

Help secure Express apps with various HTTP headers

Helmet helps you secure your Express apps by setting various HTTP headers. _It's not a silver bullet_, but it can help!

Helmet은 Express apps의 보안에 도움을 주는 미들웨어이다.

### 설치법

`npm install helmet`

### 사용법

```js
import helmet from "helmet";
app.use(helmet());
```

## 3. Body-Parser

누군가 form을 채워서 전송한다면 그 form은 서버에 의해서 받아져야한다.

form을 받았을 때 그 데이터를 갖고 있는 request object에 접근하기 위해서는 body-parser를 사용한다.

body-parser는 body로부터 정보를 얻을 수 있게 해주는 것이다.

### 설치법

`npm install body-parser`

### 사용법

```js
import bodyParser from "body-parser"
app.use(bodyParser.json()); // 서버가 json을 이해하게 해준다.
app.use(bodyParser.urlencoded({ extended: true })); // 서버가 urlencoded를 이해하게 해준다.
...
```

## 4. Cookie-Parser

Session을 다루기 위해서 Cookie-parser를 이용해 Cookie에 유저 정보를 저장할 것이다.

### 설치법

`npm install cookie-parser`

### 사용법

```js
import cookieParser from "cookie-parser";
app.use(cookieParser());
```
