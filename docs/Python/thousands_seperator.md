# 1000단위마다 ',' 넣는 방법

## 사용법

``` python
'{:,}'.format(value)  # For Python ≥2.7
f'{value:,}'  # For Python ≥3.6
```



## 예시

``` python
amount = 500000
amount # 500000
print(f"{amount:,}") # 5,000,000
```

