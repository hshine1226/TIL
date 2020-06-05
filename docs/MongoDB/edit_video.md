# Video 수정

## Video를 ID를 통해 받아오기

### mongoose query를 이용해서 Video 변수 받아오기

Video를 클릭했을 때, Video의 ID를 받아와서 Video의 자세한 정보를 생성해보자.

`videoController.js`에 Video ID를 위한 Controller인 videoDetail을 수정해보자.

```js
//controllers/videoController.js
import routes from "../routes";
import Video from "../models/Video";

// ...

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

// ...
```

일단 아래와 같이 비디오의 ID를 받아와보자.

아래의 ID는 이름이 id일때만 성립한다. 왜냐하면 우리가 생성한 Route에 보면 `/:id`를 가지고 있기 때문이다.

`/:id`가 변수(Variable)이라는 것이다.

```js
const {
  params: { id },
} = req;
```

```js
// ...

// 만약 Controller에서 어떤 Data를 가지고 있다는 것을 표현하고 싶다면, 더블콜론(:)과 이름을 넣으면 된다.
// req.params으로 확인해봤을 때 아래에서 설정한 이름이 뜨는 것을 볼 수 있다.
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

export default routes;
```

그리고 await function을 사용하기 위해서 async를 먼저 사용하고, 에러가 나면 처리하기 위해서 try, catch 구문을 사용한다. 그리고 마지막으로 받아온 video 변수를 템플릿에 전달한다.

```js
// ...
  try {
    // findById를 통해서 Video를 받아올 것이다. parameter는 ID 이다.
    const video = await Video.findById(id);
    // 받아온 비디오 변수를 템플릿에 전달한다.
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

// ...
```

findById 이외의 다양한 Mongoose queries는 여기에서 확인할 수 있다 => [Mongoose Queries](https://mongoosejs.com/docs/queries.html)

### videoDetail의 템플릿 수정하기

유튜브의 재생 화면과 비슷하게 구현한다.

1. 비디오 재생 화면
2. 비디오 수정 버튼
3. 비디오 제목
4. 조회수
5. 비디오 설명

```pug
// views/videoDetail.pug
extends layouts/main

block content
    .video__player
        video(src=`/${video.fileUrl}`)
    .video__info
        a(href=routes.editVideo) Edit Video
        h5.video__title=video.title
        span.video__views=video.views
        p.video__description=video.description
```

여기서 video의 src를 적어줄 때, `` video(src=`/${video.fileUrl}`) ``과 같이 적어주어야 한다.

왜냐하면 이 파일은 서버에 있는 파일이기 때문이다.

나중에는 이 파일을 우리의 데이터베이스가 아닌 아마존에 맡길 것이다.

## Editing a Video

### routes 수정

id를 통해서 비디오의 Title, Description을 수정하기 위해서 routes의 `editVideo`를 id를 parameter로 받는 함수로 변경한다.

```js
// routes.js

// ...
const EDIT_VIDEO = "/:id/edit";
// ...
// Router Object
const routes = {
  // ...
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  // ...
};

export default routes;
```

### Video Router 업데이트

그리고 Router를 업데이트 해준다. 이제 `editVideo`는 String이 아니라 함수아기 때문에 `routes.editVideo()`와 같이 함수를 실행해야 한다. 이때 괄호 안에 id를 넣어서 함수를 호출하면 안된다. 왜냐하면 Express는 Parameter를 원하지 ID를 원하는 것이 아니기 때문이다.

```js
// routers/videoRouter.js

// ...

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

export default videoRouter;
```

### Video Update

다음으로는 `videoController.js`에서 비디오를 업데이트 해볼 것이다.

```js
// controllers/videoController.js
import routes from "../routes";
import Video from "../models/Video";

// ...

export const getEditVideo = async (req, res) => {
  // 어떤 비디오를 수정하는지 알기 위해서 video의 id를 받아온다.
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    // edit video 페이지의 title을 "`"Edit 비디오이름" 형식으로 나오게 하고, 찾은 video Object를 editVideo.pug전달한다.
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (err) {
    res.redirect(routes.home);
  }
};

// ...
```

일단 `editVideo`에서는 비디오 수정을 위해서 get, post가 필요하기 때문에 `getEditVideo`, `postEditVideo`로 분리해준다.

그리고 video를 수정할 때 어떤 비디오를 수정하는지를 알아야 하기 때문에 params에서 id를 받아온다.

edit video 화면에서 video title과 video description을 그냥 빈칸이 아닌 수정하기 전의 값으로 띄워주기 위해서, 아래와 같이 Controller에서 보낸 video object를 사용한다.

```pug
// views/editVideo.pug
extends layouts/main

block content
  .form-container
  	// action=`/videos${routes.editVideo}`에서 아래와 같이 수정했다.
  	// action=routes.editVideo(video.id)
    form(action=routes.editVideo(video.id), method="post")
      // input의 value 값을 지정해줌으로써 수정하기 전의 title을 띄워준다.
      input(type="text", placeholder="Title", name="title", value=video.title)
      // textarea는 value값이 없기 때문에 아래와 같이 description을 지정해준다.
      textarea(name="description", placeholder="Description")=video.description
      input(type="submit", value="Update Video")
    a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video
```

이렇게 getEditVideo를 마무리 했다.

이제 우리는 Video를 Edit하는 실질적인 부분을 해볼 것이다.

아래와 같이 try, catch 구문으로 error가 나면 home으로 redirect하게 해주고, [findOneAndUpatate](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)라는 Mongoose Query를 사용해서 비디오 정보를 업데이트 해줄 것이다.

`findOneAndUpdate( {_id: id}, { title, description } )`에서 첫번째 parameter는 conditions, 두 번째 Parameter는 update이다. 즉 첫번째 parameter에 어떤 조건으로 찾을지를 정하고, 그 찾은 값에서 어떤 것을 업데이트 할지 두번째 parameter에 적어주면 된다.

여기서 첫번째 parameter에 `_id`와 같이 적은 이유는 Video 모델의 Element를 console.log했을 때 id는 \_id로 적혀있기 때문이다.

```js
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (err) {
    res.redirect(routes.home);
  }
```
