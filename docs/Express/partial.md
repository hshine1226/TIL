# Partials with Pug

Partials는 페이지의 일부분이다. 페이지를 조직화하기 위해 만든다.

## partials 폴더 생성 및 partial 파일 생성

views 폴더 아래에 partials라는 폴더를 만들자.

partials 폴더에 header.pug, footer.pug 파일을 만든다.

이 파일들은 header와 footer를 한 곳에서 관리하기 위해 만드는 것이다.

모든 것을 하나 하나 작은 것으로 쪼개어 관리하면 유지보수가 쉬워지고, 코드 에러 발생시 해결하는 시간이 줄어들 수 있다.

``` pug
header.header
    .header__column
		// fontawesome에서 가져온 아이콘
        i.fab.fa-youtube
    .header__column
        ul
            li
                a(href="#") Join
            li
                a(href="#") Log In
```



``` pug
footer.footer
    .footer__icon
        i.fab.fa-youtube
    span.footer__text  YouTube-Clone #{new Date().getFullYear()}&copy;
```

pug에서는 html 코드 역시 이해할 수 있다. 하지만 pug 문법을 따라서 만드는 것이 조금 더 깔끔한 코드를 만들 수 있다.

## pug에서 자바스크립트 사용하기

pug에서 자바스크립트 코드를 쓰고 싶다면 `#{}`의 대괄호 안에 자바스크립트 코드를 바로 작성할 수 있다.

``` pug
#{new Date().getFullYear()}
```

## 분리된 pug 컴포넌트 추가하기

생성한 partials를 main.pug에서 사용하기 위해서는 `include`를 사용해서 partials를 불러올 수 있다.

`include PATH`

``` pug
doctype html
html
    head
        script(src="https://kit.fontawesome.com/142b9259dc.js", crossorigin="anonymous")
        title | Youtube Clone |
    body
        include ../partials/header
        main
            block content
        include ../partials/footer
```

이렇게 pug를 이용해서 컴포넌트를 분리하면 웹사이트의 분리하고 싶은 부분 어떤 부분이던지 다 분리가 가능하다. 그리고 이것이 더 조직적인 방식이다. footer와 header는 모든 페이지에서 전부 존재하는 것이기 때문에 이렇게 partials에서 한 번에 관리하는 것이 더 용이하다.

프로그래밍은 분할정복을 해야한다!

