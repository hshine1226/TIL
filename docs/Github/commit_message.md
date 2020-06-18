# Github commit message 작성 규칙

## Commit 메시지에 Emoji 사용하기

### 설치법

```
npm i -g gitmoji-cli
```

### 사용법

- 🎨 `:art:` 코드 형식이나 구조를 개선할 때
- 🐎 `:racehorse:` 성능을 향상할 때
- 🚱 `:non-potable_water:` 메모리 누수를 막았을 때
- 📝 `:memo:` 문서 작성했을 때
- 🐧 `:penguin:` 리눅스에서 뭔가를 고쳤을 때
- 🍎 `:apple:` macOS에서 뭔가를 고쳤을 때
- 🏁 `:checkered_flag:` 윈도우즈에서 무언가를 고쳤을 때
- 🐛 `:bug:` 버그를 고쳤을 때
- 🔥 `:fire:` 코드 또는 파일을 삭제했을 때
- 💚 `:green_heart:` CI 빌드를 고쳤을 때
- ✅ `:white_check_mark:` 테스트를 추가했을 때
- 🔒 `:lock:` 보안 사항을 수정했을 때
- ⬆️ `:arrow_up:` 의존성에 대한 부분을 업그레이드했을 때
- ⬇️ `:arrow_down:` 의존성에 대한 부분을 다운그레이드했을 때
- 👕 `:shirt:` 린터 경고를 없앴을 때

## 좋은 커밋 메시지를 위한 영어단어 목록

