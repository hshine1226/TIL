# API 사용하기

API(Application Programming Interface)로서 응용프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 말한다.

## register API

### API Routes 생성

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

### API Router 연결

``` js
// app.js
app.use(routes.api, apiRouter);
```

### Controller 생성

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

### API Router 생성

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

### Client-side(Front-end)에서 API 접근하기

``` js
// assets/js/videoPlayer.js

// registerView 함수 생성
const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];

  fetch(`/api/${videoId}/view`, { method: "POST" });
};

function handleEnded() {
  // 비디오가 끝나면 view를 하나 증가시킨다.
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = "<i class='fas fa-play'></i>";
}
```

front-end에서 해당 페이지의 video id를 받아오기 위해서 `window.location.href`을 통해서 주소 정보를 받아왔다. 그리고 split 메서드를 사용해서 video id 부분만 잘라서 받아왔다.

`fetch` api를 통해서 해당 api 주소에 대한 요청을 해서 위에서 생성한 API를 사용하도록 해준다.

## Comment API

### API Routes 생성

``` js
// routes.js

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
};

export default routes;
```

### Controller 생성

``` js
// controllers/videoController.js

// Add Comment
export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;

  try {
    // id를 통해 비디오를 찾는다.
    const video = await Video.findById(id);
    // 비디오에 대한 Comment를 생성한다.
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    // 생성한 Comment를 video에 넣어준다.
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

```

### API Router 생성

``` js
// routers/apiRouter.js

import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
```

### videoDetail Controller 수정

``` js
// controllers/videoController.js
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments "); // comments역시 populate해준다.
    console.log(video);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    res.redirect(routes.home);
  }
};
```



### Client-side(Front-end)에서 API 접근하기(using axios)

``` js
// assets/js/addComment.js

import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};
function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}

```

### Front-end

``` pug
// views/videoDetail.pug

extends layouts/main
include mixins/videoPlayer

block content
	// ...  
        .video__comments
            if video.comments.length === 1
                span.video__comment-number 1 comment
            else
                span.video__comment-number #{video.comments.length} comments
            form.add__comment#jsAddComment
                input(type="text", placeholder="Add a comment")
            ul.video__comments-list
                each comment in video.comments
                    li
                        span=comment.text
```

### Increase comment number

``` js
// assets/js/addComment.js
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};
const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};
```

``` js
// views/videoDetail.pug

extends layouts/main
include mixins/videoPlayer

block content
    // ...
        .video__comments
            if video.comments.length === 1
                span.video__comment-number
                    span#jsCommentNumber 1
                    |  comment
            else
                span.video__comment-number
                    span#jsCommentNumber=video.comments.length
                    |  comments
            form.add__comment#jsAddComment
                input(type="text", placeholder="Add a comment")
            ul.video__comments-list#jsCommentList
                each comment in video.comments.reverse()
                    li
                        span=comment.text
```



