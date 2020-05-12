# HTTP Methods

Flask에서 route는 오직 GET requests에만 응답한다.

당신은 route() decorator의 메소드 argument를 다른 HTTP 메소드를 다루기 위해 사용할 수 있다.

```python
from flask import request

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```
