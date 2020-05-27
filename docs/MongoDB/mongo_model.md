# Model 만들기

Mongoose의 모든 것들은 Schema와 함께 시작한다.

모든 Schema는 MongoDB collection에 매칭된다.

일단 Model을 만들기에 앞서서 루트 디렉토리에 models라는 폴더를 만들어주자. 

[Mongoose Docs](https://mongoosejs.com/docs/guide.html)에서 모든 option들을 확인할 수 있다.

## Video Model

Video Model을 만들기 위해서 models 폴더에 `Video.js`파일을 생성한다. 파일 이름은 대문자로!

``` js
// models/Video.js
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  // Video 파일 자체를 DB에 저장하면 너무 무거워지기 때문에 url 주소를 대체해서 넣어줄 것이다.
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  // String은 {type: String}을 줄인 것이다.
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model의 이름은 Video이고 Schema는 VideoShema이다.
const model = mongoose.model("Video", VideoSchema);
export default model;

```

### Schema 정의하기

일단 모델을 만들기 위해서 Schema를 정의한다. Model은 실제 Data이고 Schema는 형태이다.

일단 Schema를 정의하자. 위의 코드를 참고하자.

### Model 만들기

Schema를 정의했다면 이 Schema를 이용해서 model을 만들 수 있다.

아래와 같은 방법으로 모델을 생성할 수 있다.

``` js
const model = mongoose.model(modelName, schema);
```

### Model Import

``` js
// init.js
// ...
import Video from "./models/Video";
// ...
```

모델을 생성했다면 위와 같이 생성한 모델을 불러올 수 있다.

## Comment Model

``` js
// models/Comment.js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }, 
});

const model = mongoose.model("Comment", CommentSchema);

export default model;

```

Comment Model은 위와 같이 생성한다.

## Video와 Comment 연관시키기

하지만 Comment와 Video Model 간에는 어떠한 관계가 형성되어 있다. 

한쪽에서는 Video를 생성하고 다른 한쪽에서는 Comment를 생성했을 때, 이 둘을 연관시키는 것을 해결해보자.

내가 원하는 작업은 다음과 같다.

만약 새로운 Video가 생성되면, 처음에는 Comments가 0이다. 왜냐하면 아직 아무도 Comment를 달지 않았기 때문이다. 

하지만 누군가가 Comment를 생성하면 그 Comment ID를 Video에 있는 comment의 list에 저장하고 싶다.

모든 Object들은 ID를 가지고 있다. 

따라서 모든 정보를 저장하는 대신 아래와 같은 방법으로 ID만을 저장시키면 된다.

아래의 두가지 해결 방안을 살펴보자.

1. Comment에 Video의 ID를 저장하기.
2. Video에 모든 Comment ID를 가지는 Array 추가하기.

### 방법1. Comment에 Video ID 저장하기

일단 첫번째 방법을 보자. Comment에 Video의 ID를 저장하는 방법이다.

```js
// models/Comment.js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  // ...
  video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
  }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;

```

`type: mongoose.Schema.Types.ObjectId`를 통해서 type을 Object의 ID로 지정해주고,

`ref: "Video"`를 통해서 Video Model에서 온 것이라고 알려준다.

### 방법2. Video에  모든 Comment ID를 Array로 저장하기

Video에 모든 Comment의 ID를 가지는 Array를 추가하는 두번째 방법이다.

``` js
// models/Video.js
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  // ...
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;

```

위와 같이 두가지의 방법이 있다.

나는 이중 모든 Comment ID들을 Array형태로 Video에 집어 넣는 두 번째 방법을 선택할 것이다.



## Model 사용하기

``` js
// controllers/videoController.js
import routes from "../routes";
// 모델을 import한다.
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    // 모든 Video Element(Database)를 받아온다.
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    // 에러가 발생하면 videos는 빈 array를 넘겨주도록 한다.
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// ...
```

### Model 사용하기

Model을 사용하려면 일단 Controller에서 해당 Model을 import 해줘야한다.

`import Video from "../models/Video"`에서 Video는 Database의 Element가 아니라 단지 Model이다. 즉, Element를 받는 통로일 뿐이다. 

Element를 받기 위해서는 아래와 같이 find를 사용해야한다. 아래의 코드는 Database에 있는 모든 Video를 가져오는 코드이다.

`const videos = Video.find({})`

### async, await

그런데 그 전에 일단 함수에 `async`라는 것을 추가할 것이다. 이것은 함수 내에서 어떤 작업을 기다려주는 것이다. JavaScript는 `async`를 사용하지 않으면 자동으로 그 작업을 기다려주지 않는다.  

우리는 Video model에서 Element를 받아올 때 까지 기다려주기를 원한다. 따라서 위의 코드와 같이 `async`와 `await`를 사용한다. 

함수에서 `async`라는 키워드를 추가하고, 함수 내부에서  기다리기를 원하는 곳에 `await`를 적어준다면 그 작업이 끝날 때까지 기다리게 된다.

### try, catch

그리고 에러가 생겼을 때의 처리를 위해서 try, catch 구문을 사용할 것이다. 이것은 발생할 수 있는 모든 Error를 잡기위해서 사용하는 것이다.

try에는 우리가 해야할 것들을 적고, catch에는 error가 발생했을 때 해야할 것을 적는다.

## Uploading and Creating a Video

### video 파일만 업로드하기

일단은 Video이외의 파일은 받지 않게 하기 위해서 아래와 같이 코드를 작성한다.

form의 input에 accept를 추가한다.

`accept="video/*"` 확장자가 video인 모든 파일을 accept한다는 의미이다.

``` pug
// views/upload.pug
extends layouts/main

block content
    .form-container
        // multer를 사용하기 위해서 enctype에 multipart/form-data를 추가한다.
        form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data")
            label(for="file") Video File
            // Video 파일만 선택하도록 accept="video/*"을 추가한다.
            input(type="file", id='file', name='videoFile', required=true, accept="video/*")
```

이렇게 해주면 Video file이 아닌 것은 선택이 불가능하다.

### multer 미들웨어를 통해서 URL 반환받기

그리고 File을 업로드하면 URL을 반환하는 Middleware가 필요하다.

이것을 위해서는 [Multer](https://github.com/expressjs/multer)라는 Middleware를 사용하면 된다.

설치방법은 다음과 같다.

``` shell
npm install --save multer
```

설치후 사용하기 위해서는 form에 `enctype="mulipart/form-data"`를 추가해주어야 한다.

왜냐하면 우리는 file을 보내는 것이기 때문에 form의 encoding이 달라야하기 때문이다. 



그리고 multer middleware를 만들어보자.

``` js
// middlewares.js
import multer from "multer";

// ...
const multerVideo = multer({ dest: "videos/" });

export const uploadVideo = multerVideo.single("videoFile");
```

multer를 사용하기 위해서 일단 multer를 import해준 뒤 사용하면 된다.

`multer({dest: 파일저장주소})`

dest에는 파일이 저장되길 원하는 주소를 적어주면 된다.

`.single(fieldname)`은 오직 하나의 파일만 upload할 수 있는 것을 의미한다.

fieldname은 upload하는 파일의 name과 같아야 한다.

아래의 코드에서 form의 input 필드에 type이 file인 라인의 name의 이름과 같아야한다.

``` pug
// views/upload.pug
extends layouts/main

block content
    .form-container
        // multer를 사용하기 위해서 enctype에 multipart/form-data를 추가한다.
        form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data")
            label(for="file") Video File
            // Video 파일만 선택하도록 accept="video/*"을 추가한다.
            input(type="file", id='file', name='videoFile', required=true, accept="video/*")
            input(type="text", placeholder="Title", name="title", required=true)
            textarea(name="description", placeholder="Description" cols="30", rows="3", required=true)
            input(type="submit", value="Upload Video")

```



그리고 router로 가서 아래와 같이 uploadVideo를 추가한다.

``` js
// routers/videoRouter.js
// ...

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
// ,,,

videoRouter.post(routes.upload, uploadVideo, postUpload);

// ...
```



이렇게 해주면 우리 서버에 있는 폴더(videos/)에 업로드 되고, postUpload는 해당 파일에 URL 방식으로 접근할 것이다.

### Video Model을 생성하고 multer을 통해 받아온 path를 전달하기

다음의 코드는 Video모델을 만드는 코드이다.

multer는 req.file에서 정보들을 확인할 수 있다.

아래의 코드는 req.file에서 path를 가져오는 코드이다.

``` js
// controllers/videoController.js
import routes from "../routes";
import Video from "../models/Video";
// ...

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};
// ...
```

위와같이 multer를 이용해서 video 파일의 path를 가져올 수 있고, 그것을 video model에 저장해서 모델의 id를 redirect 해줄 수 있다.

multer는 자동적으로 파일의 이름을 바꾸고 확장자를 없애서 videos폴더에 저장한다.

그리고 그 파일의 경로를 request를 통해서 받을 수 있다.



NodeJS, Multer, MongoDB를 이용해서 file을 생성, 저장했다.!!!