# map & forEach

## map

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열을 반환**합니다.

``` js
const array = [1, 4, 9, 16]
const mapArray = array.map(element => element * 2)
console.log(mapArray) // [2, 8, 18, 32]
```

### Syntax

``` js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

### Parameters

- callback
  - currentValue: 처리할 현재 요소
  - index: 처리할 현재 요소의 인덱스
  - array:  map()을 호출한 배열
- thisArg: callback을 실행할 때 this로 사용되는 값

### Return value

배열의 각 요소에 대해 실행한 callback의 결과를 모은 **새로운 배열**



## forEach

forEach() 메소드는 Map 오브젝트 내의 key/value 쌍의 개수 만큼 주어진 함수를 순서대로 **실행합니다.**

``` js
function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`)
}

new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);

// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"
```

### Syntax

```js
myMap.forEach(callback[, thisArg])
```

### Parameters

- callback: 각각의 요소를 처리하기 위한 함수
- thisArg: callback을 실행할때 this로 사용되는 값.

### Return value

`undefined`



## 비교

forEach와 map은 둘 다 배열을 순회하면서 인자로 전달한 원소의 값을 가지고 함수 로직을 구현한다.

하지만 **return이 있는지 없는지에 따라 차이가 있다.**