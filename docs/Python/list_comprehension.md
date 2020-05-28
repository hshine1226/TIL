# List Comprehension

## 사용법

```python
[출력표현식 for 요소 in 입력Sequence (if 조건식)]
```

- 입력Sequence는 Iteration이 가능한 데이터 Sequence 혹은 컬렉션이다.
- (if 조건식)에서 ( )는 괄호가 아니라 옵션이라는 뜻이다. 즉, 조건이 있을 때만 넣으념 된다는 것이다.

```python
# 예시: 종류가 다른 데이터에서 정수 리스트만 가져오기
dataset = [4, True, 'Ludi', 2.1, 3]
int_data = [num for num in dataset if type(num)==int]
```

```python
# 출력표현식을 num*num으로 바꿔보자.
int_square_data = [num*num for num in dataset if type(num)==int]
int_square_data
# 출력: [16, 9]
```

## 연습

```python
# List Comprehension을 이용해서 1~100까지의 숫자 리스트 만들기
dataset = [i for i in range(1, 101)]
dataset
```

```python
# List Comprehension을 이용해서 1~100까지의 숫자 중 3으로 나누어 떨어지는 수만 리스트로 만들기
dataset = [i for i in range(1, 101) if i % 3 == 0]
dataset
```

```python
# List Comprehension을 이용해서 1~100까지의 숫자 중 3 또는 7로 나누어 떨어지지 않는 수만 출력하기
# 같은 루프 레벨에 여러 조건이 있으면 암시적으로 or 표현이 된다.
dataset = [i for i in range(1 ,101) if not i % 3 == 0 if not i % 7 == 0]
print(dataset)
```
