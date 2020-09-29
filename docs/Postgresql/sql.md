## create index

### Usage

- 도형 데이터 인덱스 생성시 
``` sql
create index [인덱스이름] on [테이블이름] using gist([인덱스생성할도형데이터컬럼이름])
```
- 일반 데이터 인덱스 생성시 
``` sql
create index [인덱스이름] on [테이블이름]([인덱스생성할컬럼이름])
```

## jsonb_agg

### Usage

```sql
jsonb_agg(expression)
```

jsonb_agg는 어떠한 표현식을 가져와서 행렬화해서 보여준다.

## create function

```sql
create or replace function [함수명] (arguments)
returns return_datatype as $$
declare
    [...]
begin
    [...]
    return variable_name
end;
$$ language plpgsql;

```