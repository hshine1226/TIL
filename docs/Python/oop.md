# 객체지향 프로그래밍

파이썬은 객체지향 프로그래밍(OOP, Object Oriented Programming)을 지원한다.

파이썬에서 클래스를 만들기 위해서는 아래와 같이 "class 클래스명"을 사용해서 정의한다.

```python
Class 클래스명():
내용
```

자동차 Class를 정의하는 한 가지 예제를 보자.

```python
class Car():
    wheel = 4
    doors = 4
    windows = 4
    seats = 4

    def start(self):
        print(f"The color of Porche is {self.color}")
        print("I started")

porche = Car()
porche.color = "Red"
porche.start()

ferrari = Car()
ferrari.color = "Blue"
ferrari.start()
```

자동차 클래스(Class) 정의

```shell
The color of Porche is Red
I started
The color of Porche is Blue
I started
```

결과창

Class Car(): 를 통해서 자동차 클래스를 정의한다.

그 내부에는 wheels, doors, windows, seats의 네 가지 속성(Attribute)가 있다. 이 Attribute는 모든 Car instance들이 공통으로 가지게 되는 속성이다.

```python
def start(self):
    print(f"The color of Porche is {self.color}")
    print("I started")
```

Car 클래스(Class)의 메서드(Method) start 함수(function)

그리고 위의 start 함수(function)을 보자. 이것은 함수(function)이다. 하지만 클래스 내부에 함수가 정의되어 있으면 그 함수는 메서드(Method)라고 불린다.

따라서 이 start 함수는 Car 클래스의 메서드이다.

```python
porche = Car()
porche.color = "Red"
porche.start()

ferrari = Car()
ferrari.color = "Blue"
ferrari.start()
```

Car 클래스(Class)의 인스턴스(Instances)

위는 Car 클래스(Class)의 인스턴스(Instance)를 정의하고, 그 인스턴스의 속성, 메서드를 실행시키는 부분이다.

위의 부분에서는 porche와 ferrari 두 개의 인스턴스를 생성한것이다.

그리고 각각의 인스턴스의 color 속성(Attribute)를 지정하고, start 메서드(Method)를 호출한다.

인스턴스란 클래스에 의해 만들어진 객체이다. (쉽게 설명하면 클래스의 클론이다.) 또한 이 인스턴스는 위와 같이 속성(Attribute)를 참조할 수 있다. 또한 메서드(Method)를 불러와 메서드가 정의하는 기능을 수행할 수도 있다.

```python
def start(self):
    print(f"The color of Porche is {self.color}")
    print("I started")
```

호출된 메서드의 Argument

Instance를 생성하고, method를 호출하게 되면, 호출된 method의 첫 번째 Argument(self)는 그 메소드를 호출한 instance가 된다.

즉 porche 인스턴스가 start method를 호출하게 되면 start method의 첫 번째 argument, 즉 self는 porche를 가리키게 되는 것이다.
