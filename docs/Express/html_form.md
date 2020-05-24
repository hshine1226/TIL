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

