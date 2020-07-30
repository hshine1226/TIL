# sytyled-components

styled-components는 react에서 css를 작성할 때, 따로 파일을 분리하지 않고 js 파일 안에서 작성하는 방법이다.

## Install

`npm install styled-components`

## Usage

``` js
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