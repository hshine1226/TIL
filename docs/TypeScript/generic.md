# Generic

```TypeScript
function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// More repeated functions

function hello(message: any): any {
    return message;
}

// Generic functions
function helloGeneric<T>(message: T): T {
    return message;
}

console.log(hello('Mark').length);
console.log(hello(35).length);

console.log(helloGeneric(35).toString()); // console.log(helloGeneric<number>(35).toString());

// hello의 리턴이 any이기 때문에 타입 헬퍼가 제대로 되지 않음
// helloGeneric을 사용하면 정상적으로 사용 가능
// any(x) => generic(o)
```

## Basic generic

```TypeScript
function helloGeneric<T>(message: T): T {
    return message;
}

function hello<T>(message: T): T {
    return message;
}

console.log(hello<string>('Hello'));
const age = hello(35);
hello<number>('35');

/*
1. Generic type을 쓰지 않으면, T로 추론
2. Generic type을 쓰면, T를 확인
*/
```

## Generic Array

```TypeScript
function hello<T>(message: T[]): T {
    return message[0];
}

console.log(hello<string>(['Hello', 'World']));

/*
hello 함수의 Generic type을 []를 사용하여 배열로 사용할 수 있음
*/
```

## Generic Types

```TypeScript
type HelloGeneric = <T>(message: T) => T;

const hello: HelloGeneric = <T>(message: T) => {
    return message;
}

console.log(hello<string>('Hello').length);

/*
구현체에 return T를 설정하지 않아도, return false시 오류가 나지 않는다(?)
*/
```

## Generic Class

```TypeScript
class Person<T> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new Person('Mark');
// new Person<string>(35); // Error

/*
명시적으로 제네릭 타입을 설정하면 오류
*/
```

## Generic with extends

```TypeScript
class Person<T extends string | number> {
    private _name: T;

    constructor(name: T){
        this._name = name;
    }
}

new Person('Mark');
new Person(35);
// new Person(true); // Error

/*
T가 string | number를 상속받기 때문에 boolean은 안된다.
*/
```

## Generic with multiple types

```TypeScript
class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person('Mark', 35);
```

## Type lookup system

```TypeScript
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Mark',
    age: 35
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

console.log(getProperty(person, 'name'));
// console.log(getProperty(person, fullname)); // Error
setProperty(person, 'name', 'Mark');
console.log(getProperty(person, 'name')); // Mark
// setProperty(person, 'name', 35); // Error
```
