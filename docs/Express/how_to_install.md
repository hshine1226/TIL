# Express 설치 방법 with NPM

## NPM(Node Package Manager)

NPM을 이용하면 Express, React, React Native, Electron 등을 직접 다운로드 받아서 붙여넣고, 업데이트 되면 또 붙여넣고... 이런 작업들을 안해도 된다. 

자동으로 나의 프로젝트 폴더에 설치를 해주고 세팅해주는 툴이다.

NPM은 Node.js World의 중심 같은 곳이다. 사람들이 각자의 Package를 넣어두고 우리는 그저 npm을 통해 다운받아서 사용할 수 있게 된다. 

## NPM 설치 방법

NPM은 따로 설치를 하지 않아도 된다. 왜냐하면 Node.js를 설치할 때 같이 따라오기 때문이다.

그러니까 Node.js를 설치하면 실제로는 node.js와 npm을 설치하게 되는 것이다. 이는 전세계 어디서든 package를 서로 공유하고 받을 수 있게 하기 위해서이다. 

매우매우 Awesome하다.

## Package Manager로 NPM 사용하기

``` shell
npm init
# package.json 생성

npm install express
# npm을 설치할 때는 꼭 프로젝트 폴더에서 생성해야한다.
# 만약 package.json이 없는 곳에서 생성하면 그곳에 또 다시 package.json을 만들기 때문이다.
```

npm install express를 해주게 되면 node_module이 생성된다. 이것은 우리가 NPM을 통해 다운로드 받은 것이다. 

그리고 package.json을 보게 되면 아래와 같이 dependencies가 추가된 것을 볼 수 있다.

``` json
"dependencies": {
    "express": "^4.17.1"
  }
```

## 동료와 프로젝트를 같이 작업할 때

동료와 프로젝트를 같이 진행한다면 모든 Node_module을 넘겨줄 필요가 없다.

package.json의 dependencies를 통해서 npm이 알아서 node_module을 설치해주기 때문이다.