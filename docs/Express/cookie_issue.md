# Chrome Cookie Issue - Cookie SameSite

Express와 PassportJS를 통해서 Login 기능을 구현했다. 

개발 환경에서는 `connect.sid`가 잘 전달이 되고 따라서 Express server에서 `req.user`를 정상적으로 받아올 수 있었다.

하지만 Heroku로 앱을 배포하고 배포된 앱에서는 쿠키를 제대로 받아오지 못하는 문제가 생겼다.

처음에는 이 문제가 **CORS**(Cross-Origin Resource Sharing)때문에 발생한 문제라고 생각하고 cors middleware를 통해서 아래와 같이 설정을 해줬다.

``` js
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (
    allowList.findIndex((element) => element === req.header("Origin")) !== -1
  ) {
    corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(routes.api, cors(corsOptionsDelegate), apiRouter);
```

## SameSite issue

하지만 Heroku 앱에서는 역시 Cookie가 제대로 전달되지 않았다.

그러다 발견한 issue가 바로 SameSite issue이다.

2020년 2월 부터 release된 크롬부터 **새로운 쿠키 정책이 적용**되어서 Cookie의 **sameSite**의 기본값이 "None"에서 "Lax"로 변경되었다는 것이다.

### sameSite 속성

- Strict: **서로 같은 도메인에서만** 쿠키 전송을 허용
- Lax: Strict 속성에 **http get method / a href / link href를 추가**해 사용자 편의성을 높임
- None: **동일 사이트와 크로스 사이트 모두** 쿠키 전송 허용

먼저 express app의 sameSite설정을 아래와 같이 `none`으로 설정해주었다. 여기서 중요한 점은 sameSite 속성을 `none`으로 추가할 경우 `secure` 속성도 같이 추가해주어야 한다.

``` js
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  })
);
```

위와 같이 `secure`과 `sameSite`를 추가하면, 배포한 heroku app에서도 cookie가 정상적으로 동작되는 것을 볼 수 있다.

