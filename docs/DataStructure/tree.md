# 7. Tree(트리)

트리는 면접에서도 단골 질문이다. 잘 알아두자!

## 1. 트리(Tree) 구조

- 트리: Node, Branch를 이용해서 사이클을 이루지 않도록 구성한 데이터 구조이다.
- 트리 중에서 가장 많이 쓰이는 구조는 이진트리 구조이다.
- 트리는 탐색(검색) 알고리즘 구현을 위해서 많이 쓰인다.

## 2. 알아둘 용어

- Node: 트리에서 데이터를 저장하는 기본 요소이다.(데이터와 연결된 다른 노드에 대한 Branch 정보를 포함한다.)
- Root Node: 트리의 맨 위에 있는 노드이다.
- Level: 최상위 노드를 Level 0으로 했을 때, 하위 Branch로 연결된 **노드의 깊이**를 나타낸다.
- Parent Node: 어떤 노드의 **다음 레벨**에 연결된 노드이다.
- Child Node: 어떤 노드의 **상위 레벨**에 연결된 노드이다.
- Leaf Node(Terminal Node): Child Node가 하나도 없는 노드이다.
- Sibling(Brother Node): 동일한 Parent Node를 가진 노드이다.
- Depth: 트리에서 Node가 가질 수 있는 최대 Level이다.

