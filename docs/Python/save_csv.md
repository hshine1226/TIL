# 파이썬에서 CSV 파일 저장하기

## 1. CSV 파일

CSV란 Comma-separated values의 약자로서 CSV 파일은 각 라인의 컬럼들이 콤마로 분리된 텍스트 파일 포맷이다. 가장 간단한 형태의 CSV 파일은 문자열을 콤마로 Split하여 처리하면 되지만, 간혹 컬럼 데이터에 콤마가 있을 경우 이중인용부호로 감싸서 데이터 내의 콤마를 Escape하기 때문에 파이썬에 내장된 CSV 모듈을 사용하여 처리하는 것이 좋다.

## 2. CSV 파일 읽기

CSV 파일을 읽기 위해서는 먼저 파이썬에 기본 내장된 csv 모듈을 import 한다. 다음 .csv 파일을 오픈하고 파일 객체를 csv.reader(파일객체)에 넣으면 된다. 

csv.reader()함수는 Iterator 타입인 reader 객체를 리턴하므로 for 루프를 돌며 한 라인씩 가져올 수 있다. 이 때 리턴되는 각 라인은 컬럼들을 나열한 리스트 타입이다.

아래 예제는 `data.csv`라는 CSV 파일을 읽어 각 라인을 출력하는 예이다.

``` python
import csv
file = open('data.csv', mode='r', encoding='utf-8')
reader = csv.reader(file)
for line in reader:
    print(line)
file.close()
```

``` shell
(입력 : data.csv 파일 내용)
1,김정수,2017-01-19 11:30:00,25
2,박민구,2017-02-07 10:22:00,35
3,정순미,2017-03-22 09:10:00,33

(출력)
['1', '김정수', '2017-01-19 11:30:00', '25']
['2', '박민구', '2017-02-07 10:22:00', '35']
['3', '정순미', '2017-03-22 09:10:00', '33']    
```

## 3. CSV 파일 쓰기

CSV 파일을 쓰기 위해서는 .csv파일을 쓰기 모드로 오픈하고, 파일 객체를 csv.writer에 넣으면 된다. CSV writer는 writerow()라는 메서드를 통해서 list 데이터를 한 라인 추가하게 된다.

아래 예제는 output.csv라는 CSV 파일에 라인을 추가하는 예이다.

``` python 
import csv

file = open(f'{word}.csv', mode='w')
writer = csv.writer(file)
writer.writerow(['location', 'company', 'time', 'pay', 'date'])
writer.writerow(['세종 아름동', '노브랜드 세종아름점', '08:00~22:00', '9700', '2분전'
])
writer.writerow(['세종 아름동', '노브랜드 세종 아름점', '08:00~22:00
', '9700', '2분전'])

file.close()
```

