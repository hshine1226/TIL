# Variables in Pug

템플릿에 정보를 추가해 볼 것이다.

## 템플릿 전체에 정보를 추가하는 방법(Local Variables)

- 헤더가 라우트 객체에 접근하도록 한다.
  - locals 미들웨어를 사용해야한다. 

### locals 미들웨어

local 변수를 global 변수로 사용하도록 만들어주는 미들웨어이다.

locals를 통해서 템플릿, 컨트롤러 등 어디에서든 변수를 쓸 수 있다.

Local Variables을 선언하는 방법은 다음과 같다.

`res.locals.원하는이름` 

예시: `res.locals.siteName = "WeTube"`

```  js
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube";
  res.locals.routes = routes;
  // 다음 함수로 넘어가기 위해서는 미들웨어가 next에 request를 전달해야한다.
  next();
};
```

### 추가한 locals variables 사용하기

`#{locals이름}`

``` pug
// main.pug
doctype html
html
    head
        script(src="https://kit.fontawesome.com/142b9259dc.js", crossorigin="anonymous")
        title #{siteName}
    body
        include ../partials/header
        main
            block content
        include ../partials/footer
```



## 한 템플릿에만 변수를 추가하는 방법(Template Variables)

템플릿마다 다른 정보를 가질 수도 있기 때문에 한 템플릿마다 변수를 추가할 수도 있어야한다.

title에 각각의 템플릿의 `pageTitle`이 들어오게 해보자. 예를들어 Youtube Home과 같이 표시되는 형식

``` pug
doctype html
html
  head
    script(src="https://kit.fontawesome.com/142b9259dc.js", crossorigin="anonymous")
    title #{pageTitle} #{siteName}
  body
    include ../partials/header
    main
      block content
    include ../partials/footer
```

아래와 같이 render함수의 인자값으로 첫번째는 템플릿, 두번째는 템플릿에 추가할 정보가 담긴 객체를 적어줄 수 있다.

각각의 템플릿마다 `pageTitle`을 적어주자.

``` js
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const serach = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

```

다 적용후 각 페이지마다 확인을 해보면 변수 값이 잘 적용된 것을 볼 수 있다.

그리고 또한 아래의 코드와 같이 템플릿 객체를 추가로 더 적어줄 수도 있다.

``` js
export const home = (req, res) => res.render("home", { pageTitle: "Home", potato: 12345 });
```

