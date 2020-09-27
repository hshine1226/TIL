## create index

### Usage

- 도형 데이터 인덱스 생성시 
```
create index [인덱스이름] on [테이블이름] using gist([인덱스생성할도형데이터컬럼이름])
```
- 일반 데이터 인덱스 생성시 
``` 
create index [인덱스이름] on [테이블이름]([인덱스생성할컬럼이름])
```