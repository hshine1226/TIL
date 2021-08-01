# Class (2)

## Class와 getter, setter

```Typescript
class Person{
    private _name: string;
    private _age: number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        // 작업
        this._name = `${name} Choi`;
    }
}

const person: Person = new Person('Junhyuk', 29);

console.log(person.name);
person.name = 'Bellamy';
console.log(person.name);
```

## 클래스와 static 프로퍼티 => 클래스 멤버 변수

```TypeScript
class Person {
    public static CITY = '';
    private static lastName = 'Choi';
    private _name: string;
    private _age: number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    public print() {
        console.log(`${this._name} ${Person.lastName} in ${Person.CITY}`);
    }

}

const person: Person = new Person('Junhyuk', 29);
Person.CITY = 'Seoul';
person.print(); // Junhyuk Choi in Seoul

/*
1. static 키워드를 붙인 프로퍼티는 클래스.프로퍼티로 사용한다.
2. static 프로퍼티에 private, protected를 붙이면 똑같이 동작한다.
*/
```

## 클래스와 static 메서드 => 클래스 멤버 함수

```TypeScript
class Person {
    public static Talk(): void {
        console.log('안녕하세요~');
    }
}

Person.Talk(); // 안녕하세요~
```

## 모듈에서 private static 프로퍼티 혹은 메서드

```TypeScript
class Person {
    private static PROPERTY = 'private property';
    private static METHOD() {
        console.log('private method');
    }

    constructor() {
        console.log(Person.PROPERTY);
        Person.METHOD();
    }
}

/*------------------------------------*/

const PROPERTY = '모듈 내 변수';
function METHOD() {
    console.log('모듈 내 함수');
}

export class Person {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}
```

## Abstract Class

```TypeScript
abstract class APerson {
    protected _name: string = 'Mark';
    abstract setName(name: string): void;
}

class Person extends APerson {
    setName(name: string): void {
        this._name = name;
    }
}

// const person = new APerson(); // Error
const person = new Person();

/*
1. abstract 키워드가 사용된 클래스는 new로 생성할 수 없다.
2. abstract 키워드가 사용된 클래스를 상속하면 abstract 키워드가 붙은 함수를 구현해야 한다.
*/
```

## Class와 private constructor

```TypeScript
class Preference{
    private constructor(){
    }
}

// const p: Preference = new Preference(); // Error

/*
1. 생성자 함수 앞에 접근제어자인 private를 붙일 수 있다.
2. 외부에서 생성이 불가능하다.
*/
```

## Class와 싱글톤 패턴

```TypeScript
class Preference{
    public static getInstance() {
        if (Preference.instance === null) {
            Preference.instance = new Preference();
        }

        return Preference.instance;
    }
    private static instance: Preference = null;
    private constructor() {
    }
}

const p: Preference = Preference.getInstance();

/*
1. private 생성자를 이용해서 내부에서만 인스턴스 생성이 가능하도록 함.
2. public static 메서드를 통해 private static 인스턴스 레퍼런스를 획득한다.
3. Lazy Loading (Initialization): 최초 실행시가 아니라, 사용시에 할당을 함
*/
```
