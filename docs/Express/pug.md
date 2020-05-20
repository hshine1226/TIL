# Pug

Nodejs express에서 사용하는 Template Engines은 굉장히 많다. 나는 그중에 가장 많이 사용하는 Pug를 사용할 것이다.  pug는 templates language로서 html을 더 아름답게 만들어준다.

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

## 문법

