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
