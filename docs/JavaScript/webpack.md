# 웹팩(Webpack)

웹 서비스 개발에서 JavaScript로 작성하는 코드의 양이 늘어나면서 코드의 유지보수가 쉽도록 코드를 모듈로 나누어 관리하는 모듈 시스템이 필요해졌다. 

그러나 JavaScript 언어 자체가 지원하는 모듈 시스템이 없다. 따라서 이런 한계를 극복하기 위해 웹팩(Webpack)이라는 도구를 활용한다.

웹팩(Webpack)은 오픈 소스 JavaScript 모듈 번들러이다. 주로 JavaScript를 위한 모듈 번들러 이지만 호환 플러그인을 포함하는 경우 HTML, CSS, 심지어는 이미지와 같은 프론트엔드 자산들을 변환할 수 있다.

웹팩은 의존성이 있는 모듈을 취하여 해당 모듈을 대표하는 정적 자산들을 생성한다.

웹팩은 의존성을 취한 다음 의존성 그래프를 만듦으로서 웹 개발자들이 웹 애플리케이션 개발 목적을 위해 모듈 방식의 접근을 사용할 수 있게 도와준다. 

명령줄을 통해서 사용 가능하며, `webpack.config.js`라는 이름의 구성 파일을 사용하여 구성할 수 있다. 이 파일을 사용하면 프로젝트를 위해 로더, 플러그인 등을 정의할 수 있다. 

웹팩 설치에는 Node.js가 요구된다.

webpack은 모듈 번들러이다. 우리가 많은 파일들을 가져와서 webpack에게 넘겨주면, webpack은 그것들을 완전히 호환 가능한 static 파일로 변환하는 기능을 한다.

예를들면 우리는 지금 ES6 JavaScript와 Sass를 사용한다. 그리고 우리는 이것들을 webpack안에 집어넣을거고, 그것들을 webpack이 일반적인 css와 nomal JavaScript로 변환해서 브라우저가 알아들을 수 있도록 해줄 것이다.

## 웹팩(Webpack) 사용 방법

webpack은 Node.js가 설치된 환경에서 실행된다. Node.js를 사용하는 환경에서 webpack을 설치하고 모듈을 컴파일 하는 방법은 다음과 같다.

### 설치와 컴파일

webpack은 다음과 같이 npm 명령어로 설치할 수 있다.

```shell
npm install webpack webpack-cli
```

`webpack`은 파일에서 webpack을 사용하기 위함이고, `webpack-cli`는 터미널에서 webpack을 사용하게 해주는 것이다.

### 설정 파일

설치가 완료되면 `webpack.config.js`파일을 생성하자.

그리고 현재 프로젝트 폴더의 `packge.json` 파일에서 Scripts를 변경해주자.

이제 node를 실행할 때, `npm start`를 사용하지 않고, `npm run dev:server`와 `npm run dev:assets`로 각자의 콘솔에서 실행할 것이다. 아래와 같이 Scripts를 변경하자.

`"start": "nodemon --exec babel-node init.js"` → `"dev:server": "nodemon --exec babel-node init.js"`

`"dev:assets": "webpack"`

``` js
"dev:server": "nodemon --exec babel-node init.js",
"dev:assets": "WEBPACK_ENV=development webpack",
// 내 코드를 server에 올려준다.
"build:assets": "WEBPACK_ENV=production webpack"
```



누군가 `npm run dev:assets`를 입력하면 webpack을 불러오고, 자동적으로 `webpack.config.js` 파일을 찾을 것이다. 따라서 이 파일의 이름은 변경하면 안된다.

기본적인 규칙은 webpack이 exported configuration object를 찾는 다는 것이다. 

한가지 명심해야 할 점은 이 config 파일은 server 코드와는 연관시키지 않고 오직 client code와만 연관되어야 한다는 것이다. 즉, 우리가 앞에서 사용한 babel-node는 아직 사용할 수가 없다. 따라서 우리는 예전의 JavaScript를 사용해야 한다.

일단 설정파일(`webpack.config.js`)을 구성해보자.

