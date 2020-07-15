# Building for production

## folder structure

`README.md`, `package.json`, `package-lock.json`을 제외한 모든 파일은 **src** 폴더에 넣어준다.

## scripts

``` json
// package.json
"scripts": {
    "dev:server": "nodemon --exec babel-node src/init.js --delay 2 --ignore '.scss' --ignore 'static' ",
    "dev:assets": "cd src && WEBPACK_ENV=development webpack -w",
    "build:assets": "cd src && WEBPACK_ENV=production webpack",
    "build:server": "babel src --out-dir build --ignore 'src/assets','src/static','src/webpack.config.js'",
    "copyAll": "cp -R src/static build && cp -R src/views build",
    "build": "npm run build:server && npm run build:assets && npm run copyAll",
    "prebuild": "rm -rf build",
    "start": "node build/init.js"
  },
```

npm run build를 실행하면 build 폴더를 제거하고, build:server, build:assets 스크립트를 실행한다.

babel은 static file들은 담지 않기 때문에 assets와 static폴더 그리고 webpack.config.js 파일은 babel 실행시 제외시켜준다.

제외시킨 파일들은 `cp -R src/static build && cp -R src/views build`와 같이 build 폴더로 복사해준다.

## directory 설정

모든 파일들을 src 폴더 안으로 옮겼기 때문에, 아래와 같이 views와 static의 폴더 경로를 변경해주어야 한다.

``` js 
// src/app.js

app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
```



> 만약 Babel과 관련된 에러를 만나게 된다면 
>
> @babel/core, @babel/node를 설치하자!