# Arrow function(화살표 함수)

``` js
// 기존 function
function hello() {
    return "hello"
}
```

``` js
// 암시적 return을 가지고 있기 때문에 return을 적어줄 필요가 없다.
hello = () => "Hello"

// 대괄호를 적어주면 암시적 성격을 잃어버리기 때문에 return을 적어줘야 한다.
hello = () => {
    return "Hello"
}
```

## default parameter

parameter에 어떤 값도 들어오지 않았을 때를 대비해서 아래와 같이 default value를 줄 수 있다.

이 기능은 arrow function에서 뿐만 아니라 일반 function에서도 사용 가능하다.

``` js 
const sayHello = (name = "JUNHYUK") => "Hello " + name;
```

## 즉시실행하지 않게 매개변수 보내기

이벤트 리스너의 콜백 함수를 통해서 매개변수를 같이 보낼 때, 함수가 즉시 실행되는 문제가 있었다.

기존의 매개변수 보내는 방법은 다음과 같았다.

`handleClickListener(marker)`

해결 방법은 다음과 같다.

`() => handleClickListener(marker)`

``` js
kakao.maps.event.addListener(marker, "click", () =>
	handleClickListener(marker)
);

const handleClickListener = (marker) => {
	console.log(marker);
};
```