![이진트리 구조](http://www.fun-coding.org/00_Images/tree.png)

## 3. 이진 트리(Binary Tree)와 이진 탐색 트리(Binary Search Tree)

- 이진 트리(Binary Tree): 노드의 최대 Branch가 2인 트리이다.
- 이진 탐색 트리(Binary Search Tree, BST): 이진 트리에 다음과 같은 추가적인 조건이 있는 트리이다.
  - 왼쪽 노드는 해당 노드보다 작은 값을 저장하고, 오른쪽 노드는 해당 노드보다 큰 값을 저장한다.
  - 아래의 예시를 확인하자.

![이진탐색트리](https://www.mathwarehouse.com/programming/images/binary-search-tree/binary-search-tree-insertion-animation.gif)

(출처: https://www.mathwarehouse.com/programming/gifs/binary-search-tree.php#binary-search-tree-insertion-node)  

## 4. 자료구조 이진 탐색 트리의 장점과 주요 용도

장점: 탐색 속도를 개선할 수 있다.

단점: 구현하기 복잡하다.

주요 용도: 데이터 검색(탐색)

### 이진 트리와 정렬된 배열간의 탐색 비교

아래와 같이 이진 트리가 배열보다 데이터의 탐색 시간을 효율적으로 줄여준다.

![탐색 비교](https://www.mathwarehouse.com/programming/images/binary-search-tree/binary-search-tree-sorted-array-animation.gif)

(출처: https://www.mathwarehouse.com/programming/gifs/binary-search-tree.php#binary-search-tree-insertion-node)

## 5. 파이썬 객체지향프로그래밍 링크드 리스트를 활용해서 이진탐색트리 구현하기

### 이진탐색트리 삽입, 검색 구현하기

``` python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class NodeMgmt:
    def __init__(self, head):
        self.head = head
        
	def insert(self, value):
        self.current_node = self.head
        while True:
            if value < self.current_node.value:
                if self.current_node.left != None:
                    self.current_node = self.current_node.left
				else:
                    self.current_node.left = Node(value)
                    break
			else:
                if self.current_node.right != None:
                    self.current_node = self.current_node.right
                else: 
                    self.current_node.right = Node(value)
                    break
	def search(self, value):
        self.current_node = self.head
        while self.current_node:
            if self.current_node.value == value:
                return True
            elif value < self.current_node.value:
                self.current_node = self.current_node.left
            else:
                self.current_node = self.current_node.right
        return False
```

### 결과 확인

``` python
head = Node(1)
BST = NodeMgmt(head)
BST.insert(2)
BST.insert(3)
BST.insert(0)
BST.insert(8)

print(BST.search(0)) # True
print(BST.search(2)) # True
print(BST.search(-1)) # False
```

## 이진 탐색 트리 삭제

### 경우 1 Leaf Node 삭제

- Leaf Node: Child Node가 없는 Node
- 삭제할 Node의 Parent Node가 삭제할 Node를 가리키지 않도록 한다.

![Remove Leaf Node](http://www.fun-coding.org/00_Images/tree_remove_leaf.png)

### 경우 2 Child Node가 하나인 Node 삭제

- 삭제할 Node의 Parent 노드가 삭제할 Node의 Child Node를 가리키도록 한다.

![Remove 1 Child](http://www.fun-coding.org/00_Images/tree_remove_1child.png)

### 경우 3 Child Node가 두 개인 Node 삭제

경우3의 경우에는 방법이 두 가지로 나누어진다. 둘 다 같은 방법이므로 이 중에서 하나만 잘 기억하자!

1. **삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 삭제할 Node의 Parent Node가 가리키도록 한다.**
2. 삭제할 Node의 왼쪽 자식 중, 가장 큰 값을 삭제할 Node의 Parent Node가 가리키도록 한다.

![Remove 2 Child](http://www.fun-coding.org/00_Images/tree_remove_2child.png)

#### 방법 1 Flow

- 삭제할 Node의 오른쪽 Child Node를 선택
- 오른쪽 Child Node의 가장 왼쪽에 있는 Node를 선택
- 해당 Node를 삭제할 Node의 Parent Node의 왼쪽 Branch가 가리키게 함
- 해당 Node의 왼쪽 Branch가 삭제할 Node의 왼쪽 Child Node를 가리키게 함
- 해당 Node의 오른쪽 Branch가 삭제할 Node의 오른쪽 Child Node를 가리키게 함
- 만약 해당 Node가 오른쪽 Child Node를 가지고 있었다면, 해당 Node의 본래 Parent Node의 왼쪽 Branch가 해당 Node의 오른쪽 Child Node를 가리키게 함

## 이진 탐색 트리 삭제 코드 구현

### 삭제할 Node 탐색

- 삭제할 Node가 없는 경우도 처리해야 한다.
  - 이를 위해 삭제할 Node가 없는 경우는 False를 Return 하고, 함수를 종료시킨다.

``` python
def delete(self, value):
    searched = False
    self.current_node = self.head
    self.parent = self.head
    while self.current_node:
        if self.current_node.value == value:
            searched = True
            break
		elif value < self.current_node.value:
            self.parent = self.current_node
            self.current_node = self.current_node.left
        else:
            self.parent = self.current_node
            self.current_node = self.current_node.right
	
    if searched == False:
        return False
```

### Case1: 삭제할 Node가 Leaf Node인 경우

![Leaf Node Remove](http://www.fun-coding.org/00_Images/tree_remove_leaf_code.png)

``` python
	# self.current_node가 삭제할 Node이고, self.parent는 삭제할 Node의 Parent인 상태
    if self.current_node.left == None and self.current_node.right == None:
        if value < self.parent.value:
            self.parent.left = None
		else:
            self.parent.right = None
        del self.current_node        
```

### Case2: 삭제할 Node가 Child Node를 한 개 가지고 있을 경우

![Child 1 Node Remove](http://www.fun-coding.org/00_Images/tree_remove_1child_code.png)

``` python
	if self.current_node.left != None and self.current_node.right == None:
        if value < self.parent.value:
            self.parent.left = self.current_node.left
        else:
            self.parent.right = self.current_node.left
    elif self.current_node.left == None and self.current_node.right != None:
        if value < self.parent.value:
            self.parent.left = self.current_node.right
        else:
            self.parent.right = self.current_node.right
```

### Case3-1: 삭제할 Node가 Child Node를 두 개 가지고 있을 경우(삭제할 Node가 Parent Node 왼쪽에 있을 때)

- 기본 사용 가능 전략
  - 1. **삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 삭제할 Node의 Parent Node가 가리키도록 한다.**
    2. 삭제할 Node의 왼쪽 자식 중, 가장 큰 값을 삭제할 Node의 Parent Node가 가리키도록 한다.
- 기본 사용 가능 전략 중 1번 전략을 사용하여 코드를 구현하기로 한다.
  - 경우의 수 
    - Case3-1-1: 삭제할 Node가 Parent Node의 왼쪽에 있고, 삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 가진 Node의 오른쪽에 **Child Node가 없을 때**
    - Case3-1-2: 삭제할 Node가 Parent Node의 왼쪽에 있고, 삭제할 Node의 오른쪽 자식 중 , 가장 작은 값을 가진 Node의 오른쪽에 **Child Node가 있을 때**
      - 가장 작은 값을 가진 Node의 Child Node가 왼쪽에 있을 경우는 없다. 왜냐하면 왼쪽 Node가 있다는 것은 해당 Node보다 더 작은 값을 가진 Node가 있다는 뜻이기 때문이다.

![Case3-1](http://www.fun-coding.org/00_Images/tree_remove_2child_code_left.png)

``` python
	if self.current_node.left != None and self.current_node.right != None:
        if value < self.parent.value:
            self.change_node = self.current_node.right
            self.change_node_parent = self.current_node.right
            while self.change_node.left != None:
                self.change_node_parent = self.change_node
                self.chang_node = self.change_node.left
            if self.change_node.right != None:
                self.chang_node_parent.left = self.change_node.right
            else:
                self.chang_node_parent.left = None
            self.parent.left = self.change_node
            self.change_node.left = self.current_node.left
            self.change_node.right = self.current_node.right
```

### Case3-2: 삭제할 Node가 Child Node를 두 개 가지고 있을 경우(삭제할 Node가 Parent Node 오른쪽에 있을 때)

- 기본 사용 가능 전략
  - 1. **삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 삭제할 Node의 Parent Node가 가리키도록 한다.**
    2. 삭제할 Node의 왼쪽 자식 중, 가장 큰 값을 삭제할 Node의 Parent Node가 가리키도록 한다.
- 기본 사용 가능 전략 중, 1번 전략을 사용하여 코드를 구현하기로 함
  - 경우의 수
    - Case3-2-1: 삭제할 Node가 Parent Node의 오른쪽에 있고, 삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 가진 Node의 **Child Node가 없을 때**
    - Case3-2-2: 삭제할 Node가 Parent Node의 오른쪽에 있고, 삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 가진 Node의 **Child Node가 있을 때**
      - 가장 작은 값을 가진 Node의 Child Node가 왼쪽에 있을 경우는 없다. 왜냐하면 왼쪽 Node가 있다는 것은 해당 Node보다 더 작은 값을 가진 Node가 있다는 뜻이기 때문이다.

![Case3-2](http://www.fun-coding.org/00_Images/tree_remove_2child_code_right.png)

``` python
	else:
        self.change_node = self.current_node.right
        self.chang_node_parent = self.current_node.right
        while self.chang_node.left != None:
            self.change_node_parent = self.change_node
            self.change_node = self.change_node.left
     	if self.change_node.right != None:
            self.change_node_parent.left = self.change_node.right
        else:
            self.change_node_parent.left = None
        self.parent.right = self.change_node
        self.change_node.left = self.current_node.left
        self.change_node.right = self.current_node.right
```

## 전체 코드 구현

``` python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class NodeMgmt:
    def __init__(self, head):
        self.heaf = head
    
   	def insert(self, value):
        self.current_node = self.head
        while True:
            if value < self.current_node.value:
                if self.current_node.left != None:
                    self.current_node = self.current_node.left
                else:
                    self.current_node.left = Node(value)
                    break
            else:
                if self.current_node.right != None:
                    self.current_node = self.current_node.right
                else:
                    self.current_node.right = Node(value)
                    break
	
    def search(self, value):
        self.current_node = self.head
        while self.current_node:
            if self.current_node.value == value:
                return True
            elif value < self.current_node.value:
                self.current_node = self.current_node.left
            else:
                self.current_node = self.current_node.right
        return False
    
    def delete(self, value):
        # 삭제할 노드 탐색
        searched = False
        self.current_node = self.head
        self.parent = self.head
        while self.current_node != None:
            if self.current_node.value == value:
                searched = True
                break
            elif value < self.current_node.value:
                self.parent = self.current_node
                self.current_node = self.current_node.left
            else:
                self.parent = self.current_node
                self.current_node = self.current_node.right
        
        if searched == False:
            return False
        
        # Case1: 삭제할 Node가 Leaf Node인 경우
        if self.current_node.left == None and self.current_node.right == None:
            if value < self.current_node.value:
                self.parent.left = None
            else:
                self.parent.right = None
        # Case2: 삭제할 Node가 Child Node를 한 개 가지고 있을 경우
        elif self.current_node.left != None and self.current_node.right == None:
            if value < self.parent.value:
                self.parent.left = self.current_node.left
            else:
                self.parent.right = self.current_node.left
        elif self.current_node.left == None and self.current_node.right != None:
            if value < self.parent.value:
                self.parent.left = self.current_node.right
            else:
                self.parent.right = self.current_node.right
        
        # Case3: 삭제할 Node가 Child Node를 두 개 가지고 있는 경우
        elif self.current_node.left != None and self.current_node.right != None:
            # Case3-1: 삭제할 Node가 Parent Node의 왼쪽에 있을 때
            if value < self.parent.value:
                self.change_node = self.current_node.right
                self.change_node_parent = self.current_node.right
                while self.change_node.left != None:
                    self.change_node_parent = self.change_node
                    self.change_node = self.change_node.left
                if self.change_node.right != None:
                    self.change_node_parent.left = self.change_node.right
                else:
                    self.change_node_parent.left = None
                self.parent.left = self.change_node
                self.change_node.left = self.current_node.left
                self.change_node.right = self.current_node.right
            # Case3-2: 삭제할 Node가 Parent Node의 오른쪽에 있을 때
            else:
                self.change_node = self.current_node.right
                self.change_node_parent = self.current_node.right
                while self.change_node.left != None:
                    self.change_node_parent = self.change_node
                    self.change_node = self.change_node.left
                if self.change_node.right != None:
                    self.change_node_parent.left = self.change_node.right
                else:
                    self.change_node_parent.left = None
                self.parent.right = self.change_node
                self.change_node.left = self.current_node.left
                self.change_node.right = self.current_node.right
        
        return True        
```

## 테스트 코드

- random 라이브러리 활용
  - random.randint(첫번째 수, 마지막 수): 첫번째 수부터 마지막 수 사이에 있는 수를 랜덤하게 선택해서 Return 한다.
    - 예: random.randint(0, 99) - 0에서 99까지의 숫자 중 특정 숫자를 랜덤하게 선택해서 Return 함

``` python
import random

# 0~999 중, 100개의 숫자 랜덤 선택
bst_nums = set()
while len(bst_nums) != 100:
    bst_nums.add(random.randint(0, 999))
    
# 선택된 100개의 숫자를 이진 탐색 트리에 입력(임의로 루트 노드는 500을 넣기로 한다.)
head = Node(500)
bst = NodeMgmt(head)
for num in bst_nums:
    bst.insert(num)
    
# 입력한 100개의 숫자 검색(검색 기능 확인)
for num in bst_nums:
    if bst.search(num) == False:
        print("Search Failed", num)

# 입력한 100개의 숫자 중 10개의 숫자를 랜덤 선택
delete_nums = set()
bst_nums = list(bst_nums)
while len(delete_nums) != 10:
    delete_nums.add(bst_nums[random.randint(0, 99)])
    
# 선택한 10개의 숫자를 삭제(삭제 기능 확인)
for del_num in delete_nums:
    if bst.delete(del_num) == False:
        print("Delete Failed", del_num)
```

## 이진 탐색 트리의 시잔 복잡도와 단점

### 시간 복잡도(탐색시)

- Depth(트리의 높이)를 h라고 표기한다면, O(h)

- n개의 노드를 가진다면, $log_2n$에 가까우므로, 시간 복잡도는 $O(log_n)$이다.
  - 참고: 빅오 표기법에서 $logn$에서의 $log$의 밑은 10이 아니라 2이다.

![BST](https://www.mathwarehouse.com/programming/images/binary-search-tree/binary-search-tree-sorted-array-animation.gif)

###  단점

- 평균 시간 복잡도는 $O(logn)$이지만, 이는 트리가 균형잡혀 있을 때의 평균 시간복잡도이다.
- 만약 아래와 같이 트리가 구성되어 있을 경우, 최악의 경우에는 링크드 리스트 등과 동일한 성능을 보여준다.($O(n)$)

![Worst Case BTS](http://www.fun-coding.org/00_Images/worstcase_bst.png)