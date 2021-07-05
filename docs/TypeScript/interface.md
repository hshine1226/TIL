# Interface

```Typescript
function hello(person: {name: string; age: number;}): void {
    console.log(`안녕하세요! ${person.name}입니다.`)
}

const p: {name: string; age: number; } = {
    name: 'Bellamy',
    age: 29
}

hello(p) // 안녕하세요! Bellamy입니다.

/* ---------------------------------------- */

interface Person {
    name: string;
    age: number;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person}입니다.`);
}

const p: Person = {
    name: 'Bellamy',
    age: 29
}

hello(p) // 안녕하세요! Bellamy입니다.
```

## optional property - 1

```Typescript

interface Person {
    name: string;
    age?: number;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name}입니다.`)
}

const p1: Person = {
    name: 'Bellamy',
    age: 29
}

const p2: Person = {
    name: 'Anna'
}

hello(p1) // 안녕하세요! Bellamy입니다.
hello(p2) // 안녕하세요! Anna입니다.
```

## optional property - 2

```Typescript
// indexable type
interface Person {
    name: string;
    age?: number;
    [props: string]: any;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name}입니다.`)
}

const p1: Person = {
    name: 'Jake',
    age: 29
}

const p2: Person = {
    name: 'Abby',
    sisters: [
        'Octavia',
        'Chan'
    ]
}

const p3: Person = {
    name: 'Clark',
    father: p1,
    mother: p2
}
```

## function in interface

```Typescript
interface Person{
    name: string;
    age: number;
    hello(): void;
}

const p1: Person = {
    name: 'Mark',
    age: 35,
    hello: function() : void {
        console.log(this);
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}

const p2: Person = {
    name: 'Mark',
    age: 35,
    hello(): void {
        console.log(this)
        console.log(`안녕하세요! ${this.name}입니다.`)
    }
}

const p3: Person = {
    name: 'Mark',
    age: 35,
    hello: (): void => {
        console.log(this)
        console.log(`안녕하세요! ${this.name}입니다.`)
    }
}

p1.hello() // 안녕하세요! Mark입니다.
p2.hello() // 안녕하세요! Mark입니다.
p3.hello() // 안녕하세요! 입니다.
```

## class implements interface

- class를 interface로 implements

```Typescript
interface IPerson{
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name}입니다.`)
    }
}

const person = new Person('Mark')
person.hello(); // 안녕하세! Mark입니다.
```

## interface extends interface

- 인터페이스를 상속받는 인터페이스

```Typescript
interface Person {
    name: string;
    age?: number;
}

interface Korean extends Person {
    city: string;
}

const k: Korean = {
    name: '최준혁',
    city: '서울'
}
```

## function interface

- 많이 사용하지는 않는듯?

```Typescript
interface HelloPerson {
    (name: string, age?: number): void;
}

let helloPerson: HelloPerson = function (name: string) {
    console.log(`안녕하세요! ${name}입니다.`)
}

helloPerson('Mark') // 안녕하세요! Mark입니다.

// 함수의 타입 체크는 할당할 때가 아닌 사용할 때 한다!!
```
