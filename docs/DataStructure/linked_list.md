# 5. Linked List(연결 리스트)

## 1. Linked list(연결 리스트) 구조

- 연결 리스트라고도 불린다.
- 배열은 순차적으로 연결된 공간에 데이터를 나열하는 구조이지만, 링크드 리스크는 떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조이다.
- <font color="red">파이썬에서는 링크드 리스트의 기능 모두 지원</font>

## 2. Linked list 기본 구조와 용어

- 노드(Node): 데이터 저장 단위로서 <데이터값, 포인터>로 구성
- 포인터(Pointer): 각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간

### 일반적인 링크드 리스트 형태

<img src="https://www.fun-coding.org/00_Images/linkedlist.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)

## 3. 간단한 링크드 리스트 예

### Node 구현

- 보통 파이썬에서는 링크드 리스트 구현시, 클래스를 활용한다.

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
```

### Node와 Node 연결하기

```python
node1 = Node(1)
node2 = Node(2)
node1.next = node2
# 링크드 리스트에는 헤더가 존재한다.(시작하는 지점)
head = node1
```

### 데이터 추가하기

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
def add(data):
    node = head
    # 노드가 포인터를 가지지 않을 때까지 탐색한다.
    while node.next:
        node = node.next
    node.next = Node(data)

node1 = Node(1)
head = node1
for index in range(2, 10):
    add(index)
```

### 데이터 출력하기

```python
node = head
while node.next:
    print(node.data)
    node = node.next
print(node.data)

# 결과:
'''
1
2
3
4
5
6
7
8
9
'''
```

## 4. 링크드 리스트의 장단점

- 장점
  - 미리 데이터 공간을 할당하지 않아도 된다.
- 단점
  - 연결을 위한 별도 데이터 공간(포인터를 저장할 공간)이 필요하므로, 저장공간 효율이 높지 않다.
  - 연결 정보를 찾는 시간이 필요하므로 접근 속도가 느리다.
  - 중간 데이터 삭제시, 앞뒤 데이터의 연결을 재구성해야 하는 부가적인 작업이 필요하다.

## 5. 링크드 리스트의 복잡한 기능

### 1. 링크드 리스트 데이터 사이에 데이터를 추가하는 기능

- 링크드 리스트는 유지 관리에 부가적인 구현이 필요하다.

<img src="https://www.fun-coding.org/00_Images/linkedlistadd.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class NodeMgmt:
    def __init__(self, data):
        self.head = Node(data)
	def add(self, data):
        if self.head == '':
            self.head = Node(data)
		else:
            node = self.head
            while node.next:
                node = node.next
			node.next = Node(data)
	def desc(self):
        node = self.head
        while node:
            print(node.data)
            node = node.next
```

### 2. 링크드 리스트의 특정 노드를 삭제하는 기능

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class NodeMgmt:
    def __init__(self, data):
        self.head = Node(data)

    def add(self, data):
        if self.head == '':
            self.head = Node(data)
        else:
            node = self.head
            while node.next:
                node = node.next
            node.next = Node(data)

    def desc(self):
        node = self.head
        while node:
            print (node.data)
            node = node.next

    def delete(self, data):
        if self.head.data == '':
            print("Does not exsist")
            return
        if self.head.data == data:
            temp = self.head
            self.head = self.head.next
            del temp
        else:
            node = self.head
            while node.next:
                if node.next.data == data:
                    temp = node.next
                    node.next = node.next.next
                    del temp
                else:
                    node = node.next
```

## 6. 더블 링크드 리스트(Doubly Linked List)

- 더블 링크드 리스트(Doubly Linked List)의 기본 구조
  - 이중 연결 리스트라고도 한다.
  - 장점: 양방향으로 연결되어 있어서 노드 탐색이 양쪽으로 모두 가능하다.

<img src="https://www.fun-coding.org/00_Images/doublelinkedlist.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)

```python
class Node:
    def __init__(self, data, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next

class NodeMgmt:
    def __init__(self, data):
        # 일반 링크드 리스트와는 달리 tail이 존재한다.
        self.head = Node(data)
        self.tail = self.head

    def insert(self, data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
        else:
            node = self.head
            while node.next:
                node = node.next
            new = Node(data)
            node.next = new
            new.prev = node
            self.tail = new

    def desc(self):
        node = self.head
        while node:
            print(node.data)
            node = node.next
```

### 연습1: 위 코드에서 노드 데이터가 특정 숫자인 노드 앞에 데이터를 추가하는 함수를 만들고, 테스트해보기

- 더블 링크드 리스트의 tail 에서부터 뒤로 이동하며, 특정 숫자인 노드를 찾는 방식으로 함수를 구현하기
- 테스트: 임의로 0 ~ 9까지 데이터를 링크드 리스트에 넣어보고, 데이터 값이 2인 노드 앞에 1.5 데이터 값을 가진 노드를 추가해보기

```python
def insert_before(self, data, before_data):
    if self.head == None:
        self.head = Node(data)
        return True
    else:
        node = self.tail
        while node.data != before_data:
            node = node.prev
            if node == None:
                return False
            new = Node(data)
            before_new = node.prev
            before_new.next = new
            new.prev = before_new
            new.next = node
            node.prev = new
            return True
```

```python
# 기존 리스트 순서: 0 1 2 3 4 5 6 7 8 9
double_linked_list.insert_before(1.5, 2)
double_linked_list.desc()
# 결과: 0 1 1.5 2 3 4 5 6 7 8 9
```

### 연습2: 위 코드에서 노드 데이터가 특정 숫자인 노드 뒤에 데이터를 추가하는 함수를 만들고, 테스트해보기

- 더블 링크드 리스트의 head 에서부터 다음으로 이동하며, 특정 숫자인 노드를 찾는 방식으로 함수를 구현하기
- 테스트: 임의로 0 ~ 9까지 데이터를 링크드 리스트에 넣어보고, 데이터 값이 1인 노드 다음에 1.7 데이터 값을 가진 노드를 추가해보기

```python
def insert_after(self, data, after_data):
    if self.head == None:
        self.head = Node(data)
        return True
    else:
        node = self.head
        while node.data != after_data:
            node = node.next
            if node == None:
                return False
            after_new = node.next
            new = Node(data, prev=node, next=after_new)
            after_new.prev = new
            node.next = new
            if new.next == None:
                self.tail = new
                return True
```

```python
# 기존 리스트 순서: 0 1 2 3 4 5 6 7 8 9
node_mgmt.insert_after(1.5, 1)
node_mgmt.desc()
# 결과: 0 1 1.5 2 3 4 5 6 7 8 9
```
