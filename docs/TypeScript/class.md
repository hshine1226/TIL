# Class

## 클래스 만들기

```TypeScript
class Person {
    name: string
    age: number
}

const person: Person = new Person()
console.log(person) // Person { name: undefined, age: undefined }
person.age = 29
console.log(person.name) // undefined

/*
1. 생성자 함수가 없으면, 디폴트 생성자가 호출된다.
2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined가 된다.
=> 오브젝트에 프로퍼티가 아예 존재하지 않는다.
3. 접근제어자 (Access Modifier)는 public이 디폴트이다.
*/
```

## 클래스와 프로퍼티 (1)

```TypeScript
class Person {
    name: string
    age: number

    constructor() {
        console.log(this.name === null) // false
        console.log(this.name === undefined) // true
    }
}

const person: Person = new Person()
person.name = 'Mark'
person.age = 29
console.log(person) // Person { name: 'Mark', age: 29 }
```

## 클래스와 프로퍼티 (2)

```TypeScript
class Person {
    name: string = 'Mark'
    age: number = 29

    constructor() {
        console.log(this.name); // Mark
    }
}

const person: Person = new Person()
console.log(person) // Person { name: 'Mark', age: 29 }

/*

1. 클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있다.
2. 생성자가 불리기 전에 이미 프로퍼티의 값이 저장되어 있음을 알 수 있다.

*/
```

## 클래스와 프로퍼티의 접근 제어자 (1)

```TypeScript
class Person {
    public name: string
    private _age: number

    constructor(age: number) {
        this._age = age
    }
}

const person: Person = new Person(29)
person.name = 'Mark'
// person._age (X)
console.log(person) // Person { name: 'Mark', _age: 29 }

/*
1. private으로 설정된 프로퍼티는 dot으로 접근할 수 없다.
2. 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.
3. private이 붙은 변수나 함수는 _를 이름 앞에 붙이는데 이는 문법이 아니라 널리 쓰이는 Coding convention이다.
*/
```

## 클래스와 프로퍼티의 접근 제어자 (2)

```TypeScript
class Parent {
    private privateProp: string
    protected protectedProp: string

    constructor() {
    }
}

class Child extends Parent {
    constructor() {
        super()

        this.protectedProp = 'Protected prop'
        // this.privateProp = 'private' // (X)
    }
}

/*
1. 부모에서 private으로 설정된 프로퍼티는 상속을 받은 자식에서도 접근할 수 없다.
2. 부모에서 protected으로 설정된 프로퍼티는 상속을 받은 자식에서 접근이 가능하다.
3. 상속을 받은 자식 클래스에서 부모 클래스에 this를 토해 접근하려면 생성자에서 super()를 사용해야 한다.
*/
```

## 클래스와 디폴트 생성자

```TypeScript
class Person {
    public name: string
    private _age: number

    constructor(age: number) {
        this._age = age
    }
}

const person: Person = new Person()

/*
1. 디폴트 생성자는 프로그래머가 만든 생성자가 없을 때 사용할 수 있다.
=> 사용자가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
*/
```

## 클래스와 메서드

```TypeScript
class Person {
    constructor(private _name: string, private _age: number) { }

    print(): void {
        console.log(this._name + ' is ' + this._age + ' years old.')
    }

    printName = (): void => {
        console.log(`name is ${this._name}`)
    }

    private printAge = (): void => {
        console.log(`age is ${this._age}`)
    }
}
const person = new Person('Mark', 29)
person.print() // Mark is 29 years old.
person.printName() // name is Mark
// person.printAge() // (X)

/*
1. 클래스 내부에 작성된 메서드는 public이 디폴트
2. arrow function으로 작성 가능
3. private으로 생성하면 클래스 외부에서 접근 불가
*/
```

## 클래스와 상속 (1)

```TypeScript
class Parent {
    constructor(protected _name: string, protected _age: number) { }

    print(): void {
        console.log(this._name + ' is ' + this._age + ' years old.')
    }

    printName = (): void => {
        console.log(`name is ${this._name}`)
    }

    private printAge = (): void => {
        console.log(`age is ${this._age}`)
    }
}

class Child extends Parent {
    _name = 'Mark Jr.'
}

// const p: Child = new Child() // (X)
const p: Child = new Child('', 29)
p.print() // Mark Jr. is 29 years old.

/*
1. 상속은 extends 키워드를 이용한다.
2. 자식 클래스에서 디폴트 생성자는 부모의 생성자와 입력 형태가 같다.
*/
```

## 클래스와 상속 (2)

```TypeScript
class Parent {
    constructor(protected _name: string, protected _age: number) { }

    print(): void {
        console.log(this._name + ' is ' + this._age + ' years old.')
    }

    protected printName = (): void => {
        console.log(`name is ${this._name}`)
    }

    protected printAge = (): void => {
        console.log(`age is ${this._age}`)
    }
}

class Child extends Parent {
    constructor(age: number) {
        super('Mark Jr', age)

        this.printName()
        this.printAge()
    }
}

const p: Child = new Child(1)
// name is Mark Jr
// age is 1

/*
1. 생성자를 정의하고, this를 사용하려면, super를 통해 부모의 생성자를 호출해줘야 한다.
2. super를 호출할 때는 부모 생성자의 입력 타입이 같아야 한다.
3. super를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
4. protected 함수를 호출해서 그 안의 private을 출력하는 것에 주의한다.
*/

```
