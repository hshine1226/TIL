# HTML form 작업

## Join: Log In HTML

### Join & Login 화면 form

```pug
// views/join.pug
extends layouts/main

block content
	.form-container
    	form(action=routes.join, method="post")
          input(type="text", name="name", placeholder="Full Name")
          input(type="email", name="email", placeholder="Email")
          input(type="password", name="password", placeholder="Password")
          input(type="password", name="password2", placeholder="Verified Password")
          input(type="submit", value="Join Now")
	include partials/socialLogin
```

Join 화면은 form 태그를 이용해서 이름, 이메일, 비밀번호, 비밀번호 확인, 가입하기 버튼을 만들었다.

```pug
// views/login.pug
extends layouts/main

block content
	.form-container
    	form(action=routes.login, method="post")
          input(type="email", name="email", placeholder="Email")
          input(type="password", name="password", placeholder="Password")
          input(type="submit", value="Log In")
	include partials/socialLogin
```

Login 화면은 form 태그를 이용해서 이메일, 비밀번호, 로그인하기 버튼을 만들었다.

form을 추가할 때 method가 get이면 모든 정보가 url에 보이게 된다.

Join, Login은 정보를 비밀로 유지해야 하기 때문에 method를 post로 한다.

### Social login Parcial

```pug
//views/partials/socialLogin.pug
.social-login
    // BEM 방법론
    button.social-login--github
        span
            i.fab.fa-github
        |  Continue with Github
    button.social-login--facebook
        span
            i.fab.fa-facebook
        |  Continue with Facebook
```

소셜 로그인 버튼을 Join과 Login 화면에 띄우기 위해서 parcial 하나를 만들었다.



## Change Profile In HTML

Profile을 Updata하는 Edit Profile 페이지의 form을 작성해보자.

```pug
// views/editProfile.pug
extends layouts/main

block content
  .form-container
    form(action=`/users${routes.editProfile}`, method="post")
      label(for="avatar") Avatar
      input(type="file", id="avatar", name="avatar")
      input(type="text", placeholder="Name", name="name")
      input(type="email", placeholder="Email", name="email")
      input(type="submit", value="Updata Profile")
    a.form-container__link(href=`/users${routes.changePassword}`) Change Password
```

action 경로 지정을 위해서 routes파일에 지정된 경로를 가져다 썼다.

action=`` `/users${routes.editProfile}` `` 와 같이 경로를 설정해 줄 수 있다.



## Change Password In HTML

``` pug
// views/changePassword.pug
extends layouts/main

block content
  .form-container
    form(action=`/users${routes.changePassword}`, method="post")
      input(type="password", name="oldPasswod", placeholder="Current Password")
      input(type="password", name="newPassword", placeholder="New Password")
      input(type="password", name="newPassword1", placeholder="Verify New Password")
      input(type="submit", value="Change Password")
```



## Edit Profile In HTML

``` pug
// views/editProfile.pug
extends layouts/main

block content
  .form-container
    form(action=`/users${routes.editProfile}`, method="post")
      label(for="avatar") Avatar
      input(type="file", id="avatar", name="avatar")
      input(type="text", placeholder="Name", name="name")
      input(type="email", placeholder="Email", name="email")
      input(type="submit", value="Updata Profile")
    a.form-container__link(href=`/users${routes.changePassword}`) Change Password

```



## Edit Video In HTML

``` pug
// views/editVideo.pug
extends layouts/main

block content
  .form-container
    form(action=`/videos${routes.editVideo}`, method="post")
      input(type="text", placeholder="Title", name="title")
      textarea(name="description", placeholder="Description")
      input(type="submit", value="Update Video")
    a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video
```



## Home In HTML

### Fake DB 생성

메인 화면에서는 fake database에 임의의 정보들을 아래와 같이 만들어 두었다.

``` js
export const videos = [
  {
    id: 32345,
    title: "Viedo Awesome",
    description: "This is somthing I love",
    views: 24,
    viedoFile: "https://youtu.be/8h3OCbx7ln8",
    creater: {
      id: 11252,
      name: "Junhyuk",
      email: "hshine1226@gmail.com",
    },
  },
  {
    id: 34533,
    title: "Viedo Amazing",
    description: "This is somthing I love",
    views: 24,
    viedoFile: "https://youtu.be/8h3OCbx7ln8",
    creater: {
      id: 11252,
      name: "Junhyuk",
      email: "hshine1226@gmail.com",
    },
  },
  {
    id: 12351,
    title: "Viedo Super",
    description: "This is somthing I love",
    views: 24,
    viedoFile: "https://youtu.be/8h3OCbx7ln8",
    creater: {
      id: 11252,
      name: "Junhyuk",
      email: "hshine1226@gmail.com",
    },
  },
  {
    id: 98273,
    title: "Viedo Cool",
    description: "This is somthing I love",
    views: 24,
    viedoFile: "https://youtu.be/8h3OCbx7ln8",
    creater: {
      id: 11252,
      name: "Junhyuk",
      email: "hshine1226@gmail.com",
    },
  },
  {
    id: 69828,
    title: "Viedo Nice",
    description: "This is somthing I love",
    views: 24,
    viedoFile: "https://youtu.be/8h3OCbx7ln8",
    creater: {
      id: 11252,
      name: "Junhyuk",
      email: "hshine1226@gmail.com",
    },
  },
];

```

