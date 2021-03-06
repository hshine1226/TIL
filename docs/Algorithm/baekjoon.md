# 백준 알고리즘 문제풀이

## 2798 블랙잭

### 문제

카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다.

한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다.

김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다.

이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.

N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

### 입력

첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는다.

합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

### 출력

첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.

### 풀이

문제에서 N장의 카드 중에서 3장을 골랐을 때, 그 수가 M을 초과하지 않는 최대값을 구하라고 했다.

먼저 모든 경우의 수를 계산해보자.

모든 조합은 다음과 같다. $_100 C _3 = 100 * 99 * 98 / 3! $

이것을 계산해보면 161,700이 나오는데 이정도의 수는 python이 1초에 2000만번 계산을 수행함을 봤을 때, **완전탐색**으로도 충분히 풀수 있는 문제라는 것을 알 수 있다.

```python
n, m = list(map(int, input().split(" ")))
cards = list(map(int, input().split(" ")))

result = 0
length = len(cards)
for i in range(0, length):
    for j in range(i + 1, length):
        for k in range(j + 1, length):
            sum_value = cards[i] + cards[j] + cards[k]
            if sum_value <= m:
                result = max(result, sum_value)

print(result)
```



## 1874 스택수열

### 문제

스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다. 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.

### 입력

첫 줄에 n (1 ≤ n ≤ 100,000)이 주어진다. 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다. 물론 같은 정수가 두 번 나오는 일은 없다.

### 출력

입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.

### 풀이

1. 원소를 삽입할 때는, data를 입력받고 그 data에 도달할 때까지 stack에 number를 push한다.
2. 원소를 빼낼 때는, 스택의 최상위 원소와 현재 입력 data의 값이 같다면 pop한다.

``` python
n = eval(input())
stack = []
result = []
flag = True
count = 1

for i in range(1, n + 1):
    data = eval(input())
    
    while count <= data:
        stack.push(count)
        count += 1
        result.append("+")
	
    if stack[-1] == data:
        stack.pop()
        result.append("-")
	else:
        print("NO")
        flag = False
        break

if flag:
	print("\n".join(result))

        
```



## 1966 프린터 큐

### 문제

여러분도 알다시피 여러분의 프린터 기기는 여러분이 인쇄하고자 하는 문서를 인쇄 명령을 받은 ‘순서대로’, 즉 먼저 요청된 것을 먼저 인쇄한다. 여러 개의 문서가 쌓인다면 Queue 자료구조에 쌓여서 FIFO - First In First Out - 에 따라 인쇄가 되게 된다. 하지만 상근이는 새로운 프린터기 내부 소프트웨어를 개발하였는데, 이 프린터기는 다음과 같은 조건에 따라 인쇄를 하게 된다.

1. 현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
2. 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 그렇지 않다면 바로 인쇄를 한다.

예를 들어 Queue에 4개의 문서(A B C D)가 있고, 중요도가 2 1 4 3 라면 C를 인쇄하고, 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.

여러분이 할 일은, 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때, 어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것이다. 예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.

### 입력

첫 줄에 test case의 수가 주어진다. 각 test case에 대해서 문서의 수 N(100이하)와 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue의 어떤 위치에 있는지를 알려주는 M(0이상 N미만)이 주어진다. 다음줄에 N개 문서의 중요도가 주어지는데, 중요도는 1 이상 9 이하이다. 중요도가 같은 문서가 여러 개 있을 수도 있다. 위의 예는 N=4, M=0(A문서가 궁금하다면), 중요도는 2 1 4 3이 된다.

### 출력

각 test case에 대해 문서가 몇 번째로 인쇄되는지 출력한다.

### 풀이

이 문제는 간단히 해당 문제의 조건을 그대로 구현만 하면 되는 문제이다.

1. 큐의 맨 앞의 값의 우선순위가 가장 높을 때 pop을 한다.
   1. 만약 m과 해당 index가 같다면 몇 번째로 pop을 했는지를 출력하고 끝낸다.
2. 우선순위가 가장 높지 않다면 큐의 맨 뒤로 보낸다.

``` python
testCase = eval(input())

for _ in range(testCase):
    n, m = list(map(int, input().split()))
    queue = list(map(int, input().split()))
    # 각각의 우선순위가 어디 있는지 위치를 확인하기 위해서 enumerate를 이용해 index를 포함한 튜플로 만들어준다.
    queue = list(enumerate(queue))
    count = 0
    while True:
        # 큐의 맨 앞이 가장 큰 우선순위이면 pop해준다.
        if queue[0][0] == max(queue, key = lambda x: x[1])[0]:
        	count += 1
            # 만약 그 값의 index가 m과 같다면 count를 출력하고 while문을 끝낸다.
            if queue[0][0] == m:
                print(count)
                break
            queue.pop(0)
        # 큐의 맨 앞이 가장 큰 우선순위가 아니면 그 값을 큐의 맨 뒤로 보낸다.
		else:       
            queue.append(queue.pop(0))
```



