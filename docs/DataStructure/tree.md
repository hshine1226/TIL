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

