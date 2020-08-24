# CORS 사용하기

## CORS란?

CORS(Cross-Origin Resource Sharing)는 보안상의 이유로 브라우저들이 **다른 도메인에게** XHR 요청을 보내는 것을 제한하는 것이다.

만약 CORS 에러가 발생했다면 응답을 받는 서버쪽에서 해결해야한다.

필자는 Express를 사용하기 때문에 아래와 같이 cors middleware를 사용하게 되면 아주 쉽게 해결 가능하다.

## Server 설정

```js
import cors from "cors";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
```

여기서 origin을 통해서 특정 origin 주소만을 허용하도록 설정할 수 있다. 이렇게 설정하는 이유는 특정 origin을 설정하지 않는다면 **모든 origin**을 허용하기 때문에 보안상 위험하기 때문이다. 이때 origin의 주소는 server의 주소가 아니라 **client의 주소**를 넣어줘야 한다!

credentials option은 쿠키를 같이 보내주는 option이다.

## Client 설정

```js
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});
```

Client의 설정도 또한 간단하다. axios 요청을 할 때 withCredentials를 true로 설정해서 CORS 요청에 쿠키 값을 넣어주면 된다.
