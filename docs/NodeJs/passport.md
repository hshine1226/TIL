# PassportJS를 통해 로그인 인증 기능 만들기

## Passport

Passport는 Node.js를 위한 Authentication Middleware이다. 

우리는 사용자 인증을 구현하기 위해서 Passport라는 미들웨어를 사용할 것이다. 

인증(Authentication)이란 브라우저 상에서 쿠키를 설정해주면 그 쿠키를 통해서 사용자 ID 등을 알 수 있고, 이를 통해 Passport까 브라우저에서 자동으로 쿠키를 가져와서 인증이 완료된 User Object를 Controller에 넘겨주는 것이다.

그리고 Passport는 작은 모듈들로 이루어져 있어서 대부분의 다른 서비스들(페이스북, 깃허브, 구글, 스팀 등)로부터 인증을 받을 수도 있다.

> 쿠키: 쿠키는 우리가 브라우저에 저장할 수 있는 것들이다. 이 정보에는 모든 요청(Request)에 대해서 백엔드로 전송될 정보들이 담겨져 있다.

Passport가 하는 일은 쿠키의 생성, 저장을 한 이후에 해당 쿠키를 유저에게 보내주는 역할을 한다. 실제 과정은 이것보다 훨씬 더 복잡하지만 그 부분에 대해서는 Passport가 알아서 해주니 너무 걱정하지 않아도 된다. 

Passport에서 코드 구현은 아래에서 보는 것과 같이 그리 복잡하지 않다.

``` js
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
```

누군가 `/login`으로 post를 하면 `passport.authenticate`라는 것을 호출한다. 그리고 `'local'`이라는 것은 Strategy(전략)이라고 하는 것이다. 우리의 경우에는 'facebook,', 'github' 등과 같은 전략을 사용할 수 있다.

그리고 인증이 되고난 후에는 function이 실행된다.  그리고 function안을 살펴보면 `req.user`라는 것을 볼 수 있다. 보다시피 Passport는 직접 `req.user`를 만들어준다. 이것이 바로 현재 로그인한 사용자가 된다.



## 모듈

### passport-local-mongoose

passport-local-mongoose 모듈은 사용자 기능(User functionality)을 추가해주는 모듈이다. 우리의 User model을 위해서 사용될 것이다. 기본적인 사용자 인증 기능(패스워드 생성, 변경, 확인 암호화 등)



## LocalAuthentication

name, email, avatarUrl 등을 가지는 User라는 Model을 아래와 같이 생성한다.

``` js
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

``` js
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



``` js
// init.js

import "./models/User"
```

