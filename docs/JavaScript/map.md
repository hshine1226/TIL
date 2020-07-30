# Array Map

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환한다.

``` js
const array = [1, 4, 9, 16];

const arrayMap = array.map(x => x*2);
console.log(arrayMap)   // [2, 8, 18, 32]
``` 

## Syntax

`arr.map(callback(currentValue[, index[, array]])[, thisArg])`

- currentValue: 처리할 현재 요소

- index: 현재 요소의 인덱스

- array: map()을 호출한 배열
