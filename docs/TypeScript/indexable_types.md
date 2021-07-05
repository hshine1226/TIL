# Indexable Types

## string or number

```Typescript
interface StringArray {
    [index: number]: string
}

const sa: StringArray = {} // optional
sa[100] = '백'

interface StringDictionary {
    [index: string]: string
}

const sd: StringDictionary = {} // optional
sd.hundred = '백'

interface StringArrayDictionary {
    [index: number]: string
    [index: string]: string
}

const sad: StringArrayDictionary = {}
// optional of course
sad[100] = '백'
sad.hundred = '백'
```

## string index = optional property

```Typescript
interface StringDictionary {
    [index: string]: string
    name: string
}

const sd: StringDictionary {
    name: '준혁' // 필수
}

sd.any = 'any' // 어떠한 property도 가능

/* -------------------------------------------- */

interface StringDictionaryNo {
    [index: string]: string;
    // name: number // (X) 인덱서블 타입이 string 값을 가지기 때문에 number를 필수로 끌어요면 에러
}
```
