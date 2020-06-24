# API 사용하기

API(Application Programming Interface)로서 응용프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 말한다.

## API Route 생성

``` js
// routes.js

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";

// Router Object
const routes = {
  // ...
  api: API,
  registerView: REGISTER_VIEW,
};

export default routes;
```

만약 `localhost:4000/api/:id/view` 이 주소가 요청된다면 비디오의 view를 업데이트 해주는 api이다. 

이 API는 그저 server와 통신하기 위한 URL이다. 누군가가 접근하거나 이 url에 그 무엇도 렌더할 수 없다.

## api router 연결

``` js
// app.js
app.use(routes.api, apiRouter);
```

## registerView controller 생성

``` js
// controllers/videoController.js

// Register Video view
export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    // 성공적으로 저장을 한 후 상태코드 200을 보낸다.
    res.status(200);
  } catch (error) {
    // 에러가 있다면 상태코드 400을 보낸다.
    res.status(400);
    res.end();
  } finally {
    res.end();
  }
};

```

주소에서 받아온 id를 통해 비디오를 찾고, 그 비디오의 조회수를 1 증가해주는 컨트롤러이다.

## API Router 생성

``` js
// routers/apiRouter.js
import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter;
```

api url에 요청이 들어오면 postRegisterView Controller를 통해서 view를 증가시켜준다.

## 정리

> 정리해보자면 API는 다른 서비스와 통신하기 위해서 만드는 것이고,
>
> 어디서든 접근이 가능하다.
>
> 하지만 유저가 접근할 수는 없고, 서버측에서 통신하는 곳이다.