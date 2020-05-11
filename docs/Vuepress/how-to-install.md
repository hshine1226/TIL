# 설치방법

## Global Installation

```shell
# install globally
yarn global add vuepress # OR npm install -g vuepress

# create the project folder
mkdir vuepress-starter && cd vuepress-starter

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

## 프로젝트가 이미 존재할 때

프로젝트를 이미 가지고 있다면, local dependency에 뷰프레스를 설치한다.

```shell
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

그리고 package.json에 script를 추가한다.

```shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

뷰프레스를 시작하려면 아래와 같이 터미널에 작성합니다.

```shell
yarn docs:dev # OR npm run docs:dev
```

배포 폴더를 build하려면 아래와 같이 터미널에 작성합니다.

```shell
yarn docs:build # OR npm run docs:build
```
