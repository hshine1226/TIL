# Dot Env 구성하기

DotEnv를 이용하면 .env 파일에 따로 환경 변수를 저장할 수 있다. 그러면 내가 공개하고 싶지 않은 변수들을 .env파일에 분리해서 .gitignore파일을 통해 그 정보만 제외하고 공유할 수 있다.

## DotEnv 설치하기

일단 dotenv를 아래와 같이 설치한다.

``` shell
npm install dotenv
```

## DotEnv 구성하기

그리고 루트 경로에 .env파일 생성한다.

.env 파일에 아래와 같이 숨기고 싶은 정보들을 선언해준다.

``` .env
MONGO_URL="mongodb://localhost:27017/youtube-clone"
PORT=4000
```

그리고 위의 환경변수를 사용하기 위해서는 아래와 같이 코드를 작성한다.

``` js
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
const PORT = process.env.PORT || 4000;
```

이렇게 하면 .env 파일에 저장된 환경 변수들을 가져다 쓸 수 있고, 이 환경변수들을 보호할 수 있다.

> dotenv.config(): .env 파일에서 변수들을 불러올 수 있다.
>
> process.env.KEY: 환경변수를 부를 때 사용된다.

## .gitignore로 .env파일 제외시키기

그리고 github에 .env파일이 올라가지 않게 .gitignore에서 .env파일을 제외시켜준다.



>  tip: VisualStudio Code에서 .env파일을 작성할 때, 시안성이 좋지 않은 것을 볼 수 있다. DotENV라는 Extension을 설치하면 .env 파일의 코드를 하이라이트 해준다.