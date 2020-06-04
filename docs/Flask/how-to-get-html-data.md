# HTML에서 Data 받아오는 방법

HTML에서 input 값으로 전달한 data를 python에서 받아오려면, Flask의 Rendering Templates을 이용하면 된다.

```python
from flask import request

@app.route('/report')
def report():
    word = request.args.get('word')
```

위의 코드처럼 request의 arguments에서 'word'라는 name을 가진 data를 받아올 수 있다.



또 다른 예제이다.

아래와 같은 html form에서 get 방식으로 보낸 데이터의 value 값을 Flask의 `request.args.get(name)`을 이용해서 받아올 수 있다.

``` html
<form method="get" action="/read">
    <ul>
        <li>
            <input type="checkbox" id="data" name="javascript" value="on">
            <label for="data">JavaScript</label><br>
        </li>
    </ul>
    <button type="submit">Submit</button>            
</form>

```

``` python
result = request.args.get("javascript")
result # "on"
```


