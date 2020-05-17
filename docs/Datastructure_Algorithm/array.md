# 배열(Array)

- 데이터를 나열하고, 각 데이터를 인덱스에 대응하도록 구성한 데이터 구조
- 파이썬에서는 리스트 타입이 배열 기능을 제공하고 있다.

## 배열이 왜 필요할까?

- 같은 종류의 데이터를 효율적으로 관리하기 위해서 사용한다.
- 같은 종류의 데이터를 순차적으로 저장한다.

## 배열의 장점

- index를 통해서 빠른 접근이 가능하다.

## 배열의 단점

- 배열을 구성하기 위해서는 미리 배열의 크기를 설정해야 한다.
- 데이터의 추가와 삭제가 어렵다.
- 데이터를 삭제하면 낭비되는 공간이 생긴다.

## 파이썬과 C언어의 배열 예제

C언어

```c
# include <stdio.h>
int main(int argc, char * argv[])
{
    char country[3] = "US";
    printf("%c%c\n", country[0], country[1]);
    printf("%s\n", country)
    return 0;
}
```

파이썬

```python
country = 'US'
print(country)

country = country + 'A'
print(country)
```

## 파이썬의 배열

- 리스트를 활용해서 배열을 구성한다.

```python
# 1차원 배열
data1 = [1,2,3,4,5]
print(data)

# 2차원 배열
data2 = [[1,2,3], [4,5,6], [7,8,9]]
print(data2)
print(data2[0])
print(data2[0][2])
```

## 프로그래밍 연습

### 연습1: 위의 2차원 배열에서 9,8,7 순서로 출력해보기

```python
print(data2[2][2])
print(data2[2][1])
print(data2[2][0])
```

### 연습2: 다음 dataset에서 전체 이름 안에서 M의 빈도수 출력하기

```python
dataset = ['Braund, Mr. Owen Harris',
'Cumings, Mrs. John Bradley (Florence Briggs Thayer)',
'Heikkinen, Miss. Laina',
'Futrelle, Mrs. Jacques Heath (Lily May Peel)',
'Allen, Mr. William Henry',
'Moran, Mr. James',
'McCarthy, Mr. Timothy J',
'Palsson, Master. Gosta Leonard',
'Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)',
'Nasser, Mrs. Nicholas (Adele Achem)',
'Sandstrom, Miss. Marguerite Rut',
'Bonnell, Miss. Elizabeth',
'Saundercock, Mr. William Henry',
'Andersson, Mr. Anders Johan',
'Vestrom, Miss. Hulda Amanda Adolfina',
'Hewlett, Mrs. (Mary D Kingcome) ',
'Rice, Master. Eugene',
'Williams, Mr. Charles Eugene',
'Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)',
'Masselmani, Mrs. Fatima',
'Fynney, Mr. Joseph J',
'Beesley, Mr. Lawrence',
'McGowan, Miss. Anna "Annie"',
'Sloper, Mr. William Thompson',
'Palsson, Miss. Torborg Danira',
'Asplund, Mrs. Carl Oscar (Selma Augusta Emilia Johansson)',
'Emir, Mr. Farred Chehab',
'Fortune, Mr. Charles Alexander',
'Dwyer, Miss. Ellen "Nellie"',
'Todoroff, Mr. Lalio']

m_count = 0
for data in dataset:
    for d in data:
        if d == 'M':
            m_count += 1
print(m_count)
```
