# useParams, useHistory, useLocaiton (React Hooks)

## useParams

기존에는 Route로 사용되지 않는 컴포넌트에서 `props.match`, `props.history`, `props.location`에 접근하기 위해서는 withRouter를 사용했지만 React hooks의 `useParams`을 통해서 `match.params`에 손쉽게 접근할 수 있게 되었다.

```js
import { useParams } from "react-router";

export default function Add() {
  const { id } = useParams();
  // ...
}
```

## useHistory

`useHistory` 역시 `useParams`와 같이 `withRouter`를 사용하지 않고 history 객체에 접근하게 해주는 React Hook이다.

```js
import { useHistory } from "react-router";

export default function Add() {
  const history = useHistory();
  // ...
}
```

## useLocation

`useLocation`은 `withRouter`없이 location 객체에 접근할 수 있게 해주는 Hook이다.

```js
import { useLocation } from "react-router";

export default function Add() {
  const location = useLocation();
  // ...
}
```
