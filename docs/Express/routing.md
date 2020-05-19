# [Express] 라우터 만들기

``` js
import express from "express";

// express.Router()를 통해서 user 라우터를 만들었다.
// export default와 다르게 export는 userRouter만 export하는 것이다.
export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
```

## named export

> 여러개 export 가능

``` js
// named export는 하나의 파일에서 여러 변수/클래스 등을 export 가능하다.
export const userRouter = express.Router();
export const videoRouter = express.Router();
export const passwordRouter = express.Router();
```

### import 방법

``` js
import { userRouter } from "./router";
```



## default export

> 하나의 파일 내에서 단 하나만 export 가능

``` js
// default export는 하나의 파일에서 단 하나의 파일만 export 가능하다.
export default app;
```

### import 방법

``` js
import app from "./app";
```

## 라우터 만들기

``` js
import express from "express"
// 라우터 생성
const userRouter = express.Router()

// home router
userRouter.get('/', (req, res) => res.send("User Index"))
// edit router
userRouter.get('/edit', (req, res) => res.send("User Edit"))
// password router
userRouter.get('/password', (req, res) => res.send("User Password"))
```

## 라우터 사용하기

```js
import { userRouter } from "./router";

app.use('/user', userRouter)
```



