# 파일 다운받는 창 만들기

## 사용방법

```python
from flask import send_file
```

파일 저장을 원하는 함수 return에서 아래와 같이 작성해주면 된다.

```python
return send_file("불러올 파일명.csv", attachment_filename="저장할 파일명.csv", as_attachment=True)
```