1. [Fix](#fix) - 올바르지 않은 동작을 고친 경우
2. [Add](#add) - 코드나 테스트, 예제, 문서 등의 추가가 있을 때
3. [Remove](#remove) - 코드의 삭제가 있을 때
4. [Use](#use) - 특별히 무언가를 사용해 구현을 하는 경우
5. [Refactor](#refactor) - 전면 수정이 있을 때
6. [Simplify](#simplify) - 복잡한 코드를 단순화 할 때
7. [Update](#update) - 개정이나 버전 업데이트가 있을 때
8. [Improve](#improve) - 향상이 있을 때
9. [Make](#make) - 주로 기존 동작의 변경을 명시한다
10. [Implement](#implement)- 코드가 추가된 정도보다 더 주목할 만한 구현체를 완성시켰을 때
11. [Revise](#revise) - Update와 비슷하나 문서 개정이 있을 때
12. [Correct](#correct) - 주로 문법의 오류나 타입의 변경, 이름 변경을 할 때
13. [Ensure](#ensure) - 무엇이 확실하게 보장 받는다는 것을 명시할 때
14. [Prevent](#prevent) - 특정한 처리를 못하게 할 때 
15. [Avoid](#avoid) - 회피할 때
16. [Move](#move) - 코드의 이동이 있을 때
17. [Rename](#rename) - 이름 변경이 있을 때
18. [Allow](#allow) - 허용을 표현할 때
19. [Verify](#verify) - 검증 코드를 넣을 때
20. [Set](#set) - 변수 값을 변경하는 등의 작은 수정을 할 때
21. [Pass](#pass) - 파라메터를 넘기를 처리를 할 때

### Fix

- Fix A
  - A를 수정합니다
  - `Fix stat cache`
- Fix A in B
  - B의 A를 수정합니다
  - `Fix build warning in node_report.cc`
- Fix A which B, Fix A that B
  - B절인 A를 수정합니다
  - Fix A로 끝낼 수 있지만, 보다 많은 정보를 주기위해 which나 that 관계 대명사로 A를 설명한다.
  - `Fix incorrect type which makes animated gifs not loop forever on device`
- Fix A to B, Fix A to be B
  - B를 위해 A를 수정합니다
  - `Fix inability to remove 'Desabled' state from AccessibilityStates`
- Fix A so that B
  - A를 수정해서 B가 되었습니다
  - `Fix react-native init --help so that it doesn't return undefined`
- Fix A where B
  - B처럼 발생하는 A를 수정했습니다
  - `Fix case where content of inline views didn't get relaid out`
- Fix A when B
  - B일 때 발생하는 A를 수정했습니다
  - `Fix accidental showing of Modal when visible prop is undefined or null`

### Add

- Add A
  - A를 추가합니다
  - `Add ERR_INSPECTOR_COMMAND error`
- Add  A for B
  - B를 위해 A를 추가했습니다
  - `Add documentation for the defaultPort option`
- Add A to B
  - B에 A를 추가했습니다
  - `Add error description to Image onError callback`

### Remove

`Clean`이나 `Eliminate`를 사용하기도 합니다. 보통 A 앞에 `unnecessary`, `useless`, `unneeded`, `unused`, `duplicated`가 붙는 경우가 많습니다.

- Remove A
  - A를 삭제합니다
  - `Remove fallback cache`
- Remove A from B
  - B에서 A를 삭제합니다
  - `Remove absolute path parameter from transformers`

### Use

- Use A
  - A를 사용합니다
  - `Use more stable cast where possible`
- Use A for B
  - B에 A를 사용합니다
  - `Use fake messageEvent for port.onmessage`
- Use A to B
  - B가 되도록 A를 사용합니다
  - `Use common operations to define browser globals`
- Use A in B
  - B에서 A를 사용합니다
  - `Use smart pointer in UDPWrap::Onsend`
- Use A instead of B
  - B 대신 A를 사용합니다.
  - `Use babel runtime instead of relying on global babelHelpers and regenerator`

### Refactor

- Refactor A
  - `Refactor tick objects prun function`

### Simplify

Refactor의 성격이 강하나 이보다는 약한 수정의 경우 이용하면 좋습니다.

- Simplify A
  - A를 단순화합니다
  - `Simplify code and remove obsolete checks`

### Update

Fix와는 달리 Update는 잘못된 것을 바로잡는 것이 아니라는 점에 주의해야 합니다. 원래도 정상적으로 동작하고 있었지만, 수정, 추가, 보완을 한다는 개념입니다. 코드보다는 주로 문서나 리소스, 라이브러리 등에 사용합니다.

- Update A to B
  - A를 B로 업데이트 합니다
  - `Update acorn to 6.1.0`

### Improve

호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 다양한 것들이 목적이 될 수 있습니다. 

- Improve A
  - A를 향상시킵니다
  - `Improve compatibility with http/1`

### Make

- Make A B
  - A를 B하게 만듭니다
  - `Make config object read-only`

### Implement

- Implement A
  - A를 구현합니다
  - `Implement date object`
- Implement A to B
  - B를 위해 A를 구현합니다
    - `Implement requiresMainQueueSetup in RCTTVNavigationEventEmitter to satisfy Xcode warning`

### Revise

- Revise A
  - A 문서를 개정합니다
  - `Revise deprecation semverness info in Collaborator Guide`

### Correct

- Correct A
  - A를 고칩니다
  - `Correct grammatical error in BUILDING.md`

### Ensure

if 구문처럼 조건을 확실하게 주었을 때에도 사용될 수 있습니다. `Make sure`도 같은 용도로 사용될 수 있습니다.

- Ensure A
  - A가 확실히 보장되도록 수정했습니다
  - `Ensure quiet always takes precedence`

### Prevent

- Prevent A
  - A하지 못하게 막습니다
  - `Preventg multiple connection errors`
- Prevent A from B
  - A를 B하지 못하게 막습니다
  - `Prevent event handlers from receiving extra argument in development`

### Avoid

`Prevent`는 못하게 막지만, `Avoid`는 회피합니다. if 구문으로 특정한 동작을 제외시키는 경우에도 사용할 수 있습니다.

- Avoid A
  - A를 회피합니다
  - `Avoid flushing uninitialized traces`
- Avoid A if B, Avoid A when B
  - B인 상황에서 A를 회피합니다
  - `Avoid importing entire crypto dependency tree if not in Node.js`

### Move

- Move A to B, Move A into B
  - A를 B로 옮깁니다
  - `Move test-process-uptime to parallel`

### Rename

- Rename A to B
  - A를 B로 이름 변경합니다
  - `Rename node-report to report`

### Allow

Make와 비슷하지만, 허용을 표현할 때 사용합니다.

- Allow A to B
  - A가 B를 할 수 있도록 허용합니다
  - `Allow the output filename to be a {Function}`

### Verify

- Verify A
  - A를 검증합니다
  - `Verify heap buffer allocations occur`

### Set

- Set A to B
  - A를 B로 설정합니다
  - `Set til.DEFAULT_ECDH_CURVE to 'auto'`

### Pass

- Pass A to B
  - A를 B로 넘깁니다
  - `Pass the response toolkit to the context function`



## 커밋 메시지 규칙

- 동명사보다 명사를 사용한다.
- 관사는 사용하지 않는다.
  - 꼭 필요한 경우가 아니면 a, an, the는 사용하지 않는다.
- 부정문 `Don't`를 사용한다.
- 오타 수정은 `Fix typo`라고 쓴다.