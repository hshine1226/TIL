# sytyled-components

styled-components는 react에서 css를 작성할 때, 따로 파일을 분리하지 않고 js 파일 안에서 작성하는 방법이다.

## Install

`npm install styled-components`

## Usage

```js
import styled from "styled-components";

const Header = styled.header``;
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;
const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
```

위와 같이 styled-components를 사용하기 위해서는 먼저 `styled-components`를 import 해줘야 한다.

그리고 `(backtick) 내부에 style을 작성해서 styled-component를 생성해줄 수 있다.

생성한 컴포넌트를 사용해서 하나의 js 파일에서 독립된 스타일을 지정해줄 수 있다.

> styled-components를 사용했을 때의 장점은 일일히 class명을 기억하지 않아도 되고, 컴포넌트 단위로 작게 쪼개서 스타일을 작성할 수 있다.

## Warning

Styled Component를 사용할 때, Styled component를 다른 component 안에 선언하면 안된다.

그렇다면 만약 styled component를 동적 값을 통해서 변경하고자 할 때는 어떻게 할까?

아래의 예제를 보자

```js
const YoutubeVideo = styled.iframe`
  width: 100%;
  height: 100%;
  display: none;

  &:nth-child(${(props) => props.index}) {
    display: block;
  }
`;
const DetailPresenter = ({ result, videos, error, loading }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  return <YoutubeVideo index={slideIndex}></YoutubeVideo>;
};
```

위에서 보이는 것과 같이 생성한 Styled component에서 Prop으로 index를 보내주고

해당 styled-component에서 그 prop을 사용하는 예제이다.
