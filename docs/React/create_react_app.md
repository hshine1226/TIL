# Create React App 

create-react-app npm package를 사용할 때 npm대신 npx를 사용하자! 

그 이유는 무엇일까?

## NPX

npx는 npm registry package 사용 경험을 파악하기 위한 *도구*이다.(Node Package를 실행시키는 하나의 도구)

만약 `create-react-app`을 *npm*으로 *global*하게 설치하게 된다면 여러가지 문제가 생길 수도 있다.

- 자주 사용하지 않는 무거운 패키지가 로컬 스토리지에 남는다.
- 새로운 버전이 나오면 이미 존재하는 패키지를 제거후 재설치 해야한다.

하지만 `npx`를 사용하면 최신 버전에 해당하는 패키지를 설치하여 실행하고, 실행된 이후에 해당 패키지를 제거한다.

npx를 통해서 create-react-app을 설치하는 방법은 아래와 같다.

`npx create-react-app "APP_TITLE"`

> 이때, 프로젝트를 생성하고 싶은 directory에서 npx 명령어를 사용해야 한다!

## Settings

Project root에 `.env` 파일을 생성하고 아래와 같이 작성해준다.

`NODE_PATH=src`

*이것은 node의 기본 경로를 src 폴더 가르키게 하는 것이다.*


## Fragments

React에서는 두개 이상의 컴포넌트를 Return 할 수 없다. 하지만 두 개 이상의 컴포넌트를 Return하고 싶을 때, 우리는 Fragments를 사용할 수 있다.

``` js 
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

위의 Fragments를 선언하는 단축 문법은 아래와 같다.

``` js
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```