## 5397 키로거

### 문제

창영이는 강산이의 비밀번호를 훔치기 위해서 강산이가 사용하는 컴퓨터에 키로거를 설치했다. 며칠을 기다린 끝에 창영이는 강산이가 비밀번호 창에 입력하는 글자를 얻어냈다.

키로거는 사용자가 키보드를 누른 명령을 모두 기록한다. 따라서, 강산이가 비밀번호를 입력할 때, 화살표나 백스페이스를 입력해도 정확한 비밀번호를 알아낼 수 있다.

강산이가 비밀번호 창에서 입력한 키가 주어졌을 때, 강산이의 비밀번호를 알아내는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한줄로 이루어져 있고, 강산이가 입력한 순서대로 길이가 L인 문자열이 주어진다. (1 ≤ L의 길이 ≤ 1,000,000) 강산이가 백스페이스를 입력했다면, '-'가 주어진다. 이때 커서의 바로 앞에 글자가 존재한다면, 그 글자를 지운다. 화살표의 입력은 '<'와 '>'로 주어진다. 이때는 커서의 위치를 움직일 수 있다면, 왼쪽 또는 오른쪽으로 1만큼 움직인다. 나머지 문자는 비밀번호의 일부이다. 물론, 나중에 백스페이스를 통해서 지울 수는 있다. 만약 커서의 위치가 줄의 마지막이 아니라면, 그 문자를 입력하고, 커서는 오른쪽으로 한 칸 이동한다.

### 출력

각 테스트 케이스에 대해서, 강산이의 비밀번호를 출력한다. 비밀번호의 길이는 항상 0보다 크다.

### 풀이

이 문제는 스택의 활용법을 증명할 수 있는 문제였다. 처음에는 스택 하나로만 구현하려고 했었는데, 그러다 보니까 커서의 위치를 저장하기 위한 변수도 따로 관리해야하고 구현하기가 까다로웠다.

하지만 생각을 조금 바꿔서 스택을 두개 사용한다면 다음과 같이 알고리즘을 구현할 수 있다.

1. 데이터 삽입 시, 오른쪽 스택에 push
2. 데이터 삭제 시, 오른쪽 스택의 pop
3. 커서 왼쪽 이동 시, 왼쪽 스택 pop -> 오른쪽 스택 push
4. 커서 오른쪽 이동 시, 오른쪽 스택 pop -> 왼쪽 스택 push

``` python
testCase = eval(input())

for _ i in range(testCase):
    string = list(input())
    leftStack = list()
    rightStack = list()
    
    for word in string:
        if word == "<":
            if leftStack:
                rightStack.append(leftStack.pop())
		elif word == ">":
            if rightStack:
                leftStack.append(rightStack.pop())
		elif word == "-":
            if leftStack:
                leftStack.pop()
		else:
            leftStack.append(word)
            
	leftStack.extend(reversed(rightStack))
    print("".join(leftStack))
```



## 10930 SHA-256

### 문제

문자열 S가 주어졌을 때, SHA-256 해시값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 문자열 S가 주어진다. S는 알파벳 대문자와 소문자, 그리고 숫자로만 이루어져 있으며, 길이는 최대 50이다.

### 출력

첫째 줄에 S의 SHA-256 해시값을 출력한다.

### 풀이

이 문제는 정말 간단하다. python의 라이브러리 중에서 hashlib 라이브러리의 sha256 함수를 이용하면 간단하게 SHA-256 해시값을 구할 수 있다.

``` python
import hashlib
s = input()
print(hashlib.sha256(s.encode()).hexdigest())
```



## 1920 수 찾기

### 문제

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

### 입력

첫째 줄에 자연수 N(1≤N≤100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1≤M≤100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

### 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다

### 풀이

해당 문제는 해시 자료구조를 이용할  수 있는지에 대한 문제이다.

파이썬에서 해시 자료구조를 이용하려면 dictionary, set 자료형을 이용할 수 있다.

만약 이 문제에서 list를 이용해서 풀이를 한다면 시간초과가 나게 될 것이다.

``` python
# Dictionary 자료형 풀이
n = eval(input())
input_data = map(int, input().split())

dictionary = {}

for data in input_data:
    dictionary[data] = True

m = eval(input())
input_data = map(int, input().split())

for data in input_data:
    if data in dictionary:
        print(1)
    else:
        print(0)
```

``` python
# set 자료형 풀이
n = eval(input())
input_data = set(map(int, input().split()))

m = eval(input())
check_data = map(int, input().split())

for data in check_data:    
    if data in input_data:
        print(1)
    else:
        print(0)
```

