# Nodemon을 통해서 Node 서버 자동으로 재시작 하기

node를 사용하다 보면 변경사항이 생길 때마다 계속 서버를 껏다 켜줘야 하는 불편함이 있다.

하지만 Nodemon을 사용한다면 그 과정을 자동으로 수행해준다.

## 설치법

nodemon package를 설치하기 전에 dependencies와 devDependencies를 알아보자.

- `dependencies`는 프로젝트가 실행되려면 필요한 것들(express, babel/node, babel/core, babel/preset-evn 등)을 말한다.

- `devDependencies`는 프로젝트 실행과 관련없는 것들을 포함한다. 예를들면 개발자에게 도움이 될만한 nodemon 같은 것들을 말한다.

nodemon은 개발자에게 필요한 dependency이므로 아래와 같은 명령으로 devDependencies에 추가할 것이다.

```shell
npm install nodemon -D
```

위의 명령을 실행하고 나면 아래와 같이 `devDependencies`가 추가된 것을 볼 수 있다.

```json
"devDependencies": {
    "nodemon": "^2.0.4"
  }
```

## package.json Scripts설정

nodemon을 설치했으면 package.json의 scripts를 아래와 같이 설정해준다.

```json
"scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
```

위의 script는 index.js를 babel-node로 실행하고, nodemon으로 변경사항이 있을 때 자동으로 서버를 재시작 해주는 script이다.
