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

하지만 우리는 axios를 사용하면 이런 반복되는 요소들의 중복을 피할 수 있다.
