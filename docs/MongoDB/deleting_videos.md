# Deleting a Video

비디오 삭제는 어떤 POST작업도 필요하지 않기 때문에, GET으로만 구성하면 된다.

## Routes

비디오 삭제 역시 id를 통해서 삭제를 할 것이기 때문에 아래와 같이 deleteVideo routes를 id를 parameter로 받는 함수로 변환시켜준다.

``` js
// routes.js

//...

const DELETE_VIDEO = "/:id/delete";

// Router Object
const routes = {
  // ...
  
  // id가 존재한다면 /videos/${id}/delete를 return하고,
  // 존재하지 않는다면, DELETE_VIDEO를 return한다.
  // deleteVideo는 string을 return하는 함수이다.
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
};

export default routes;
```

## Router

``` js
// routers/videoRouter.js

import express from "express";
import routes from "../routes";
import {
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// ...

// Delete Video
// routes의 deleteVideo는 함수이기 때문에 실행시켜줘야한다.
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

```

## Controller

``` js
// controllers/videoController.js

import routes from "../routes";
import Video from "../models/Video";

// ...

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
    
  try {
    // mongoose의 findOneAndRemove 쿼리를 이용해서 비디오를 삭제한다.
    await Video.findOneAndRemove({ _id: id });
  } catch (err) {}
    
  res.redirect(routes.home);

  res.render("deleteVideo", { pageTitle: "Delete Video" });
};

```

## Pug

editVideo 화면의 Delete Video 버튼의 링크를 `routes.deleteVideo(video.id)`로 지정해준다.

``` js
// views/editVideo.pug

// ...

// video object에서 id를 받아와서 deleteVideo routes로 전달해준다.
a.form-container__link.form-container__link--delete(href=routes.deleteVideo(video.id)) Delete Video
```



