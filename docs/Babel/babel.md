# Babel 사용법

## Babel이란 무엇일까?

Babel은 최신의 JavaScript 코드(ES6)를 예전의 JavaScript 코드로 변환해주는 것이다.

Babel을 node에서 사용할 것이기 때문에 Babel node를 사용할 것이다.

## Babel node 설치법

```shell
npm install @babel/node
```

## Presets

presets는 plugin의 집합이다. 하나를 설치하면 여러개의 plugins를 사용한 것과 같은 효과를 볼 수 있다.

plugins는 각 문법이라고 생각하면 된다.

ES6를 사용할 것이기 때문에 `@babel/preset-env을 사용한다. 이 preset은 가장 최신이지만 실험적인 수준은 아닌 JavaScript preset이다."scripts": {
"start": "nodemon --exec babel-node index.js"
}"scripts": {
"start": "nodemon --exec babel-node index.js"
}

### Preset 설치

```shell
npm install @babel/preset-env
```

## .babelrc

`.babelrc`는 Babel을 설정하는 곳이다.

Babel은 실행되기 전에 이 파일을 찾아보고 여기에 설정해둔 Presets을 읽고 이해한다.

```
{
  "presets": ["@babel/preset-env"]
}
```

.babelrc를 생성해주고 위와같이 우리가 설치한 presets를 추가해주자.

## 작동 확인

### 최신의 JavaScript 문법으로 변경

작동하는지 확인하기 위해서 JavaScript 문법을 ES6 문법으로 바꿔보자.

최신 JavaScript 문법은 가독성이 훨씬 좋다.

> 기존 JavaScript 문법

```js
const express = require("express");

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile.");
}
```

> ES6 문법

```js
import express from "express";

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("You are on my profile.");
```

### babel로 index.js 실행

node로 index.js를 실행하는 대신 babel-node로 실행해보자.

babel-node로 실행하려면 babel core가 필요하다.

```shell
npm install @babel/core
```

위와 같이 babel core를 설치해준다.

그러면 아래와 같이 변경된 명령을 통해서 babel-node로 index.js를 실행할 수 있다.

`node index.js` -> `babel-node index.js`

npm으로 실행하기 위해서 package.json 역시 아래와 같이 수정해준다.

```json
"start": "babel-node index.js"
```

`npm start`를 해보면 서버가 잘 돌아가는 것을 볼 수 있다.
