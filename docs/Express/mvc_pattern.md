# MVC(Model, View, Controller) 패턴이란?

## MVC란

MVC는 Model, View, Controller의 약자이다. 하나의 애플리케이션(프로젝트)를 구성할 때, 그 구성요소를 세가지의 역할로 구분한 패턴이다.

사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달한다.

## Model(모델)

- 애플리케이션의 정보, 데이터를 나타낸다. 
- 데이터베이스, 처음에 정의하는 상수, 초기화값, 변수 등을 뜻한다.\
- 이러한 데이터, 정보들의 가공을 책임지는 컴포넌트이다.

### Model(모델)의 규칙

1. 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다.
2. View나 Controller에 대해 어떠한 정보도 알면 안된다.
3. 변경이 일어나면 변경통지에 대한 처리 방법을 구현해야만 한다.

## View(뷰)

- input text, check box 등과 같은 사용자 인터페이스 요소
- 데이터 및 객체의 입력과 보여지는 출력을 담당한다.
- 데이터를 기반으로 사용자가 볼 수 있는 화면이다.

### View(뷰)의 규칙

1. 모델이 가지고 있는 정보를 따로 저장해서는 안된다.
2. 모델이나 컨트롤러와 같이 다른 구성요소들을 알면 안된다.
3. 변경이 일어나면 변경통지에 대한 처리 방법을 구현해야한다.

## Controller

- 데이터와 사용자 인터페이스 요소들을 이어주는 다리 역할
- 사용자가 데이터를 클릭하고 수정하는 것에 대한 이벤트를 처리한다.

### Controller(컨트롤러)의 규칙

1. **모델이나 뷰에 대해서 알고있어야 한다.**
2. 모델이나 뷰의 변경을 모니터링 해야한다.

## 왜 MVC 패턴을 사용하는가?

애플리케이션에서 각자의 역할만을 담당해서 처리를 하면 효율적이다. 

서로 분리되어 각자의 역할에 집중할 수 있게 개발을 한다면, 유지보수성, 애플리케이션 확장성, 유연성이 증가하고, 또한 중복 코딩이라는 문제점도 사라진다.

## MVC 패턴을 기반으로 routes 분리

``` js
// routes.js 라우터들의 경로를 저장하는 분리된 파일
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
// express는 똑똑하기 때문에 변경되는 주소는 아래와 같이 콜론(:)을 이용해서 선언해준다.
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Router Object를 아래와 같이 또 다시 한 번 분리해줌으로서 
// 실수할 확률을 줄여준다.
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

// routes를 default로 export 해준다.
export default routes;
```

아래와 같이 각각의 라우터에서 route를 설정해준다.

모든 라우터들(globalRouter, userRouter, videoRouter 등...)에서 동일한 방법으로 설정한다.

``` js
// routers/globalRouter.js
import express from "express";
// routes를 설정해둔 routes 파일에서 routes를 불러온다.
import routes from "../routes";

const globalRouter = express.Router();

// globalRouter.get에서 path를 설정해준다. 
// path는 불러온 routes에서 routes object에서 불러온다.
globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.search, (req,res) => res.send("Search"));
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req, res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout"));

export default globalRouter;
```
