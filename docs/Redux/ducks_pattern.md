# Redux Ducks Pattern

Redux를 사용해서 애플리케이션을 만들다 보면 Action type, Actions, Reducer의 세트를 만들어야 한다. 그리고 이를 여러개의 폴더로 나누어서 관리하는 것이 보통 일반적인데, 이렇게 여러개의 폴더로 파일을 관리하다 보면 하나의 기능을 수정하기 위해서 그 기능과 관련된 여러개의 파일들을 수정해야 하는 불편함이 생기게 된다.

이러한 폴더 구조에 대한 불편함을 해결하기 위해서 나온 것이 Ducks Pattern이다.

## Duck Rules

Ducks Pattern에는 몇 가지 규칙이 존재한다.

1. `reducer()`라고 불리는 함수를 `export default`해야한다.
2. action creators를 함수로서 `export`해야한다.
3. action types는 `npm-module-or-app/reducer/ACTION_TYPE` 형태를 가져야 한다.
4. 외부 reducer가 해당 action들을 기다리거나, 재사용 라이브러리로 publishing 될 때, action types를 `UPPER_SNAKE_CASE`로 `export`할 수 있다. 



## Ducks 구조

### user module

``` js
// src/store/modules/user.js
// action type을 정의합니다. 규칙 3에 의해서 action type의 앞에 module의 이름을 붙여줌니다.
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";
const UPDATE_PROFILE = "user/UPDATE_PROFILE";

// action creators를 정의합니다.
export const loginSuccess = (result) => {
  return { type: LOGIN_SUCCESS, result };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

export const updateProfile = (result) => {
  return { type: UPDATE_PROFILE, result };
};

// reducer를 선언합니다.
// 초기 State 값을 선언합니다.
const defaultState = {
  isLoggedIn: false,
  user: {},
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.result,
      };
    case LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        user: {},
      };
    case UPDATE_PROFILE:
      return {
        isLoggedIn: true,
        user: action.result,
      };
    default:
      return state;
  }
}
```

### snackBar module

``` js
// action type
const OPEN_SNACKBAR = "snackBar/OPEN_SNACKBAR";
const CLOSE_SNACKBAR = "snackBar/CLOSE_SNACKBAR";

// action creators
export const openSnackBar = (severity, message) => {
  return { type: OPEN_SNACKBAR, payload: { severity, message } };
};

export const closeSnackBar = () => {
  return { type: CLOSE_SNACKBAR };
};

// reducer
const defaultState = {
  open: false,
  severity: "",
  message: "",
};

export default function snackBarReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        open: true,
        severity: action.payload.severity,
        message: action.payload.message,
      };
    case CLOSE_SNACKBAR:
      return defaultState;
    default:
      return state;
  }
}
```

### Combine Reducers

``` js
// src/store/index.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import snackBarReducer from "./modules/snackBar";

// 위에서 생성한 module을 import해서 combineReducers를 통해서 합쳐줍니다.
export default combineReducers({ userReducer, snackBarReducer });
```

## Redux Store 사용하기

### App component에 store 전달하기

``` js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/";

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  // Provider를 통해서 rootReducer를 App component에 전달해줍니다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

```

### Component에서 State, Dispatch 사용하기

``` js
// src/Components/Header.js

// ...

function mapStateToProps(state) {
  const {
    userReducer: { isLoggedIn },
  } = state;

  return { isLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    openSnackBar: (severity, message) =>
      dispatch(openSnackBar(severity, message)),
    logoutSuccess: () => dispatch(logoutSuccess()),
  };
}
// connect의 mapStateToProps와 mapDispatchToProps를 통해 State와 Dispatch를 해당 Component의 Props로 전달해줄 수 있습니다.
export default connect(mapStateToProps, mapDispatchToProps)(Header);
```

``` js
// src/Components/Header.js
// mapStateToProps와 mapDispatchToProps로 전달받은 State와 dispatch 함수를 props로 전달 받습니다.
function Header({ isLoggedIn, logoutSuccess, openSnackBar }) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    Axios.get("/api/logout").then((response) => {
      const {
        data: { success },
      } = response;
      if (success) {
        setOpen(false);
        logoutSuccess();
        openSnackBar("success", "로그아웃 성공");
      }
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
    
	// ...
          
}
```

