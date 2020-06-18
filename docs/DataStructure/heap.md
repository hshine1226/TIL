# 8. Heap(힙)

## 1. 힙(Heap)이란?

- 힙: 데이터에서 최대값과 최소값을 빠르게 찾기 위해 고안된 완전 이진 트리(Complete Binary Tree)
  - 완전 이진 트리: 노드를 삽입할 때 최하단 왼쪽 노드부터 차례대로 삽입하는 트리

![완전이진트리](https://www.fun-coding.org/00_Images/completebinarytree.png)

- 힙을 사용하는 이유
  - 배열에 데이터를 넣고, 최대값과 최소값을 찾으면 $O(n)$이 걸린다.
  - 이에 비해서, 힙에 데이터를 넣고, 최대값과 최소값을 찾으면 $O(logn)$이 걸린다.
  - 우선순위 큐와 같이 **최대값** 또는 **최소값**을 빠르게 찾아야 하는 자료구조 및 알고리즘 구현 등에 활용된다.

## 2. 힙(Heap) 구조

- 힙은 최대값을 구하기 위한 구조인 최대힙(Max heap)과 최소값을 구하기 위한 구조인 최소힙(Min heap)으로 분류할 수 있다.
- 힙은 다음과 같이 두 가지 조건을 가지고 있는 자료구조이다.
- 1. 각 노드의 값은 해당 노드의 자식 노드가 가진 값보다 크거나 같다.(최대힙의 경우)
     1. 최소 힙의 경우는 각 노드의 값은 해당 노드의 자식 노드가 가진 값보다 크거나 작다.
  2. 완전 이진 트리 형태를 가진다.

### 힙과 이진 탐색 트리의 공통점과 차이점

- 공통점: 힙과 이진 탐색 트리는 모두 이진 트리이다.
- 차이점:
  - 힙은 각 노드의 값이 자식 노드보다 크거나 같다.(최대힙의 경우)
  - 이진 탐색 트리는 왼쪽 자식 노드의 값이 가장 작고, 그 다음 부모 노드, 그 다음 오른쪽 자식 노드의 값이 가장 크다.
  - 힙은 이진 탐색 트리의 조건인 자식 노드에서 작은 값은 왼쪽, 큰 값은 오른쪽이라는 조건이 없다.
    - 힙의 왼쪽 및 오른쪽 자식 노드의 값은 오른쪽이 클 수도 있고, 왼쪽이 클 수도 있다.
  - 이진 탐색 트리는 탐색을 위한 구조, 힙은 최대/최소값 검색을 위한 구조 중 하나로 이해하면 된다.

![Heap&BST](https://www.fun-coding.org/00_Images/completebinarytree_bst.png)

## 3. 힙(Heap) 동작

데이터를 힙 구조에 삽입, 삭제하는 과정을 그림을 통해 이해해보자.

### 힙에 데이터 삽입하기

힙은 완전 이진 트리이므로, 삽입할 노드는 기본적으로 왼쪽 최하단부 노드부터 채워지는 형태로 삽입된다.

![InsertHeap](https://www.fun-coding.org/00_Images/heap_ordinary.png)

### 힙에 데이터 삽입하기 - 삽입할 데이터가 힙의 데이터보다 클 경우(최대힙의 예)

- 먼저 삽입된 데이터는 오나전 이진 트리 구조에 맞추어, 최하단부 왼쪽 노드부터 채워진다.
- 채워진 노드 위치에서 부모 노드보다 값이 클 경우, 부모 노드와 위치를 바꿔주는 작업을 반복한다.

![heap_change](https://www.fun-coding.org/00_Images/heap_insert.png)

### 힙의 데이터 삭제하기(최대힙의 예)

- 보통 삭제는 최상단 노드(Root Node)를 삭제하는 것이 일반적이다.
  - 힙의 용도는 최대값 또는 최소값을 root 노드에 놓고, 최대값과 최소값을 바로 꺼내어 쓸 수 있도록 하는 것이다.
- 상단의 데이터 삭제시, 가장 최하단부 왼쪽에 위치한 노드(일반적으로 가장 마지막에 추가한 노드)를 root 노드로 이동시킨다.
- Root 노드의 값이 child 노드보다 작을 경우, root 노드의 child 노드중에서 가장 큰 값을 가진 노드와 root 노드의 위치를 바꿔주는 작업을 반복한다.

![heap_remove](https://www.fun-coding.org/00_Images/heap_remove.png)

## 4. 힙(Heap) 구현

### 힙과 배열

- 일반적으로 힙 구현시 배열 자료구조를 활용한다.
- 배열은 인덱스가 0번부터 시작하지만, 힙 구현의 편의를 위해서 root 노드 인덱스 번호를 1로 지정하면 구현이 조금 더 수월하다.
  - parent node's index = child node's index // 2
  - left child node's index = parent node's index * 2
  - right child node's index = parent node's index * 2 + 1

![heap_index](https://www.fun-coding.org/00_Images/heap_array.png)

### 힙에 데이터 삽입 구현(최대힙의 예)

- 힙 클래스 구현

``` python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        # 배열의 인덱스를 1번 부터 시작하게 하기 위해서 0번 인덱스에 None 넣어줬다.
        self.heap_array.append(None)
        self.heap_array.append(data)
```

``` python
heap = Heap(1)
heap.heap_array
# [None, 1]
```

- 힙 클래스 구현2 - insert1
  - 인덱스 번호는 1번부터 시작하도록 변경

![heap_ordinary](https://www.fun-coding.org/00_Images/heap_ordinary.png)

``` python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
        
    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
            return True
       	
        self.heap_array.append(data)
        return True
```

- 힙 클래스 구현3 - insert2
  - 삽입한 노드가 부모 노드의 값보다 클 경우: 부모 노드와 삽입한 노드 위치를 바꾼다.
  - 삽입한 노드가 루트 노드가 되거나 부모 노드보다 값이 작거나 같을 경우까지 반복한다.
- 특정 노드의 관련 노드 위치 알아내기
  - parent node's index = child node's index // 2
  - left child node's index = parent node's index * 2
  - right child node's index = parent node's index * 2 + 1

![heap_insert](https://www.fun-coding.org/00_Images/heap_insert.png)

``` python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
    
    # Swap을 하기 전에 부모 노드보다 현재 노드가 큰지, 현재 노드가 루트 노드가 아닌지를 확인한다.
    def move_up(self, inserted_idx):
        if inserted_idx <= 1:
            return False
        
        parent_idx = inserted_idx // 2
        
        if self.heap_array[inserted_idx] > self.heap_array[parent_idx]:
            return True
        else:
            return False
        
    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
            return True
       	
        self.heap_array.append(data)
        
        # 0번 인덱스에는 None을 넣기 때문에 마지막 삽입된 인덱스를 구할 때 1을 빼준다.
        inserted_idx = len(self.heap_array) - 1
        
        while self.move_up(inserted_idx):
            parent_idx = inserted_idx // 2
            self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
            inserted_idx = parent_idx
        
        return True 
    
```

- 아래와 같이 힙을 생성후, 데이터를 삽입해서 확인 해보면 힙의 구조에 알맞게 데이터가 삽입된 것을 볼 수 있다.

``` python
heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
heap.heap_array
# [None, 20, 10, 15, 5, 4, 8]
```

### 힙에 데이터 삭제 구현(최대힙의 예)

- 힙 클래스 구현4 - pop1
- 보통 삭제는 최상단 노드(root 노드)를 삭제하는 것이 일반적이다.
  - 힙의 용도는 최대값 또는 최소값을 root 노드에 놓아서 최대값과 최소값을 바로 꺼내 쓸 수 있도록 하는 것이다.

``` python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
        
    def pop(self):
        if len(self.heap_array) <= 1:
            return False
        
        returned_data = self.heap_array[1] 
        return returned_data
```

- 힙 클래스 구현4 - pop2
  - 상단의 데이터 삭제시 가장 최하단부 왼쪽에 위치한 노드(일반적으로 마지막에 추가한 노드)를 root 노드로 이동한다.
  - root 노드의 값이 child 노드보다 작을 경우, root 노드의 child 노드 중 가장 큰 값을 가진 노드와 root 노드의 위치를 바꿔주는 작업을 반복한다.
- 특정 노드의 관련 노드 위치 알아내기
  - 부모 노드 인덱스 번호 = 자식 노드 인덱스 번호 // 2
  - 왼쪽 자식 노드 인덱스 번호 = 부모 노드 인덱스 번호 * 2
  - 오른쪽 자식 노드 인덱스 번호 = 부모 노드 인덱스 번호 * 2 + 1

![Heap Remove](https://www.fun-coding.org/00_Images/heap_remove.png)

``` python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
        
    def move_down(self, popped_idx):
        left_child_popped_idx = popped_idx * 2
        right_child_popped_idx = popped_idx * 2 + 1
        
        # case1: 왼쪽 자식 노드도 없는 경우
        if left_child_popped_idx >= len(self.heap_array):
            return False
        # case2: 왼쪽 자식 노드는 있고, 오른쪽 자식 노드만 없는 경우
        elif right_child_popped_idx >= len(self.heap_array):
            if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                return True
            else:
                return False
        # case3: 자식 노드가 모드 존재하는 경우
        else:
            if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                    return True
                else:
                    return False
            else:
                if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                    return True
                else:
                    return False
        
    def pop(self):
        if len(self.heap_array) <= 1:
            return False
        
        returned_data = self.heap_array[1] 
        self.heap_array[1] = self.heap_array[-1]
        del self.heap_array[-1]
        popped_idx = 1 
        
        while self.move_down(popped_idx):
            left_child_popped_idx = popped_idx * 2
            right_child_popped_idx = popped_idx * 2 + 1

            # case2: 오른쪽 자식 노드만 없는 경우
            if right_child_popped_idx >= len(self.heap_array):
                if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                    self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
                    popped_idx = left_child_popped_idx
            # case3: 자식 노드가 모두 있는 경우
            else:
                if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                    if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
                        popped_idx = left_child_popped_idx
                else:
                    if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[right_child_popped_idx] = self.heap_array[right_child_popped_idx], self.heap_array[popped_idx]
                        popped_idx = right_child_popped_idx            
        return returned_data
```

#### 결과

insert와 pop의 결과를 모두 확인해보면 정상적으로 삽입과 삭제가 이루어지는 것을 확인할 수 있다.

``` python
heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
heap.heap_array
# [None, 20, 10, 15, 5, 4, 8]
heap.pop()
# 20
heap.heap_array
# [None, 15, 10, 8, 5, 4]
```

## 5. 힙(Heap)의 시간 복잡도

- depth(트리의 높이)를 h라고 표기한다면
- n 개의 노드를 가지는 heap에 데이터 삽입 또는 삭제시, 최악의 경우 root 노드에서 leaf 노드까지 비교해야 하므로 $h = log_2n$에 가까우므로, 시간 복잡도는 $O(logn)$이다.
  - 참고: 빅오 표기법에서 $logn$의 $log$의 밑은 10이 아니라 2이다.
  - 한번 실행시마다, 50%의 실행할 수도 있는 명령을 제거한다는 의미이다.
  - 즉, 50%의 실행시간을 단축시킬 수 있다는 것을 의미한다.