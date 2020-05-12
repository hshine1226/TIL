# HTML에서 Data 받아오는 방법

HTML에서 input 값으로 전달한 data를 python에서 받아오려면, Flask의 Rendering Templates을 이용하면 된다.

```python
from flask import request

@app.route('/report')
def report():
    word = request.args.get('word')
```

위의 코드처럼 request의 arguments에서 'word'라는 name을 가진 data를 받아올 수 있다.
