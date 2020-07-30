# 구조 분해 문법(Destructuring)

Destructuring은 ES6의 문법으로 변수 선언 형식을 자유롭게 해주는 방법을 말한다.


## Object에서 값을 받아오는 방법(기존)

``` js
const junhyuk = {
    country: "korea",
    age: "28",
    gender: "male"
}

const country = junhyuk.country;
const age = junhyuk.age;
const gender = junhyuk.gender;
```

## Object에서 값을 받아오는 방법(Destructuring)

``` js
const junhyuk = {
    country: "korea",
    age: "28",
    gender: "male"
}

const { country, age, gender } = junhyuk;
```

위에서 보는 것과 같이 destructuring 문법을 사용하게 되면 Object에서 값을 받아올 때 기존의 방식보다 훨씬 간략하고 깔끔하게 받아올 수 있다.

### 받아온 값의 변수명을 바꾸는 방법

받아온 값의 변수명을 바꾸고 싶은 경우가 있다. 

아래와 같이 age -> howOld로 변수명을 변경해줄 수 있다.


``` js
const junhyuk = {
    country: "korea",
    age: "28",
    gender: "male"
}

const { country, age: howOld, gender } = junhyuk;
```
