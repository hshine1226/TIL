# Join: Log In HTML

## Join & Login 화면 form

``` pug
// views/join.pug
extends layouts/main

block content
	.form__container 
    	form(action="/login", method="post")
          input(type="text", name="name", placeholder="Full Name")
          input(type="email", name="email", placeholder="Email")
          input(type="password", name="password", placeholder="Password")
          input(type="password", name="password2", placeholder="Verified Password")
          input(type="submit", value="Join Now")
	include partials/socialLogin
```

Join 화면은 form 태그를 이용해서 이름, 이메일, 비밀번호, 비밀번호 확인, 가입하기 버튼을 만들었다.

``` pug
// views/login.pug
extends layouts/main

block content
	.form__container 
    	form(action="/login", method="post")
          input(type="email", name="email", placeholder="Email")
          input(type="password", name="password", placeholder="Password")
          input(type="submit", value="Log In")
	include partials/socialLogin
```

Login 화면은 form 태그를 이용해서 이메일, 비밀번호, 로그인하기 버튼을 만들었다.

form을 추가할 때 method가 get이면 모든 정보가 url에 보이게 된다.

Join, Login은 정보를 비밀로 유지해야 하기 때문에 method를 post로 한다.

## Social login Parcial

``` pug
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