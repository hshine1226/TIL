# Pug

Nodejs express에서 사용하는 Template Engines은 굉장히 많다. 나는 그중에 가장 많이 사용하는 Pug를 사용할 것이다.  pug는 templates language로서 html을 더 아름답게 만들어준다. Html과 CSS는 논리적인 작업을 할 수가 없다. 하지만 pug로 작업을 한다면 html을 생성하는데 javaScript의 위력을 사용할 수 있다.

## 설치법

``` shell
npm install pug
```

## 사용법

### view engine 설정

Express가 Template Engine을 Rendering 하려면 다음과 같은 설정이 필요하다.

``` js
// view engine의 설정을 바꾼다. 기본값은 undefined이다.
// view engine의 설정을 pug로 사용하겠다는 세팅
app.set('view engine', 'pug');
// 만약 기본 views 폴더의 위치를 바꾸고 싶다면 아래와 같이 설정한다.
// views 설정으로 다음의 경로를 지정하면 된다.
app.set('views', './views')
```

### views 폴더 생성 및 pug 파일 생성

Html 파일을 저장해야하는 폴더의 기본 값은 루트 경로의 /views이다.

따라서 views라는 새로운 폴더를 생성하고 그곳에 pug templates(=html)을 생성한다.

파일 확장자는 html 대신에 pug로 하면 된다 예를 들어서 `home.pug`와 같이 생성한다.

### 템플릿 사용하기

생성한 템플릿을 사용하기 위해서는 아래와 같이 render를 통해서 템플릿 파일 명을 불러와주면 된다.

``` js
export const home = (req, res) => res.render("home");
export const serach = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");
```

### layout 만들기

views 폴더 아래에 layouts라는 이름으로 새 폴더를 만들고(폴더명은 상관 없다.) 그곳에 layout 파일들을 만들 것이다.

``` HTML
doctype html
html
    head
        title | Youtube Clone |
    body
        header  
            h1 YouTube
        main
            block content
        footer
            span &copy; YouTube
```

### layout 확장(extension)하기

``` html
// views/home.pug
// extends를 통해서 layouts에 있는 main을 확장한다.(복사 붙여넣기와 같은 기능이다.
extends layouts/main

// content라는 name을 가진 block에 p 태그를 추가한다.
block content 
    p Hello on Pug!
```



## 문법

Pug는 들여쓰기를 통해서 단락을 구분한다.

block은 name을 가지고 있다. 아래에서는 block의 name을 content로 지정했다.

``` html
block content
```

