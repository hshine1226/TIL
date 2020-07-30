# 스프레드 오퍼레이터(Spread Operator)

Spread Operator는 특정 객체 또는 배열의 값을 다른 객체(Obejct) 또는 배열로 복사하거나 옮길 때 사용한다.

연산자의 생김새는 `...`과 같이 나타낼 수 있다.

## Usage

먼저 새로운 배열이나 객체를 서로 합칠때 그냥 배열끼리 더해주는 방식을 보면 다음과 같다. 

``` js
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays1 = days + otherDays;
const allDays2 = [days + otherDays];

console.log(allDays1)   // "Mon,Tue,WedThu,Fri,Sat"
console.log(allDays2)   // ["Mon,Tue,WedThu,Fri,Sat"]
]
```

위에서 보는 것과 같이 이 방식은 우리가 원하는 방식이 아니다.

그렇다면 Spread Operator를 사용한다면 어떻게 값이 변하는지 살펴보자.

``` js
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays1 = ...days + ...otherDays;
const allDays2 = [...days + ...otherDays];

console.log(allDays1)   // "Mon,Tue,Wed,Thu,Fri,Sat"
console.log(allDays2)   // ["Mon,Tue,Wed,Thu,Fri,Sat"]

```

위에서 보는 것과 같이 Spread Operator는 우리가 원하는 방식의 값을 받아올 수 있다. 

이것은 두 개의 Object를 병합할 경우에 매우 유용하게 사용할 수 있다.