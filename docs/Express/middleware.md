# [Express] Middleware 사용하기

Express에서 Middleware란 어떤 처리가 끝날 때까지 연결되어 있는 것이다.

브라우저가 웹사이트에 접속하려고 할 때 연결이 시작이 되는데, 연결이 시작되면 index파일을 실행하고, 우리의 Application이 routes가 존재하는지 확인하게 된다.

그후 route가 포함하는 함수를 실행하고 그 함수는 응답을 하게 된다.

하지만 보통의 웹사이트 연결에서의 흐름은 이렇게 간단하지 않다. 보통 중간에 어떠한 과정을 거치게 되는데 유저가 어떤 페이지를 요청했을 때 응답이 오기 전 그 사이에 존재하는 게 바로 Middleware이다. 

Express에서는 모든 함수가 middleware가 될 수 있다.

## Middleware function 생성

예를 들어 아래에서와 같이 `betweenHome`이라는 Middleware function을 생성해보자.

``` js
const betweenHome = (req, res, next) => {
  console.log("I'm betweenHome");
  // next라는 key를 이용해서 middleware를 호출한 후 다음 function으로 처리하게 하는 권한을 준다.
  next();
};

// 함수 내에서 middleware를 호출할 수 있다.
app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);
```

위의 betweenHome함수는 유저가 Route('/')을 요청하면 handleHome으로 응답하기 전에 실행되는 Middleware함수이다. 

위의 코드는 Middleware가 `/`Route내에서만 실행되기 때문에 `/profile` 경로에서는 Middleware가 실행되지 않는다. 

``` js
const betweenHome = (req, res, next) => {
  console.log("I'm middleware");
  next();
};

// 전역으로 middleware를 호출할 수 있다.
app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);
```

따라서 위의 코드와 같이 전역으로 Middleware를 호출해준다면 모든 Route에 접근하기 전에 Middleware를 호출할 것이다.

## Middleware의 역할

Middleware는 내가 원하는 만큼 가질 수 있다. 그리고 Middleware는 여러가지 역할을 한다.

예를들어, 유저의 로그인 여부 체크, 파일 전송 시 중간에서 가로채는 역할, 모든 접속에 대해서 로그를 작성하는 역할 등을 할 수 있다.