### Fake DB Import

그리고 위의 db를 가져오기 위해서 아래와 같이 import를 해주었다.

``` js
// controllers/videoController.js
import { videos } from "../db";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
```

### Fake DB 사용

db를 html에서 사용하기 위해서 컨트롤러에서 받아온 template variables를 받아와서 사용한다.

또한 each 문을 이용해서 리스트의 각각의 오브젝트들을 순회할 수 있다.

``` pug
// views/home.pug
extends layouts/main

block content
  .videos
    each video in videos
      h1= video.title
      p= video.description
```



## Upload Video In HTML

``` pug
// views/upload.pug
extends layouts/main

block content
    .form-container
        form(action=`/videos${routes.upload}`, method="post")
        label(for="file") Video File
        input(type="file", id='file', name='file')
        input(type="text", placeholder="Title", name="title")
        textarea(name="description", placeholder="Description" cols="30", rows="3")
        
        input(type="submit", value="Upload Video")

```

``` pug
// views/partials/header.pug
// ...
	.header__column
		ul
			if !user.isAuthenticated
				li
					a(href=routes.join) Join
				li
					a(href=routes.login) Log In
			else
				li
					a(href=`/videos${routes.upload}`) Upload
				li
					// local variable에서 받아온 user.id를 userDetail로 보내준다.
					a(href=routes.userDetail(user.id)) Profile
				li
					a(href=routes.logout) Log Out
```

### get, post 분리

``` js
// controllers/videoController.js
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};
```

비디오를 업로드 할 때는 그 비디오의 id가 존재할 것이다. 따라서 비디오 업로드를 할 시에 생성된 비디오 id를 videoDetail 페이지로 redirect해줄 것이다. 

일단 지금 postUpload Controller에서 보내주는 값은 가짜 데이터 값이다. 나중에는 진짜 데이터 값을 보낼 것이다. 



### Router 연결

``` js
// routers/videoRouter.js
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
```



## Search Video In HTML

``` js
// controllers/videoController.js
import { videos } from "../db";

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
```

위와 같이 videoController에서 template variable로 fakeDB에 있는 videos를 넘겨준다.

``` pug
// views/search.pug
extends layouts/main
include mixins/videoBlock

block content
  .search__header
    h3 Searching for: #{searchingBy}
  .search__videos
    each video in videos
      +videoBlock({
        title:video.title,
        views: video.views,
        videoFile: video.videoFile
      })
```

home화면과 마찬가지로 search.pub 파일에서는 미리 작성해둔 비디오를 보여주는 Mixin에 받아온 videos 데이터베이스의 정보를 넘겨준다.



## Join In HTML

### join controller 분리

join.pug 파일에서는 post 방식으로 form을 전송한다. 따라서 userController에서 기존의 join 컨트롤러를 getJoin, postJoin으로 분리해준다.

``` js
import routes from "../routes";

// join화면에 접근하면 render해주는 controller
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// join을 post 방식으로 받아올 때의 컨트롤러이다.
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  // 첫번째 암호와 두번째 암호가 같지 않다면 잘못된 요청이라는 의미의 400번의 status code를 보내준다.
  if (password !== password2) {
    res.status(400); // 잘못된 요청
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};
```

아래는 join.pug이다. 이 form은 post 방식으로 되어있다.

``` pug
// views/join.pug
extends layouts/main

block content
  .form-container 
    form(action=routes.join, method="post")
      input(type="text", name="name", placeholder="Full Name")
      input(type="email", name="email", placeholder="Email")
      input(type="password", name="password", placeholder="Password")
      input(type="password", name="password2", placeholder="Verified Password")
      input(type="submit", value="Join Now")
    include partials/socialLogin
```

### Controller route 연결

분리된 컨트롤러를 연결하기 위해서 globalRouter에서 routes를 연결해준다.

``` js
// routers/globalRouter.js
import {
  postJoin,
  getJoin,
  login,
  logout,
} from "../controllers/userController";

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
```

### BodyParser Middleware

만약 postJoin에서 `console.log(req.body)`를 통해 request의 body를 확인해보면, 회원가입을 할 때, 아래와 같이 req.body에서 받아온 정보들이 출력되게 된다.

