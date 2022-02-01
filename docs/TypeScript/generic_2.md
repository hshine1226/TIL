# Generic (2)

최근 Generic에 관련해서 블로그 글을 작성하고 간만에 TIL도 업데이트겸 글을 옮겨 본다.

> Generic이란 원래 C#과 Java와 같은 언어에서 컴포넌트를 생성할 때 재사용이 가능하게 하는 주요 도구중 하나라고 볼 수 있다. 즉, 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있게 해주는 것이다. 제너릭 타입으로 작성된 컴포넌트는 사용자가 해당 컴포넌트를 사용할 때 정해진 타입이 아니라 자신만의 타입을 정해서 사용할 수 있게 되는 것이다.
> 이 글에서는 필자가 Generic 타입으로 인해 마주했던 에러에 대해서 공유하고, 어떻게 Generic 타입을 생성하고 사용할 수 있는지 샘플 코드와 함께 설명해볼 것이다.

## 0. React hook generic type error?

먼저 Generic 타입으로 인한 에러를 최근에 마주하여서 이 부분에 대한 에러와 해결 방법을 공유하고자 한다. React의 useLocation hook을 사용하면서 state 타입을 지정해서 받아올 때 기존과 동일하게 타입을 재정의 하는 과정을 했었는데, 오류가 났었는데 해당 문제는 Generic 타입에 관련된 에러였다. 기존 useLocation의 state 타입을 재정의하는 방식은 아래와 같았다.

이 문제는 react-router-dom 패키지가 v6로 업데이트가 되면서 더이상 generic 타입을 지원하지 않게 되면서 생긴 문제인데 필자는 아래와 같은 방법으로 타입을 재정의했다. 더 좋은 idea가 있다면 코멘트를 남겨주면 좋을 것 같다.

## 1. 함수(function) Generic type 생성

먼저 아래와 같이 배열의 길이를 반환하는 함수를 만들어보자. 이 함수는 Number형 배열을 입력받아서 해당 배열의 길이(number형)를 반환하는 함수이다. 반환되는 값은 numberArr의 길이인 5가 된다.

```ts
function getArrLength(arr: number[]): number {
  return arr.length;
}
const numberArr = [1, 2, 3, 4, 5];
getArrayLength(numberArr); // -> 5
```

그런데 만약 getArrLength 함수를 사용하는 사용자가 Number형이 아닌 string형의 데이터를 입력하게 되면 어떻게 될까? 아마 Number형 배열에 string형식의 데이터가 들어갔으니 타입에러가 나게 될 것이다.

```ts
function getArrLength(arr: number[]): number {
  return arr.length;
}
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
getArrayLength(numberArr); // -> 5
getArrayLength(stringArr); // -> Type error
```

보통의 경우에는 string 형식의 배열을 입력받고 싶으면 아래와 같이 함수를 선언할 것이다. arr parameter의 타입을 string으로 해주면 해결되는 문제이다.

```ts
function getArrLength(arr: string[]): number {
  return arr.length;
}
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
getArrayLength(numberArr); // -> 5
getArrayLength(stringArr); // -> 5
```

하지만 만약 한가지 함수에서 여러가지 타입의 입력을 받고 싶을 때는 어떻게 해야할까? 가장 간단하게는 Union 타입을 사용할 수 있다.

```ts
function getArrLength(arr: number[] | string[]): number {
  return arr.length;
}
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
getArrayLength(numberArr); // -> 5
getArrayLength(stringArr); // -> 5
```

하지만 만약 더 여러개의 타입을 받아야하는 상황이라면 Union 타입을 이용해서 타입을 선언하는 것은 그리 좋은 방법이 아닐 것 같다. 바로 이런 상황에서 사용할 수 있는 것이 Generic Type이다.
Generic 타입을 선언하기 위해서는 아래 코드의 T에 집중해보자. 함수명(getArrLength) 뒤에 <T>를 적어주었는데, 이는 어떤 타입을 전달 받을지를 나타내는 것이고 꼭 T가 아니라 다른 문자를 적어줘도 상관 없다.(하지만 보통 T를 많이 사용)
그리고 뒤의 매개변수의 타입에서 T의 [](배열)로 타입을 정의해주면 끝이다. 이렇게 되면 이 함수를 사용하는 사용자가 타입을 결정해 줄 수 있다.

```ts
function getArrLength<T>(arr: T[]): number {
  return arr.length;
}
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
getArrayLength<number>(numberArr); // -> 이렇게 타입을 정해줘도 되고
getArrayLength(numberArr); // -> 이렇게 타입을 정해주지 않아도 된다.(타입스크립트가 알아서 배열의 값을 보고 타입을 추론해줌)
getArrayLength(stringArr); // -> 이건 알아서 string 타입으로 추론한다.
```

## 2. 인터페이스(interface) Generic 타입 생성

인터페이스 역시 제너릭 타입을 생성하는 것은 함수에서의 방식과 크게 다르지 않다. 인터페이스 생성시 인터페이스명 옆에 <T>로 어떤 타입을 전달받을지를 명시해주고, 실제 인터페이스를 사용할 때 타입을 지정해주면 그만이다.

```ts
interface IUser<T> {
 name: string;
 age: number;
 option: T;
}
const userOne: IUser<string> {
 name: 'Bellamy',
 age: 29,
 option: 'I am a man'
}
const userTwo: IUser<object> {
 name: 'Jason',
 age: 31,
 option: {
     hobby: 'tennis',
     favoriteFood: 'Kimchi'
 }
}
```

이렇게 Generic을 사용하면 하나의 함수, 하나의 인터페이스를 통해서 각기 다른 객체들을 생성할 수가 있다.
