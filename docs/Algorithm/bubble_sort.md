# 3. Bubble sort(버블 정렬)

## 1. 정렬(Sorting)이란?

- 정렬(Sorting): 어떤 데이터들이 주어졌을 때 이를 정해진 순서대로 나열하는 것
- 정렬은 프로그램 작성시 빈번하게 필요로 한다.
- 다양한 알고리즘이 고안되었으며, 알고리즘 학습의 필수이다.

> 다양한 정렬 알고리즘을 이해를 통해, 동일한 문제에 대해 다양한 알고리즘이 고안될 수 있음을 이해하고, 각 알고리즘간 성능 비교를 통해, 알고리즘 성능 분석에 대해서도 이햏할 수 있다.

## 2. 버블 정렬(Bubble sort)란?

- 두 인접한 데이터를 비교해서, 앞에 있는 데이터가 뒤에 있는 데이터보다 크면, 자리를 바꾸는 정렬 알고리즘

[Visualgo Sorting](https://visualgo.net/en/sorting)에서 직접 동작 방식을 확인해보자!

![Bubble sort gif](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

> 출처: https://en.wikipedia.org/wiki/Bubble_sort

## 3. 어떻게 코드로 만들까?

> 데이터가 두 개일 때 버블 정렬 알고리즘 방식으로 정렬해보자.

> 데이터가 세 개일 때 버블 정렬 알고리즘 방식으로 정렬해보자.

> 데이터가 네 개일 때 버블 정렬 알고리즘 방식으로 정렬해보자.

## 4. 알고리즘 구현

- **특이점 찾아보기**
  - n개의 리스트가 있는 경우 최대 n-1번의 로직을 적용한다.
  - 로직을 1번 적용할 때마다 가장 큰 숫자가 뒤에서부터 1개씩 결정된다.
  - 로직이 경우에 따라 일찍 끝날 수도 있다. 따라서 로직을 적용할 때 한 번도 데이터가 교환된 적이 없다면 이미 정렬된 상태이므로 더이상 로직을 반복할 필요가 없다.

```python
def bubble_sort(data):
    for index in range(len(data)-1):
        for index2 in range(len(data) - 1 - index):
            swap = False
            if data[index2] > data[index2 + 1]:
                data[index2], data[index2 + 1] = data[index2 + 1], data[index2]
                swap = True
        if swap == False:
            break
	return data
```

## 5. 테스트 코드

```python
import random

data_list = random.sample(range(100), 50)
print(bubble_sort[data_list])
```

## 6. 알고리즘 분석

- 반복문이 두 개이다.
  - $O(n^2)$
- 최악의 경우, $n*(n-1)/2$
- 완전 정렬이 되어 있는 상태라면 최선은 $O(n)$
