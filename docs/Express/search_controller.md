# Search Controller

## form을 통해 url에 정보 추가하기

Controller를 시작하기 전에 header 파일을 조금 수정해보자.

``` pug
// views/partials/header.pug
header.header
	.header__column
		a(href=routes.home)
			i.fab.fa-youtube
	.header__column 
		form(action=routes.search, method="get")
			input(type="text", placeholder="Search by term...", name="term")
	.header__column
		ul
			li
				a(href=routes.join) Join
			li
				a(href=routes.login) Log Infalsefalse
```

form의 action은 routes의 search 경로로 설정하고, method는 get방식으로 설정한다.

컨트롤러가 query에 접근하려면 method가 get이어야 한다.

Get method는 url에 정보를 추가해준다.

또한 input으로 넘겨줄 값의 이름이 필요하므로 name을 term으로 지정해준다.

## 페이지에서 변수 추가하기

이제 search 페이지를 수정해야한다.

``` pug
// views/search.pug
extends layouts/main

block content
  .search__header
    h3 Searching for: #{searchingBy}
```

h3 태그를 추가하고 searchingBy 변수의 값을 보여줄 것이다.

## 컨트롤러에서 query 받아오기

아직은 searchingBy의 값이 없기 때문에 Controller를 수정해야 한다.

``` js
// controllers/videoController.js
//...
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // const searchingBy = req.query.term;
  // searchingBy를 template variable로 보내준다.
  res.render("search", { pageTitle: "Search", searchingBy });
};
```

아래는 searchingBy를 받아오는 문법(ES6 전후)의 차이이다.

``` js
// ES6 이전의 문법
const searchingBy = req.query.term
// ES6 문법
const {
    query: { term: searchingBy }
} = req;
```