``` js
// webpack.config.js

// Node.js에는 path를 통해서 파일과 경로를 절대적으로 만들어 줄 수 있다.
// path는 Node.js에 기본적으로 깔려있는 패키지이다.
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
// __dirname은 현재의 프로젝트 디렉토리 이름이다. 이 변수는 어디서든 접근 가능한 Node.js의 전역 변수이다. 따라서 선언하지 않고 바로 가져다 쓰면 된다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// OUTPUT_DIR은 저장되는 파일의 위치를 만들어 줄 것이다.
// 파일이 아닌 디렉토리이므로 path.join을 사용해서 static이라는 폴더로 export 하라고 지정한다.
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    // 이곳에서 우리가 사용할 모든 파일 형식들을 지정한다.
    // webpack이 module을 만났을 때, 아래의 규칙들을 따르게 하는 것이다.
    // rules는 하나의 array로 선언 가능하다.
    // 어떤 확장자를 만날 때, 어떤 loader를 실행해라와 같은 명령을 주는 것이다.
    rules: [
      {
        // test를 통해서 어떤 파일인지 알아본다.
        // 정규표현식을 통해 아래와 같이 지정했다. 
        // 아래는 scss인 파일을 전부 찾아주는 코드이다.
        // SCSS 파일 찾기 → SCSS를 CSS로 바꾸기 → CSS에서 전체 텍스트 추출하기 → 추출된 CSS를 분리된 하나의 파일로 만들기
        test: /\.(scss)$/,
        // SCSS 파일을 찾았을 때 Extract Text Webpack이라는 플러그인을 사용한다.
        // loader를 사용할 때는 아래에서부터 위로 코드가 실행된다.
        use: ExtractCSS.extract([
          {
            // css-loader를 이용해서 webpack이 CSS를 이해할 수 있게 되는 것이다.
            loader: "css-loader",
          },
          {
            // postcss-loader는 CSS의 호환성 관련된 것들을 자동으로 해결해준다.
            loader: "postcss-loader",
            options: {
              // PostCSS 플러그인으로 autoprefixer를 사용한다.
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              },
            },
          },
          {
            // sass-loader는 Sass or SCSS를 받아서 일반 CSS로 바꿔준다.
            loader: "sass-loader",
          },
        ]),
      },
    ],
  },
  // output은 Object로 지정해야한다.
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  // plugins을 사용하기 위해서는 아래와 같이 plugins를 설치해주어야 한다.
  plugins: [new ExtractCSS("styles.css")],
};

// 예전 버전의 JavaScript 문법을 사용해서 export 해준다.
module.exports = config;
```

웹팩은 `Entry`, `Output`을 가지고 있다.

`Entry`는 파일들이 어디에서 왔는지를 나타내고, `output`은 그것들을 어디에 넣을 것인지에 관한 것이다. 일단 "assets"라는 폴더를 생성하자. 이 폴더 안에는 js폴더, scss폴더를 생성한다. 우리는 이 폴더 안에 JavaScript와 SCSS 작업을 할 것이다.

폴더 구조는 다음과 같다.

> assets/js/main.js
>
> assets/scss/styles.scss
>
> assets/scss/config/_variables.scss

`main.js` 파일에서는 Modern JavaScript를 이용해서 scss 파일을 import 해준다.

``` js
// assets/js/main.js

import "../scss/styles.scss";
```

### extract-text-webpack-plugin

아래와 같은 명령어로 extract-text-webpack-plugin을 설치할 수 있다.

이때 마지막에 `@`를 붙여서 설치하게 되면 아직 공개하지 않은 Beta 버전을 설치할 수 있다.(최신버전)

``` shell
npm install extract-text-webpack-plugin@
```

### loader 설치

``` shell
npm install css-loader postcss-loader sass-loader
```

### node-sass 설치

``` shell
npm install node-sass
```



## PostCSS