``` shell
{
  name: '최준혁',
  email: 'hshine1226@gmail.com',
  password: 'Mz49SzK8ccWnyv@',
  password2: 'Mz49SzK8ccWnyv@'
}
```

이 정보들은 bodyparser라는 미들웨어를 통해 받아오는 것이다.

``` js
// app.js
import bodyParser from "body-parser";
// ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ...
```



## Login In HTML

로그인 역시  join과 마찬가지로 컨트롤러를 분리하면 된다.

### login controller 분리

``` js
// controllers/userController.js
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  // 로그인이 성공했다면 redirect해준다.
  // 나중에 DB가 연결되면 입력 비밀번호와 DB 비밀번호가 같은지 검사할 것이다..
  res.redirect(routes.home);
};
```

### Router 연결

``` js
// routers/globalRouter.js
import {
  postJoin,
  getJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController";

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
```



## Header 페이지에서 isAuthenticated 검사
일단 가짜 유저 정보를 만들어보자.

물론 나중에는 실제로 정보를 가져와서 사용할 것이지만, 일단은 미들웨어에 가짜로 변수를 만들어 둘 것이다. 

아래와 같이 middleware.js에서 local variable로 가짜 유저 정보를 만든다.

``` js
// middlewares.js
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  // ...
  // db 생기기 전까지 쓰일 가짜 정보 Local Variable
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
```
그리고 만든 가짜 유저 정보(Local Variable)를 통해서 isAuthenticated가 true일 때와, false일 때, Header에 표시되는 정보를 다르게 할 것이다.

``` pug
// views/partials/header.pug
.header__column
	ul
		// isAuthenticated가 false이면 join, login화면
		// true이면 upload, profile, logout을 리스트로 출력하게 한다.
		// middleware의 Local Variable을 사용해서 임시로 작업한다.
		if !user.isAuthenticated
			li
				a(href=routes.join) Join
			li
				a(href=routes.login) Log In
		else
			li
				a(href=routes.upload) Upload
			li
				// 미들웨어에서 설정한 user.id가 url에 들어가도록 한다.
				a(href=routes.userDetail(user.id)) Profile
			li
				a(href=routes.logout) Log Out
```

아래는 userDetail을 함수 형태로 바꾸는 것이다.

``` js
// routes.js
// ...

// Users
// ...
const USER_DETAIL = "/:id";

// Videos
// ...
const VIDEO_DETAIL = "/:id";


// Router Object
const routes = {
  // ...
  // userDetail: USER_DETAIL
  // 아래의 userDetail 함수는 id를 인자로 입력 받는다.
  // 그리고 만약 id가 있다면 `/users/${id}`를 반환한다.
  // id가 없다면 USER_DETAIL을 반환한다.
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  // videoDetail역시 id와 함께 바뀌어야 하기 때문에 아래와 같이 수정한다.
  videoDetail: (id) => {
    if (id) {
      return `/video/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },  
};

export default routes;

```

## Video Detail In HTML

``` pug
/views/mixins/videoBlock.pug
mixin videoBlock(video = {})
    .videoBlock
        a(href=routes.videoDetail(video.id))
            video.videoBlock__thumnail(src=video.videoFile, controls='true')
            h4.videoBlock__title=video.title
            h6.videoBlock__views=video.views
```

비디오를 클릭하면 VideoDetail 페이지로 이동하게 하기 위해서 videoBlock mixin에 a 태그를 추가했다. 그리고 videoDetail 함수의 인자로 id를 입력했다.

그리고 videoBlock을 사용하는 곳에서 인자를 입력할 때 id를 추가로 보내준다.

``` pug
/// views/home.pug
extends layouts/main
include mixins/videoBlock

block content
  .videos
    each video in videos
      +videoBlock({
        id: video.id,
        title:video.title,
        views: video.views,
        videoFile: video.videoFile
      })
```

그리고 videoRouter.js에서 videoDetail을 실행해준다. `routes.videoDetail()` 왜냐하면 videoDetail은 함수이기 때문이다.

``` js
import express from "express";
import routes from "../routes";
import {
  videoDetail,
    // ...  
} from "../controllers/videoController";
// ...
// videoDetail은 함수이기 때문에 실행해주어야 한다.
videoRouter.get(routes.videoDetail(), videoDetail);
// ...
export default videoRouter;

```



## Logout In HTML

로그아웃을 하면 로그아웃 처리를 하고 홈페이지로 Redirect하는 기능이다.

로그아웃 처리는 아직 구현하지 않는다.

``` js
// controllers/userController.js
import routes from "../routes";
// ...

export const logout = (req, res) => {
  // To do: Process Log Out
  res.redirect(routes.home);
};

// ...
```

