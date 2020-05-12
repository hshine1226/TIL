# Rendering Templates

Flask를 통해서 templates을 render하려면 render_template() methode를 사용하면 된다.

## 사용방법

template의 이름과 keyword arguments로 전달하고자 하는 variables을 template에 넘겨준다.

```python
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

```
