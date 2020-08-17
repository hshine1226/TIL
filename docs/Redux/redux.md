# Redux

## **State와 Render의 관계**

Redux의 핵심은 Store라는 것이다. 이 Store를 **은행**이라고 비유해서 생각해보자! 우리가 Application을 만들 때 필요한 정보가 이 Store에 모두 저장된다.

`절대로 Store에 있는 State에 직접적으로 접근하면 안된다.`

reducer는 Store를 생성할 때 필수로 전달해주어야하는 함수이다.

render는 ui를 만들어 주는 역할을 하는 우리가 짜야할 코드이다.

위에서 말한 것 처럼 State는 직접 접근을 하면 안되기 때문에, 그 접근을 위한 창구 직원(dispatch, subscribe, getState)이 존재한다.

getState를 통해서 state를 받아오고

subcribe를 통해서 state가 바뀔 때마다 render함수가 호출이 되면서 ui가 갱신된다.

## **action과 reducer**
