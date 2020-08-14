# Optional Chaining (?.)

Javascript에서 객체에 접근할 때, 만약 Property가 없다면 에러가 발생할 수 있다.

하지만 Optional Chaining을 사용하면 Property가 없는 객체에도 안전하게 접근할 수 있다.

Optional Chaining을 사용하기 전에는 이런 문제들을 해결하기 위해서 `&&`연산자를 시용해서 해당 객체에 Property가 있는지 확인했었다.

하지만 AND 연산자를 이용해서 이 문제를 해결하다 보니 코드가 아주 길어진다는 단점이 있었다.

코드를 효율적으로 깔끔하게 사용하기 위해서는 `Optional Chaining`을 사용해보자.

## 사용법

`?.`은 평가하고 싶은 Property의 앞의 대상이 `undefined`, `null`이면 평가를 멈추고 `undefined`를 반환한다.

```js
alert(user?.address?.street); // undefined 에러 발생 X
```
