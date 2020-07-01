# 5. Insertion sort(삽입 정렬)

## 1. 삽입 정렬(Insertion sort)란?

- 삽입 정렬은 두 번째 인덱스부터 시작한다.
- 해당 인덱스(Key)값 앞에 있는 데이터(B)부터 비교해서 Key값이 더 작으면, B 값을 뒤의 인덱스로 복사한다.
- 이를 Key 값이 더 큰 데이터를 만날때까지 반복한다.
- 그리고 큰 데이터를 만난 위치 바로 뒤에 Key값을 이동한다.

[Visualgo](https://visualgo.net/en/sorting)에서 눈으로 확인해보자

![Insertion sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

## 2. 어떻게 코드로 만들까

- 데이터가 네 개 일때(데이터 갯수에 따라 복잡도가 떨어지는 것은 아니므로, 네 개로 바로 로직을 이해해보자.)
  - 예: data_list = [9, 3, 2, 5]
    - 첫 번째 실행 시, 인덱스 1이 인덱스 0보다 작으므로 자리 바꾸고 끝. [3, 9, 2 ,5]
    - 두 번째 실행 시, 인덱스 2가 인덱스 1보다 작으므로 자리 바꾸고, 다시 1이 0보다 작으니 자리바꾸고 끝. [2, 3, 9, 5]
    - 세 번째 실행시, 인덱스 3은 인덱스 2보다 크므로 자리 바꾸지 않고 끝. [2, 3, 9, 5]
    - 네 번째 실행시 , 인덱스 4가 인덱스 3보다 작으므로 자리바꾸고, 인덱스 3이 인덱스 2보다 크므로 끝. [2, 3, 5, 9]

## 3. 알고리즘 구현

``` python
def insertion_sort(data):
    for index in range(1, len(data)):
        for index2 in range(index, 0, -1):
            if data[index2] < data[index2 - 1]:
                data[index2], data[index2 - 1] = data[index2 - 1], data[index2]
            else:
                break
    return data
```

## 4. 테스트 코드 

``` python
import random

data_list = random.sample(range(100), 50)
print(insertion_sort(data_list))
```

## 5. 알고리즘 분석

- 반복문이 두 개 $O(n^2)$
  - 최악의 경우, $n*(n-1)/2$
- 완전 정렬이 되어있는 상태라면, 최선은 O(n)



