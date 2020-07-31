# axios

## 설치 방법

`npm install axios`

왜인지는 모르겠지만 최신버전 axios에서 params가 전달이 안된다...😦

해결 방법으로는 axios 를 0.18버전으로 재설치하면 된다.

`npm insatll axios@0.18.0`

## 사용법

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "81ae146449b630b44d8761021ecff41e",
    language: "en-US",
  },
});

api.get("tv/popular");
```

api를 호출할 때 반복되는 요소들이 많다. 예를들어서 baseUrl, api_key, language 등...

이런 작업을 기존의 fetch를 통해 하게 된다면 정말 비효율적일 것이다...

하지만 우리는 axios를 사용하면 이런 반복되는 요소들의 중복을 피할 수 있다.

## encodedURIComponent

사용자를 통해서 받아온 단어나 문장을 api를 통해 호출할 때, 공백이나 특수문자 같은 경우를 그대로 넘겨주게 되면 오류가 날 수 있다.

따라서 이때 encodedURIComponent를 사용해서 encoding 시켜주어야 한다.

```js
api.get("search/tv", {
  params: {
    //   사용자가 공백이나 특수문자를 입력할 수도 있으니 encoding 해주어야 한다.
    query: encodeURIComponent(term),
  },
});
```
