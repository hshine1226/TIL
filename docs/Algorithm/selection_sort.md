# 4. Selection sort(선택정렬)

## 1. 선택 정렬(Selection sort)란?

- 다음과 같은 순서를 반복하며 정렬하는 알고리즘이다.

1. 주어진 데이터 중에서 최소값을 찾는다.
2. 해당 최소값을 데이터 맨 앞에 위치한 값과 교체한다.
3. 맨 앞의 위치를 뺀 나머지 데이터들을 동일한 방법으로 반복한다.

![Selection sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

> 출처: https://en.wikipedia.org/wiki/Selection_sort

## 2. 어떻게 코드로 만들까?

- 데이터가 두 개일 때,
  - 두 개의 데이터를 비교하고, 뒤의 값이 더 작으면 서로 교환한다.
- 데이터가 세 개일 때
  - 예: data_list = [9, 1, 7]
    - 처음 실행시 결과: [1, 9, 7]
    - 두 번째 실행시 결과: [1, 7, 9]
- 데이터가 네 개일 때
  - 예: data_list = [9, 3, 2, 1]
    - 처음 실행시 결과: [1, 3, 2, 9]
    - 두 번째 실행시 결과: [1, 2, 3, 9]
    - 세 번째 실행시 결과 변화 없음

## 3. 알고리즘 구현

``` python
def selection_sort(data_list):
    for stand in range(len(data_list) - 1):
        lowest = stand
        for index in range(stand+1, len(data_list)):
            if data_list[lowest] > data_list[index]:
                lowest = index
        data_list[stand], data_list[lowest] = data_list[lowest], data_list[stand]
    return data_list
```

## 4. 테스트 코드

``` python
import random 
data_list = random.sample(range(100), 10)

selection_sort(data_list)
```

## 5. 알고리즘 분석

- 반복문이 두 개 $O(n^2)$
  - 실제로 상세하게 계산하면, $n*(n-1)/2$