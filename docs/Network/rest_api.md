# REST API(그런 REST API로 괜찮은가)

REST란 무엇인가? 뭐라고 말하기 참 애매하다.

REpresentational State Transfer(?) 무슨 말인가? 하나도 모르겠다.

> REST
>
> a way of providing **interoperability** between computer systems on the Internet.

## REST의 역사

### WEB(1991)

- 어떻게 정보를 공유할 것인가?
  - 모든 정보들을 하이퍼텍스트로 연결한다.
  - 표현형식: HTML
  - 식별자: URI
  - 전송방법: HTTP

Roy T.fielding: 어떻게하면 웹을 망가뜨리지 않고 HTTP를 진보시킬까?

해결책으로 HTTP Object Model이 나오고 이것이 바로 4년 후(1998) REST로 발달되게 된다.

2년후(2000)에 박사 논문으로 발표한다.



### API

Salesforce API(2000. 2) SOAP은 인기가 별로 없었다.(너무 복잡함)

Flickr API(2004. 8)에서 REST라는 이름으로 API가 새로 나왔다. 사람들에게는 매우 새로웠음 그리고 구현이 짧아졌다.

SOAP과 REST의 느낌적인 비교

| SOAP        | REST        |
| ----------- | ----------- |
| 복잡하다    | 단순하다    |
| 규칙이 많다 | 규칙이 적다 |
| 어렵다      | 쉽다        |

위의 느낌으로 REST의 인기가 치솟는다.

그러다가 CMIS(2008)라는 것이 나왔다. REST 바인딩을 지원함 하지만 Roy T.fielding은 이것을 REST가 아니라고 했다.

Microsoft REST API Guidelines(2016)

- uri는 https://{serviceRoot}/{collection}/{id} 형식이어야 한다.
- GET, PUT, DELETE, POST, HEAD, PATCH, OPTIONS를 지원해야 한다.
- API 버저닝은 Major.minor로 하고 uri에 버전 정보를 포함시킨다.

하지만 이것도 REST가 아니라고 함

뭐가 문제인걸까?



REST API라 함은 REST 아키텍쳐 스타일을 따르는 API이다.

REST는 분산 하이퍼미디어 시스템(예: 웹)을 위한 아키텍쳐 스타일

아키텍쳐 스타일은 제약조건의 집합

따라서, 이 제약조건을 모두 지켜야 REST를 따른다고 말할 수 있다.



REST의 제약조건(REST를 구성하는 스타일)

- client-server
- stateless
- cache
- **uniform interface**
- layered system
- code-on-demand(optional) -> Javascript



Uniform Interface의 제약조건

- identification of resources(리소스가 uri로 식별되면 된다.)

- manipulation of resources through representations

- **self-descriptive message**

- **hypermedia as the engine of application state (HATEOAS)**

  위의 강조된 두가지는 거의 우리가 지키지 못하고 있다.

**Self-descriptive message**

메시지는 스스로를 설명해야 한다.

**HATEOAS**

애플리케이션의 상태는 Hyperlink를 이용해 전이되어야 한다.



Uniform Interface가 필요한 이유

- 서버와 클라이언트가 각각 독립적으로 진화한다.
- **서버의 기능이 변경되어도 클라이언트를 업데이트할 필요가 없다.**
- REST를 만들게 된 계기: "How do I improve HTTP without breack the Web"



REST API도 저 제약조건들을 다 지켜야하는가? YES







