# Regular Expression

MongoDB에서는 Query Operators로 $regex가 있다.

이 정규표현식을 사용하면 해당하는 pattern과 일치하는 데이터를 찾을 수 있다.

## 문법(Syntax)

1. { <field>: { $regex: /pattern/, $options: '<options>' } }
2. { <field>: { $regex: 'pattern', $options: '<options>' } }
3. { <field>: { $regex: /pattern/<options> } }

### pattern

`^`: 시작하는 문자

`$`: 끝나는 문자

`.`:개행식을 제외한 모든 문자

### options

| option | 설명                                                         |    Syntax 제한     |
| :----: | :----------------------------------------------------------- | :----------------: |
|   i    | 대/소문자를 구분하지 않음(insensitive)                       |                    |
|   m    | - Multi-line value에서 `^/$`가 포함된 패턴으로 조회할 때 각 줄의 시작과 끝을 조회한다.<br />- pattern에 `^`가 없거나, 문자열에 `\n`이 없는 경우 m 옵션이 적용되지 않음 |                    |
|   x    | 정규식 안의 whitespace, #(주석), 모두 무시                   | syntax 3 사용 불가 |
|   s    | dot(.)을 사용할 때 `\n`을 표함하여 매치                      | syntax 3 사용 불가 |

## 사용 예시

``` js
const {
  query: { term: searchingBy },
} = req;
    
videos = Video.find({
    title: { $regex: searchingBy, $options: "i" },
});
```

