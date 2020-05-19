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

