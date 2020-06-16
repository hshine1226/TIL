# Video 업로드와 생성

## Middleware

middleware에 video upload 주소를 `video`에서 `uploads/videos`로 바꾼다.

``` js
// middlewares.js

*-
		 
import multer from "multer";
import routes from "./routes";

// multer를 이용해서 file 저장 주소 지정
const multerVideo = multer({ dest: "uploads/videos/" });
// ...
```

여기서 중요한 점은 주소를 작성할 때 `/uploads/videos/`가 아닌 `uploads/videos/`와 같이 작성해야 한다.

왜냐하면 `/uploads/videos/`와 같이 작성한다면 파일 저장 위치가 컴퓨터의 root에 upload를 만들기 때문이다.

따라서 Project에 있는 directory라고 지정하기 위해서는 `uploads/videos`와 같이 주소를 작성해야한다.

## mongoDB 명령어

MongoDB Model이 하나의 Document를 Database에 저장했고, 이 Document는 잘못된 URL을 가지고 있다. 그래서 우리는 MongoDB에서 어떻게 다룰 수 있는지 볼 것이다.

일단 MongoDB에 저장된 비디오를 삭제하는 방법을 살펴보자.

1. `show dbs`를 통해서 mongoDB에 존재하는 Database를 확인한다. 
2. `use db_name`을 통해서 수정할 Database를 선택한다.
3. `show collections`를 통해서 존재하는 모델을 확인한다.
4. `db.collection.remove({})`를 통해서 해당 모델에 존재하는 데이터를 모두 삭제한다.

``` shell
mongo
> show dbs
admin          0.000GB
config         0.000GB
local          0.000GB
youtube-clone  0.000GB
> use youtube-clone
switched to db youtube-clone
> show collections
videos
> db.videos.remove({})
WriteResult({ "nRemoved" : 3 })
```

## Routes 생성

이제 Route를 만들어야한다. Express에서는 모든 것에 대한 Route가 있다. 그래서 uploads를 위한 Route도 역시 필요하다.

아래의 Middleware는 만약 누군가가 `/uploads`로 간다면 `express.static()`을 이용해서 directory에서 파일을 보내주게 할 것이다.

``` js
// app.js
import express from "express";
//...

const app = express();
// ...
// Directory에서 File을 보내주는 Middleware이다.
// 따라서 Controller나 View 같은것을 확인하지 않을 것이다. 오로지 File만 체크!
app.use("/uploads", express.static("uploads"));

// ...

export default app;

```

사실 비디오 파일을 업로는 하는 것은 static file이 아니다. Static file은 주로 Front-end에서 쓰이는 JavaScript나 CSS 로고 파일을 의미한다. 

이렇게 서버에 비디오 파일을 올리는 것은 좋은 방법이 아니다. 이런 식의 파일을 가지고 있다면 어떤 유저가 만약 엄청나게 큰 파일을 업로드 할 때, 우리의 서버가 Block 당할 수도 있다. 따라서 이런 방식으로 파일을 다루는 것은 문제가 너무 많다.

그래서 다음 단계에서는 이 파일들을 통해 어떻게 multer를 사용하는지, 이 파일들을 Amazon Cloud에 어떻게 업로드 하고 어떻게 URL을 받아오는지 알아볼 것이다. 

## Video와 Comment에 Creator 추가하기

``` js
// models/Video.js

import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  // Comment 모델의 Object 아이디를 통해 comments 스키마를 추가한다.
  comments: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
      }
  ],
  // User 모델의 Object 아이디를 통해 creator 스키마를 추가한다.
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Video", VideoSchema);
export default model;

```

``` js
// models/Comment.js

import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  // User 모델의 Object 아이디를 통해 creator 스키마를 추가한다.
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;

```

``` js
// models/User.js

import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  // Video 모델의 Object 아이디를 통해 videos 스키마를 추가한다.
  // video는 여러개가 추가될 수 있기 때문에 배열로 추가한다.
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  // Comment 모델의 Object 아이디를 통해 comments 스키마를 추가한다.
  // comment도 여러개가 달릴 수 있기 때문에 배열로서 추가한다.
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", userSchema);

export default model;

```

### videoController.js

``` js
// controllers/videoController.js
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    // 새로운 비디오를 만들 때, creator를 추가한다.
    creator: req.user.id,
  });
  // user가 가지고 있는 비디오 리스트에 새로 만든 비디오의 id를 추가하고 저장한다.
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};
```

### videoDetail.pug

``` js
// views/videoDetail.pug

extends layouts/main

block content
    .video-detail__container
        .video__player
            video(src=`/${video.fileUrl}` controls)
        .video__info
			// video creator의 id와 현재 로그인한 유저의 id가 같다면 비디오 수정 버튼을 추가한다.
            if video.creator.id === loggedUser.id
                a(href=routes.editVideo(video.id))
                    button Edit video
            h5.video__title=video.title
            p.video__description=video.description
            if video.views === 1
                span.video__views 1 view
            else 
                span.video__views #{video.views} views
            .video__author 
            	// 비디오 생성자 이름을 추가한다.
                |Uploaded by 
                a(href=routes.userDetail(video.creator.id))=video.creator.name
        .video__comments
            if video.comments.length === 1
                span.video__comment-number 1 comment
            else
                span.video__comment-number #{video.comments.length} comments
```

