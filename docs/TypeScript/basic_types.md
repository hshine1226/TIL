# Typescript basic types

- TypeScript에서 Program 작성을 위해 기본적으로 제공하는 데이터 타입
- **사용자가 만든 타입은 결국 이 기본 자료형들로 쪼개짐**
- JavaScript 기본 자료형을 포함(superset)
  - ECMAScript 표준에 따른 기본 자료형 6가지
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol(ECMAScript6에 추가)
    - Array(Object형)
- 프로그래밍을 도와주는 몇 가지 타입이 추가로 제공
  - Any
  - Void
  - Never
  - Enum
  - Tuple(Object형)

## Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- Primitive 형의 내장 함수를 사용 가능한 것은 JavaScript의 처리 방식 덕분

## Literal

- 값 자체가 변하지 않는 값을 의미
- 상수와 다른 것은 상수는 가리키는 포인터가 고정이라는 것이고, 리터럴은 그 자체가 값이자 그릇

## Boolean / boolean

- boolean: primitive type(기본 자료형) / true or false만 들어갈 수 있음
- Boolean: reference type/object / null이 들어갈 수 있음
- 가장 기본적인 데이터 타입
- 단순한 true 혹은 false 값
- JavaScript / TypeScript에서 'boolean'이라고 부름

```Typescript
let isDone: boolean = false;

typeof isDone === 'boolean' // true

// Type 'boolean' is assignable to type 'Boolean'.
let isOk: Boolean = true;

// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.
// Prefer using 'boolean' when possible.
let isNotOk: boolean = new Boolean(true);
```

## Number / number

- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값
- TypeScript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원

```Typescript
let decimal: number = 6; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수 리터럴
let binary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744; // 8진수 리터럴
```

## String / string

- 다른 언어에서와 마찬가지로 이 텍스트 형식을 참조하기 위해 'string' 형식을 사용
- JavaScript와 마찬가지로, TypeScript에서는 문자열 데이터를 둘러싸기 위해 큰따옴표(")나 작은따옴표(')를 사용

```Typescript
let name: string = "Junhyuk";
name = 'Bellamy';
```

## Template String

- 행에 걸쳐 있거나 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있음
- 포함된 표현식은 \`\${expr}\`와 같은 형태로 사용

```Typescript
let fullName: string = `Bellamy Choi`;
let age: number = 29;

let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next year.`;

// template string을 사용하지 않을 경우
let sentence: string = "Hello, my name is " + fullName + "I'll be " + (age + 1) + " years old next year.";
```

## Undefined & Null

- TypeScript에서 'undefined'와 'null'은 실제로 각각 'undefined'와 'null'이라는 고유한 타입을 가짐
- 'void'와 마찬가지로, 'undefined'와 'null'은 그 자체로는 쓸모 없음
- 둘다 소문자만 존재

```Typescript
// Few things can be assigned to this variable.
let u: undefined = undefined;
let n: null = null;
```

### undefined & null are subtypes of all other types

- number에 null 또는 undefined를 할당할 수 있음
- but, 컴파일 옵션에서 '--strictNullChecks'를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있음
  - 이 경우에 null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 함
  - 왠만하면 이렇게 하지 말자...(힘들듯)

```Typescript
let name: string = null;
let age: number = undefined;

//strictNullChecks => true
// Type 'null' is not assignable to type 'string'
let name: string = null; // (X)

// null => null || void, undefined => undefined || void
// Type 'null' is not assignable to type 'undefined'.
let u: undefined = null; // (X)
let v: void = undefined; // (O)
let union: string | null | undefined = 'str';
```

### null in JavaScript

- null이라는 값으로 할당된 것을 null이라 함
- 무건가가 있지만 사용할 준비가 덜 된 상태
- null 타입은 null이라는 값만 가질 수 있음
- runtime에서 typeof 연산자를 이용해 알아내면 object

```Typescript
let n: null = null;

console.log(n); // null
console.log(typeof n); // object
```

### undefined in JavaScript

- 값을 할당하지 않은 변수는 undefined라는 값을 가짐
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined
- runtime에서 typeof 연산자를 이용해 알아내면 undefined

```typescript
let u: undefined = undefined;

console.log(u); // undefined
console.log(typeof u); // undefined
```

## void

- 타입이 없는 상태
- 'any'와 반대의 의미를 가짐
- Void 대문자는 없음, 소문자로 표현
- 주로 함수의 리던이 없을 때 사용

```typescript
function returnVoid(message): void {
  console.log(message);
}

returnVoid("there is no return");
```

## any

- 어떤 타입이어도 상관 없는 타입
- 핵심을 이 타입을 최대한 쓰지 않는 것
- Because, compile time에 type check이 정상적으로 이루어지지 않기 때문
- 'nolmplicitAny' 옵션을 사용하면 컴파일 중 any를 사용할 때 에러를 뱉어줌

```typescript
function returnAny(message): any {
  console.log(message);
}

returnAny("Return is anything.");
```

## never

- return에 주로 사용
- 잘 사용 안하는듯
- 아래 예시의 3가지가 거의 대부분

```typescript
// Functions returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error("Something failed.");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

## Array

- 원래 JavaScript에서 array는 객체
- 두가지 방식
  - Array<타입>
  - 타입[]

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## Tuple

- 배열인데 타입이 한 가지가 아닌 경우
- 마찬가지로 객체
- 꺼내서 사용할 때 주의가 필요

```typescript
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["Hello", 10]; // OK
x = [10, "Hello"]; // Error

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
x[6] = true; // Error, 'boolean' isn't 'string | number'
```

## enum

- C에서 보던 것과 같음
- enum의 원소의 결과값은 string형

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
```

## Symbol

- ECMAScript 2015의 Symbol
- Primitive type의 값을 담아서 사용
- 고유하고 수정 불가능한 값으로 만들어줌
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많음

```typescript
let sym = Symbol();
let obj = {
  [sym]: "value",
};

console.log(obj[sym]); // "value"
```
