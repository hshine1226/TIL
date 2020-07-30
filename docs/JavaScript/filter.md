# Array filter

filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

``` js
const word = ['spray', 'limit', 'elite', 'exuberant'];
const result = word.filter(word => word.length < 5);

console.log(result) // ["spray", "limit", "elite"]
```

## Syntax

`arr.filter(callback(element[, index[, array]])[, thisArg])`

- element: 처리할 현재 요소.

- index Optional: 처리할 현재 요소의 인덱스.

- array Optional: filter를 호출한 배열.