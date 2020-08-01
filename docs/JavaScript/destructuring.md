# 구조 분해 문법(Destructuring)

Destructuring은 ES6의 문법으로 변수 선언 형식을 자유롭게 해주는 방법을 말한다.

## Object에서 값을 받아오는 방법(기존)

```js
const junhyuk = {
  country: "korea",
  age: "28",
  gender: "male",
};

const country = junhyuk.country;
const age = junhyuk.age;
const gender = junhyuk.gender;
```

## Object에서 값을 받아오는 방법(Destructuring)

```js
const junhyuk = {
  country: "korea",
  age: "28",
  gender: "male",
};

const { country, age, gender } = junhyuk;
```

위에서 보는 것과 같이 destructuring 문법을 사용하게 되면 Object에서 값을 받아올 때 기존의 방식보다 훨씬 간략하고 깔끔하게 받아올 수 있다.

### 받아온 값의 변수명을 바꾸는 방법

받아온 값의 변수명을 바꾸고 싶은 경우가 있다.

아래와 같이 age -> howOld로 변수명을 변경해줄 수 있다.

```js
const junhyuk = {
  country: "korea",
  age: "28",
  gender: "male",
};

const { country, age: howOld, gender } = junhyuk;
```

## let으로 선언한 변수에서 Destructuring을 해보자

api에서 받아온 데이터 Object 결과가 아래와 같다고 할 때, let으로 선언한 변수에 전체 Object 값들이 아닌 *data 속성의 값*만 받아오고 싶다면 어떻게 해야할까?

![스크린샷, 2020-08-01 19-02-20](https://user-images.githubusercontent.com/31975706/89099365-9c584680-d429-11ea-9770-041b2ecb5149.png)

일단 첫번째 방법으로는 아래와 같이 새로운 const 변수를 선언해서 먼저 값을 받아오고, 그 const 변수를 통해서 Object 내부에 접근하는 방법이 있을 것이다.

```js
let result = null;

const request = await movieApi.movieDetail("121");
result = request.data;
```

위의 방법으로도 이 문제를 해결할 수 있지만, 조금 더 심플하게 코드를 작성할 수는 없을까?

아래의 코드에서 그 해답을 찾을 수 있다.

```js
let result = null;

({ data: result } = await moviesApi.movieDetail("121"));
```

let으로 선언한 result 변수의 결과값
![스크린샷, 2020-08-01 19-14-21](https://user-images.githubusercontent.com/31975706/89099567-3e2c6300-d42b-11ea-88a0-2c035f737e43.png)

위의 코드와 같이 해당 구문 전체를 괄호로 감싸주고 Destructuring을 한다면 let으로 선언한 변수에서도 Destructuring이 가능하다👍