[PostCSS](https://postcss.org)의 Autoprefixer라는 도구를 사용하면 현재 사용하는 브라우저의 인기도를 바탕으로 prefix들을 알아서 적용시킨다. 이와같이 굉장히 많은 플러그인들을 PostCSS를 통해 사용할 수 있다.

우리는 Autoprefixer를 사용할 것이다. 

### autoprefixer 설치

```shell
npm install autoprefixer
```

### Option

[autoprefixer](https://github.com/postcss/autoprefixer)는 넣어줘야하는 몇가지 옵션이 있다.

``` js
loader: "postcss-loader",
options: {
    // PostCSS 플러그인으로 autoprefixer를 사용한다.
    // plugins는 plugin들로 구성된 array이다.
    plugin() {
        // 지금은 하나의 plugin만 있기 때문에 아래와 같이 plugin을 return해준다.
        // option으로는 conver 99.5%를 사용한다. 이 옵션은 시중의 브라우저에 99.5%와 호환 가능하게 해주는 옵션이다.
        return [autoprefixer({ browsers: "cover 99.5%" })];
    },
```



## ES6 with Webpack

Webpack을 통해 ES6를 사용해 볼 것이다. 아래와 같이 ES6 문법을 작성한다.

``` JS
// assets/js/main.js

import "../scss/styles.scss";

const something = async () => {
  console.log("something");
};
```

그리고 이것을 Webpack에서 modern JavaScript로 바꾸어 주어야 한다. 아래와 같이 새로운 rule을 하나 추가한다. 

``` js
// webpack.config.js
rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
```

여기서 사용하는 loader는 `babel-loader`이다.

### babel-loader 설치

``` shell
npm install babel-loader
```

### Scripts 수정

그리고 스크립트에서 -w 옵션을 추가해서 `dev:assets`가 파일들을 지켜보게 할 것이다.

watch를 추가해주면 css를 수정할 때마다 webpack을 재시작하는 귀찮은 일을 하지 않아도 된다.

하지만 config.js 파일을 수정 했을 때는 재시작 해줘야 한다.

``` json
// package.json

"scripts": {
    "dev:server": "nodemon --exec babel-node init.js",
    // 아래와 같이 마지막에 -w를 추가하면 된다.
    "dev:assets": "WEBPACK_ENV=development webpack -w",
    "build:assets": "WEBPACK_ENV=production webpack"
  },
```



### View  수정

아래와 같이 css와 script 파일을 추가해준다.

``` pug
doctype html
html
  head
    script(src="https://kit.fontawesome.com/142b9259dc.js", crossorigin="anonymous")
    title #{pageTitle} #{siteName}
    // static폴더의 styles.css를 추가해준다.
    link(rel="stylesheet", href="static/styles.css")
  body
    include ../partials/header
    main
      block content
    include ../partials/footer
    // script도 추가해준다.
    script(src="/static/main.js")
```



### app.js 수정

그리고 우리는 서버에게 알려줘야 한다. 왜냐하면 우리는 지금 `/static`이라는 route가 존재하지 않기 때문에 app.js 파일에서 추가시켜줘야 한다.

아래와 같이 누군가 `/static`으로 가려고 하면, static 폴더로 가라고 지정해준다.

``` js
// app.js
// ...

app.use("/uploads", express.static("uploads"));
// 아래와 같이 static route를 추가해주어야 한다.
app.use("/static", express.static("static"));

// ...
```



### polyfill 설치

`npm run dev:server`, `npm run dev:assets`를 통해 실행해보면 콘솔 창에 `regeneratorRuuntime`이 정의되지 않았다고 오류가 뜬다. 이것은 브라우저가 async를 어떻게 처리해야 하는지 모르기 때문이다.

따라서 우리는 polifill이라는 것을 설치해주어야 한다. 우리는 `babel-polyfill`을 설치할 것이다.

polyfill은 브라우저가 없는 부분을 메워주는 자바스크립트 파일 같은 것이다.

#### 설치법

``` shell
npm install @babel/polyfill
```

#### webpack.config.js 수정

entry를 array로 만든 다음 `@babel/polyfill`을 추가한다.

``` js
const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  // ...
```





