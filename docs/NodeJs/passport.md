# PassportJS를 통해 로그인 인증 기능 만들기😊

## Passport

Passport는 Node.js를 위한 Authentication Middleware이다.

우리는 사용자 인증을 구현하기 위해서 Passport라는 미들웨어를 사용할 것이다.

인증(Authentication)이란 브라우저 상에서 쿠키를 설정해주면 그 쿠키를 통해서 사용자 ID 등을 알 수 있고, 이를 통해 Passport까 브라우저에서 자동으로 쿠키를 가져와서 인증이 완료된 User Object를 Controller에 넘겨주는 것이다.

그리고 Passport는 작은 모듈들로 이루어져 있어서 대부분의 다른 서비스들(페이스북, 깃허브, 구글, 스팀 등)로부터 인증을 받을 수도 있다.

> 쿠키: 쿠키는 우리가 브라우저에 저장할 수 있는 것들이다. 이 정보에는 모든 요청(Request)에 대해서 백엔드로 전송될 정보들이 담겨져 있다.

Passport가 하는 일은 쿠키의 생성, 저장을 한 이후에 해당 쿠키를 유저에게 보내주는 역할을 한다. 실제 과정은 이것보다 훨씬 더 복잡하지만 그 부분에 대해서는 Passport가 알아서 해주니 너무 걱정하지 않아도 된다.

Passport에서 코드 구현은 아래에서 보는 것과 같이 그리 복잡하지 않다.

```js
app.post("/login", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect("/users/" + req.user.username);
});
```

누군가 `/login`으로 post를 하면 `passport.authenticate`라는 것을 호출한다. 그리고 `'local'`이라는 것은 Strategy(전략)이라고 하는 것이다. 우리의 경우에는 'facebook,', 'github' 등과 같은 전략을 사용할 수 있다.

그리고 인증이 되고난 후에는 function이 실행된다. 그리고 function안을 살펴보면 `req.user`라는 것을 볼 수 있다. 보다시피 Passport는 직접 `req.user`를 만들어준다. 이것이 바로 현재 로그인한 사용자가 된다.

## 모듈

### passport-local-mongoose

passport-local-mongoose 모듈은 사용자 기능(User functionality)을 추가해주는 모듈이다. 우리의 User model을 위해서 사용될 것이다. 기본적인 사용자 인증 기능(패스워드 생성, 변경, 확인 암호화 등)

## LocalAuthentication

name, email, avatarUrl 등을 가지는 User라는 Model을 아래와 같이 생성한다.

```js
// models/User.js

import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

// Mongoose, MongoDB를 사용하기 때문에 passport-local-mongoose을 플러그인으로서 추가한다.
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.Model("User", userSchema);

export default model;
```

### Passport-Local Mongoose

