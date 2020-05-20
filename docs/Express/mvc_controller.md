## [MVC] Controller

globalRouter에서 routes를 보게되면 join, login, logout은 user와 관련된 routes이다. 따라서 별도의 userController 파일을 만들어서 control을 해준다.

### Controller 만들기

``` js
// controllers/userController.js
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const changPassword = (req, res) => res.send("Change Password");
export const editProfile = (req, res) => res.send("Edit Profile");

```

globalRouter에서 home, search는 비디오와 관련된 route들이다. 따라서 videoController 파일에서 별도로 control을 관리하게 한다.

``` js
// controllers/videoController.js
export const home = (req, res) => res.send("Home");
export const serach = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");

```

### Controller 사용하기(모든 routers 같은 방식으로)

``` js
// routers/globalRouter.js
import express from "express";
import routes from "../routes";
// controller에서 export한 contoller들을 불러온다.
import { home, serach } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

// globalRouter.get에서 function 대신에 import한 controllers를 사용한다.
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;

```

