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

한쪽에서는 Video를 생성하고 다른 한쪽에서는 Comment를 생성했을 때, 이 둘을 연관시키는 것을 보자.

이를 해결하는 방법은 두가지 경우가 있다.

1. Comment에 Video의 ID를 저장하기.
2. Video에 모든 Comment ID를 가지는 Array 추가하기.

모든 Object들은 ID를 가지고 있다. 

따라서 모든 Comment의 정보를 저장하는 대신 Video가 Comment의 ID를 가지고 있게 하면 된다.

내가 원하는 작업은 다음과 같다.

만약 새로운 Video가 생성되면, 처음에는 Comments가 0이다. 왜냐하면 아직 아무도 Comment를 달지 않았기 때문이다. 

하지만 누군가가 Comment를 생성하면 그 Comment ID를 Video에 있는 comment의 list에 저장하고 싶다.

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