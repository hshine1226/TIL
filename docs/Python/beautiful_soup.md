# BeautifulSoup으로 크롤링 해보기

[Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)에서 문서를 참고할 수 있다.

## 설치법

### 패키지 매니저를 통해서 설치하기

```shell
apt-get install python3-bs4
```

## 사용법

일단 사용하기 전에 BeautifulSoup을 import 해준다.

그리고 html 파일이 필요한데, 우리는 웹 페이지의 정보를 크롤릴 해볼 것이기 때문에 requests를 이용해서 html 정보를 받아올 것이다.

따라서 `requests`역시 import 해준다.

``` python
import os
import requests
from bs4 import BeautifulSoup

# requests.get(url).content을 통해서 request를 통해 html을 받아올 수 잇다.
os.system('clear')
url = "https://www.iban.com/currency-codes"
r = requests.get(url)
html_doc = r.content

# 그리고 BeautifulSoup을 통해서 해당 html을 받아올 수 있다.
soup = BeautifulSoup(html_doc, 'html.parser')
```

### find(), find_all()

find_all() 메소드는 모든 문서의 결과들을 스캔한다. 

만약 문서의 모든 title 태그를 스캔하고 싶다면 다음과 같이 스캔할 수 있다.

`find_all('title')`

find_all()이 모든 문서의 결과들을 스캔한다면, find()는 문서의 하나의 결과만 스캔한다.

## .string

만약 어떠한 태그에 `.string`을 달아준다면 그 태그가 가지고 있는 스트링만을 반환한다.

``` python
markup = '<a href="http://example.com/">I linked to <i>example.com</i></a>'
soup = BeautifulSoup(markup)

tag = soup.a
print(tag.string)
# I linked to example.com
```