[Passport-Local Mongoose](https://github.com/saintedlama/passport-local-mongoose)는 패스워드 설정, 확인 등을 자동적으로 해주는 Mongoose Plugin이다. Document를 참고하면 setPassword, changPassword, authenticate 등 여러 인스턴스 메소드들을 확인할 수 있다. 그리고 Main Options 항목에서 여러가지 옵션들을 확인할 수 있는데, 그중 우리는 usernameField라는 옵션을 사용할 것이다. 이 옵션을 사용하게 되면 username으로 field를 명시한다. 여기서 username은 내 이름이 될 수도 있고, 이메일이 될 수도 있다. 아무튼 passportLocalMongoose에게 어떤 Field를 username으로 사용할 것인지를 알려줘야한다. 우리는 일단 email을 username으로 사용할 것이다.

> 설치: `npm install passport-local-mongoose`

```js
// passport.js

import passport from "passport";
import User from "./models/User";

// passport에게 Statege(로그인 하는 방식)을 사용하라고 말하는 것이다.
passport.use(User.createStrategy());
```

### paaport, passport-local

> 설치: npm install passport passport-local
>
> > passport는 passport이고, passport-local은 username과 password를 쓰는 사용자 인증 방식(Strategy)를 의미한다.

Passport에서 Stategy는 로그인 하는 방식을 의미하는 말로서 예를들어 페이스북으로 로그인하기, 깃허브로 로그인하기, username과 password로 로그인하기 등을 말한다.

```js
// init.js

import "./models/User";
```

### serializeUser, deserializeUser

> serializeUser
>
> '어떤 정보를 쿠키에게 주느냐', '쿠키가 어떤 정보를 가질 수 있느냐'
>
> '어떤 field가 쿠키에 포함될 것인지를 알려주는 역할을 함'

> deserializeUser
>
> '어느 사용자인지 어떻게 찾는가', '쿠키의 정보를 어떻게 사용자로 전환하는가'

쿠키에는 너무 많은 정보를 주면 안된다. 쿠키는 아주 작기 때문에 민감한 정보를 담으면 보안에 취약하다.

passport-local-mongoose 덕분에 아래와 같이 shortcut을 사용할 수 있다.

```js
// passport.js

// ...

// 오직 user.id만 담아서 보내는 것
passport.serializeUser(User.serializeUser());
// deserializeUser
passport.deserializeUser(User.deserializeUser());
```

```js
// controllers/userController.js
import User from "../models/User";

// ...

export const postJoin = async (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400); // 잘못된 요청
    res.render("join", { pageTitle: "Join" });
  } else {
    // Register User
    try {
      // 계정 생성
      const user = await User({
        name,
        email,
      });
      // 계정 가입
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.home);
  }
};
```

postJoin을 미들웨어로 만들것이다.

```js
// routers/globalRouter.js
globalRouter.post(routes.join, postJoin, postLogin);
```

```js
// controllers/userController.js

export const postJoin = async (req, res, next) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400); // 잘못된 요청
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      // 미들웨어 수행후 다음으로 넘어가기
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Log user in
  }
};

// local Strategy로 passport 인증
export const postLogin = passport.authenticate("local", {
  // 로그인에 실패하면 로그인화면으로
  // 성공하면 홈으로 redirect 해준다.
  failureRedirect: routes.login,
  successRedirect: routes.home,
});
```

```js
// middlewares.js
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube";
  res.locals.routes = routes;
  // passport가 사용자를 로그인 시킬 때 user가 담긴 object를 req에 올려준다.
  // 따라서 이를 템플릿에서 사용하기 위해 미들웨어에서 아래와 같이 user를 저장한다.
  res.locals.user = req.user || null;
  next();
};
```

passport를 import하고, use한다.

```js
// app.js

import passport from "passport";
// ...

app.use(passport.initialize());
app.use(passport.session());

// ...
```

### session

`npm install express-session`으로 session을 설치한다.

```js
// app.js

import session from "express-session";

app.use(
  session({
    // secret은 무작위 문자열로서 session ID를 암호화 한다.
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);
```

[randomkeygen](https://randomkeygen.com/)에서 random한 무작위의 key를 얻을 수 있다.

```
// .env
// randomkeygen에서 얻은 key값 저장
COOKIE_SECRET = "VspO%ub8mfs-0$&>9*6~tKH<F![[Z~""

```

`header.pug`에서 user.isAuthentication이 없어졌으므로 그냥 user로 변경해준다.

```pug
// ...
.header__column
			ul
				if !user
					// ...
```

로그인이 잘 되는지 확인해보면 로그인과 쿠키가 정상적으로 되는 것을 볼 수 있다.

하지만, 페이지를 새로고침 해보면 쿠키가 없어지는 것을 볼 수 있다.

이것을 mongoDB를 이용해서 해결해보자.

## MongoDB를 이용해서 cookie 저장하기

`npm install connect-mongo`로 connect-mongo를 설치한다.

Session을 MongoDB에 저장해서 브라우저가 새로고침 되어도 세션이 유지되게 한다.

```js
// app.js
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

const CookieStore = MongoStore(session);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
```

## Middleware를 통해 Routes의 출입을 제한하기

### Middleware 생성

```js
// middlewares.js
// 로그인한 사용자라면 홈으로 Redirect 해준다.
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

// 로그인하지 않은 사용자라면 홈으로 Redirect 해준다.
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
```

### Router 설정

위에서 만든 미들웨어를 통해 Router에서 해당하는 경로에 대해서 출입을 제한한다.

예를들어서 로그인한 유저는 Join, Login에 접속하지 못하게 하는 것, 로그인하지 않은 유저는 프로필 수정, 패스워드 변경을 제한하는 것 등이 있다.

```js
// routers/globalRouter.js
import { onlyPublic, onlyPrivate } from "../middlewares";

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);
```

```js
// routers/userRouter.js
import { onlyPrivate } from "../middlewares";

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
```

```js
// routers/globalRouter.js
import { uploadVideo, onlyPrivate } from "../middlewares";

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
```

## Logout

로그아웃은 정말 간단하다. 아래와 같이 `req.logout()`만 추가해주면 passport가 알아서 처리해준다.

```js
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
```

## Github Login

passport strategies 중에서 passport-github를 사용해 github 로그인을 구현할 것이다.

`npm install passport-github`로 설치 후에 먼저 [developer application](https://github.com/settings/applications/new)에서 새로운 Application을 생성해야 한다. 이때 callback URL은 `http://localhost:4000/auth/github/callback`과 같이 작성한다. 이것은 변경해도 상관 없다.

### 환경변수 추가

Application 생성완료되면, Client ID와 Client Secret는 다른사람과는 절대 공유하면 안되기 때문에, .env 환경변수 파일에 Client ID와 Client Secret을 선언했다.

```
// .env
GITHUB_CLIENT_ID = "88d41a39a8e6af4103ff"
GITHUB_CLIENT_SECRET = "35f3bc886295a7fada74a386a2f7a4b3c303f460"
```

### Configure Strategy

``` js
// passport.js
// ...
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // routes.githubCallback: /auth/github/callback
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    // userController.js에 선언됨
    githubLoginCallback
  )
);
```

``` js
// controllers/userController.js

export const githubLogin = passport.authenticate("github");

// 첫번째와 두번째 Parameter는 사용하지 않는 Parameter이므로 언더바(_)로 선언했다.
export const githubLoginCallback = async (_, __, profile, cb) => {
  // profile의 _json이라는 필드에서 받아온 값들이다.
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    // MongoDB에서 email을 기준으로 유저를 찾는다.
    const user = await User.findOne({ email });
    // 해당 유저가 존재한다면, 아래와 같이 id, avatar를 저장하고 callback function으로 유저를 전달한다.
    if (user) {
      user.githubId = id;
      user.avatarUrl = avatarUrl;
      user.save();
      return cb(null, user);
    }
    // 해당 유저가 존재하지 않는다면, 아래와 같이 새로운 유저를 만들고, Callback Function으로 새로운 유저를 전달한다.
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
```

### Requests

위에서 Github Strategy의 설정을 완료하고 이제는 Routes, Router 설정을 해줘야 한다.

``` js
// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

github: GITHUB,
githubCallback: GITHUB_CALLBACK,
```

``` js
// routers/globalRouter.js

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);
```

``` pug
// views/partials/socialLogin.pug
.social-login
    button.social-login--github
        a(href=routes.github)
            span 
                i.fab.fa-github
            | Continue with Github
```

## Facebook Login

Facebook login 구현 방식은 Github와 Google과 매우 비슷하지만 한가지 다른 점이 있다. 그것은 보안 문제로 facebook이 까다롭기 때문에 https를 써야하는 것이다.

### Facebook Developer 설정

따라서 [Facebook Developer](https://developers.facebook.com/)에서 설정해야 할 것들이 있다.

1. 앱을 만든다.
2. 웹사이트 URL을 추가한다.
3. 상단에 보면 앱 ID 옆에 개발모드와 Live모드가 있는데 이 모드를 Live 모드로 하게 되면 https를 사용해야 한다. 따라서 우리는 개발 모드로 변경한다.
4. 앱 검수 - 내 권한 및 기능에서 email과 default를 승인 받아야 해당 정보들을 받아올 수 있다.

### Scope, profileField 옵션 사용

Developer 사이트에서 모든 설정을 마쳤다면 `passport.authenticate()`의 scope 옵션과 profilefield 옵션을 사용해야한다. [passport-facebook](http://www.passportjs.org/packages/passport-facebook/) 옵션을 확인할 수 있다.

``` js
// passport.js

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
      // profileFields 옵션으로 id, name, photo, email을 요청한다.
      profileFields: ["id", "displayName", "photos", "email"],
    },
    facebookLoginCallback
  )
);
```

``` js
// controllers/userController.js

export const facebookLogin = passport.authenticate("facebook", {
  	// scope를 통해서 우리가 필요한 email의 권한을 요청한다.
    scope: ["email"],
});
```



 



## 정리

### Local 방식 인증(Authentication)

Local 방식은 User name과 Password를 이용한 인증 방식으로 비교적 간단하게 구현할 수 있다.

- Username과 Password를 Post 방식으로 전달
- passport-local-mongoose가 Password가 맞는지 체크
- Password가 맞다면 Passport는 Cookie를 생성

### Github, Google, Facebook and etc 인증(Authentication)

Github 방식은 Local 방식과는 다르다.

- 사용자는 깃허브 인증 페이지로 이동해서 권한 승인을 한다.
- 깃허브 인증 페이지는 /auth/gihub/callback 이라는 URL로 사용자의 정보를 보내준다.
- Passport는 우리가 만든 githubLoginCallback 함수를 호출한다.
- 해당 함수를 통해서 사용자의 모든 정보를 받는다.(profile)
  - 해당 함수의 조건은 callback함수를 Return 하는것이다.
- Callback 함수를 통해 받은 Return에 user가 존재하면, Passport는 이 user를 통해 Cookie를 만든다.
