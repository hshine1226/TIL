# Video 검색

## Controller

Regular Expression을 이용해서 대소문자를 구분하지 않는 조건으로 검색을 한다.

`Video.find`를 통해서 검색을 수행할 수 있다. 

``` js
// controllers/videoController.js

// ... 

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // 빈 배열의 videos, 어떤 video도 찾지 못한다면 빈 배열로 render 되고,
  // video를 찾는다면 videos가 render된다. 
  // reassign하기 때문에 const 대신 let을 쓴다.
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (err) {
    console.log(err);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// ...
```



## Layout

``` pug
// views/search.pug

extends layouts/main
include mixins/videoBlock

block content
  .search__header
    h3 Searching for: #{searchingBy}
  .search__videos
    if videos.length === 0
      h5 No Videos Found
    each video in videos
      +videoBlock({
        title:video.title,
        views: video.views,
        videoFile: video.videoFile,
        // mixin으로 video.id를 넘겨준다.
        id: video.id
      })
```

``` pug
// views/videoDetail.pug

extends layouts/main

block content
    .video__player 
        video(src=`/${video.fileUrl}`)
    .video__info    
        a(href=routes.editVideo(video.id)) Edit Video
        h5.video__title=video.title
        span.video__views=video.views
        p.video__description=video.description
    .video__comments
    	// comments의 길이가 1이면 comment라고 표시하고,
    	// comments의 길이가 1이 아니라면 comments라고 표시한다.
        if video.comments.length === 1
            span.video__comment-number 1 comment
        else
            span.video__comment-number #{video.comments.length} comments

```



## 추가

추가로 댓글 기능은 Ajax, Vanilla JavaScript로 만들 것이다. 

왜냐하면 비디오를 추가할 때마다 form의 형태로 Back-end에 보내는데, 그럴 때마다 새로고침이 된다. 

하지만 우리는 추후에 댓글을 작성하면 API로 댓글을 보내서 새로고침 없이 댓글이 표시되게 할 것이다.