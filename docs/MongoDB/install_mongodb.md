# MongoDB

## MongoDB란?

Database에는 SQL과 NoSQL이 있다. 

MongoDB는 NoSQL로 분류된다. MongoDB는 더 적은 규칙과 절차로 작업이 가능한 데이터베이스이다.

직관적으로 작동하는 데이터베이스라 초보자들도 사용하기 쉽다.

## MongoDB 설치하기

[MongoDB Community Sever](https://www.mongodb.com/try/download/community)에 들어가서 설치를 하자.

Platform(OS)를 선택하고 다운로드를 받은 뒤 설치를 하면 된다. 

아래는 리눅스 기준으로 다운받은 `dev`파일을 설치하는 방법이다.

```shell 
dpkg -i mongodb-org-server_4.2.7_amd64.deb
```

## MongoDB 실행하기

MongoDB를 실행하기 위해서 일단 콘솔창에 `mongod`라고 입력해야 한다.

```shell
sudo mongod
```

하지만 data/db라는 경로가 설정되지 않았다면 오류가 날 수도 있다. 

이런 경우에는 아래와 같이 경로를 만들어주면 된다.

``` shell
sudo mkdir -p /data/db
```

이후에 `mongod`를 실행하게 되면 정상적으로 실행되는 것을 볼 수 있다.

`mongod`를 통해 실행이 정상적으로 되었다면, `mongo`를 통해서 mongoDB에 접속할 수 있다.

## [Mongoose]MongoDB와 JavaScript 연결하기

MongoDB와 JavaScript의 NodeJS를 연결하기 위해서는 이를 연결해주는 Adapter가 필요하다.

MongoDB에서 JavaScript 코드를 작성하려면 MongoDB로부터 Instruction을 받아야하는데, 이것은 `Mongoose`라는 귀여운 친구가 맡아줄 것이다.

`Mongoose`는 NodeJS를 위한 Object Modeling이다. 설치법은 아래와 같이 매우 간단하다.

``` shell
npm install mongoose
```

## 정리

MongoDB는 Database이고 Mongoose는 Database와 연결하게 해주는 Adapter이다. 

그리고 MongoDB는 규칙이 적고 엄청 유연하기 때문에 많은 부분을 수정할 수 있다. 

이것은 사람 by 사람이다. 

하지만 일반적인 프로젝트를 진행할 때, MongoDB는 좋은 선택이다. 🐹🐻