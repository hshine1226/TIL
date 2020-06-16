# Passport를 통해 Password 변경하기

## Instance Method

Passport를 통해서 Password를 변경하기 위해서는 `changePassword(oldPassword, newPassword, [cb])` 인스턴스 메소드를 사용해야 한다. 이 메소드는 `passport-local-mongoose`가 API로 제공해주는 메소드이다.

패스워드는 단지 텍스트로서 저장되지 않는다. 예를들어 우리가 `1234`라는 패스워드를 저장한다고 하면 그것을 passport가 `asdf83948yhsmd0`과 같이 암호화 해서 저장하게 된다. 암호화를 위해서 passport의 라이브러리를 이용하는 것이다.

### 사용법

passport-local-mongoose에서 모든 instance를 사용하기 위해서는 `async/await`이 필요하다.

그리고 만약 패스워드 변경이 실패한다면 상태코드로 400을 보내줘서 이 요청이 실패한 요청임을 알려준다.

```js
// controllers/userController.js

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    // 새로 입력받은 패스워드가 같지 않다면 상태코드 400을 보내고 다시 패스워드 변경 화면으로 Redirect 해준다.
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users${routes.changePassword}`);
      return;
    }
    // 새로 입력받은 패스워드가 같다면 changePassword 메소드를 이용해서 패스워드를 변경해준다.
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
    // 만약 에러가 발생한다면 상태코드 400을 보내고 패스워드 변경 화면으로 Redirect 해준다.
  } catch (error) {
    res.status(400);
    res.redirect(`/users${routes.changePassword}`);
  }
};
```
