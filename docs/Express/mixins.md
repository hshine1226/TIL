# Mixins를 이용해서 HTML 코드 재활용하기

웹사이트에서 계속 반복되는 코드를 복사-붙여넣기 하지 않고 재활용하는 방법을 Mixin이라고 한다.

HTML을 재활용한다. 비디오 블록 html 코드를 만들어보자.

## Mixin 생성하기

일단 `mixins`라는 새 폴더를 views 폴더에 만들어준다. 그리고 Mixin을 작성할 `videoBlock.pug`파일을 생성한다.

여기부터 기존 재활용 코드와는 조금 다르다.

``` pug
mixin videoBlock(video = {})
    .videoBlock
        video.videoBlock__thumnail(src=video.videoFile, controls='true')
        h4.videoBlock__title=video.title
        h6.videoBlock__views=video.views
```

Mixin을 선언하려면 아래와 같이 선언 가능하다.

`mixin 믹신이름(인자 = 기본값)`

Mixin은 pug 함수의 일종으로 인자가 하나 필요하다. 위의 코드에서는 인자의 이름을 `video`라고 정하고 기본값으로 빈객체를 지정해줬다.

여기서 지정해준 인자로 Mixin이 객체를 받아 올 수 있다.

각각 다른 정보를 가지지만 같은 구조를 가지는 데이터를 표시하기 위해 코드를 캡슐화 하는 것이 Mixin을 사용하는 이유이다.(다른 정보, 같은 구조)

만약 Mixin을 사용하지 않는다면 사이드바와 같이 다른 곳에서도 똑같은 구조로 사용하는 것들은 모두 복사-붙여넣기를 해야할 것이다. 하지만 Mixin으로 다른 정보를 가지지만 같은 구조를 같는 코드를 재활용 할 수 있다.



## Mixin 사용하기

``` pug
extends layouts/main
include mixins/videoBlock

block content
  .videos
    each video in videos
      +videoBlock({
        title:video.title,
        views: video.views,
        videoFile: video.videoFile
      })
```

생성한 Mixin을 사용하기 위해서는 일단 Mixin이 선언된 파일을 include해야한다.

다음의 코드는 mixins폴더의 videoBlock파일을 include하는 것이다.  

`include mixins/videoBlock`

그리고 pug 파일 내에서 `+`기호를 이용해 mixin을 불러올 수 있다.

만약 mixin에서 선언한 객체의 값으로 title을 보내고 싶다면 위의 코드와 같이 `title: video.title`이라고 작성해주면 된다.