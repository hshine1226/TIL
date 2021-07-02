# Type assertions, Type alias

## Type assertions

- 형변환과는 다름
- '타입이 이것이다'라고 컴파일러에게 알려주는 것을 의미
  - 따라서 행동에 대해서 작성자가 100% 신뢰하는 것이 중요
- 문법적으로 두가지 방법 존재
  - 변수 as 강제할타입
  - <강제할타입>변수

```Typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

/*
1. 주로 넓은 타입에서 좁은 타입으로 강제하는 경우가 많다.
2. jsx에서는 as를 쓴다.
*/
```

## Type alias(타입 별칭)

- 인터페이스랑 비슷한 듯
- Primitive, Union Type, Tuple
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있음
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님

### Aliasing Primitive

```Typescript
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;

/*
별 의미가 없네...
*/
```

### Aliasing Union Type

```Typescript
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';

/*

1. 유니온 타입은 A도 가능하고 B도 가능한 타입
2. 길게 쓰는걸 짧게 쓸 수 있게 함

*/
```

### Aliasing Tuple

```typescript
let person: [string, number] = ["Mark", 35];

type PersonTuple = [string, number];

let another: PersonTuple = ["Bellamy", 29];

/*
1. 튜플 타입에 별칭을 줘서 사용할 수 있게 함
*/
```

## Interface와 차이점

### Interface와 차이점(1)

```typescript
type Alias = { num: number };

interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

/*

1. type alias는 object literal type으로
2. interface는 interface로

가장 큰 차이점은 TypeScript가 컴파일을 시도했는데 뭔가 잘못되었을 때, Alias는 Alias로 알려주지 않고 { num: number }로 알려줌
*/
```

### Interface와 차이점(2)

```typescript
type PersonAlias = {
  name: string;
  age: number;
};

interface IPerson extends PersonAlias {}

let ip: IPerson = {
  name: "Mark",
  age: 35,
};

class PersonImp1 implements PersonAlias {
  name: string;
  age: number;

  hello() {
    console.log("안녕하세요");
  }
}

let pi: PersonImp1 = new PersonImp1();
pi.hello();

class PersonChild extends PersonAlias {}

/*
1. type alias끼리는 extends, implements 불가능
2. interface extends type alias 가능
3. class implements type alias 가능
4. class extends type alias 불가능(interface도 마찬가지)
5. 마치 interface처럼 동작함.
*/
```
