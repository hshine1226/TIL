(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{439:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"heroku로-application-배포하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heroku로-application-배포하기"}},[t._v("#")]),t._v(" Heroku로 application 배포하기")]),t._v(" "),s("h2",{attrs:{id:"heroku로-application-배포하기-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heroku로-application-배포하기-2"}},[t._v("#")]),t._v(" heroku로 Application 배포하기")]),t._v(" "),s("h3",{attrs:{id:"_1-heroku-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-heroku-설치하기"}},[t._v("#")]),t._v(" 1. heroku 설치하기")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" snap "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" heroku --classic\n")])])]),s("h3",{attrs:{id:"_2-heroku-로그인하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-heroku-로그인하기"}},[t._v("#")]),t._v(" 2. heroku 로그인하기")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("heroku login\n")])])]),s("h3",{attrs:{id:"_3-app-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-app-만들기"}},[t._v("#")]),t._v(" 3. App 만들기")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ heroku create\nCreating sharp-rain-871"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". done, stack is heroku-18\nhttp://sharp-rain-871.herokuapp.com/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" https://git.heroku.com/sharp-rain-871.git\nGit remote heroku added\n")])])]),s("h3",{attrs:{id:"_4-remote에-추가하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-remote에-추가하기"}},[t._v("#")]),t._v(" 4. remote에 추가하기")]),t._v(" "),s("p",[t._v("3에서 만든 App에서 깃허브 주소를 remote에 추가해주어야 한다.")]),t._v(" "),s("p",[t._v("추가하는 방법은 아래와 같다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" heroku "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GIT_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("code",[t._v("git remote -v")]),t._v("로 추가된 remote를 확인할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\nheroku  https://git.heroku.com/protected-oasis-82576.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nheroku  https://git.heroku.com/protected-oasis-82576.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin  git@github.com:hshine1226/youtube-clone.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin  git@github.com:hshine1226/youtube-clone.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-heroku-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-heroku-config"}},[t._v("#")]),t._v(" 5. heroku-config")]),t._v(" "),s("p",[t._v("우리는 .env 파일에 우리가 공개하고 싶지 않은 설정들을 저장해놓았기 때문에 이 설정들을 heroku에 push 해주어야 한다. 이럴 때 heroku-config를 사용해서 .env 환경변수 파일을 heroku config에 push 해줄수 있다.")]),t._v(" "),s("h4",{attrs:{id:"설치-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치-방법"}},[t._v("#")]),t._v(" 설치 방법")]),t._v(" "),s("p",[s("code",[t._v("heroku plugins:install heroku-config")])]),t._v(" "),s("h4",{attrs:{id:"push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push")]),t._v(" "),s("p",[t._v(".env 파일을 push하는 방법은 .env 파일이 있는 디렉토리에서 아래의 명령어를 실행하면 된다.")]),t._v(" "),s("p",[s("code",[t._v("heroku config:push")])]),t._v(" "),s("h4",{attrs:{id:"push된-config-확인하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push된-config-확인하기"}},[t._v("#")]),t._v(" push된 config 확인하기")]),t._v(" "),s("p",[t._v("push한 config 설정들을 확인하려면 아래의 명령어로 확인 가능하다.")]),t._v(" "),s("p",[s("code",[t._v("heroku config")])]),t._v(" "),s("h3",{attrs:{id:"_6-procfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-procfile"}},[t._v("#")]),t._v(" 6. procfile")]),t._v(" "),s("p",[t._v("heroku에서는 기본적으로 build를 해주지 않는다. 따라서 우리는 시작하기 전에 build를 해주어야 한다. 아래와 같이 prestart를 추가해서 start를 실행하기 전에 build를 하게 해준다.")]),t._v(" "),s("p",[t._v("그리고 5번에서와 같이 config를 추가했으므로 start에 "),s("code",[t._v("PRODUCTION=true")]),t._v("를 추가해준다.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRODUCTION=true node build/init.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prestart"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-배포하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-배포하기"}},[t._v("#")]),t._v(" 6. 배포하기")]),t._v(" "),s("p",[t._v("heroku에 우리가 생성한 App을 아래와 같이 push해주면 배포가 완료된다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n")])])]),s("h2",{attrs:{id:"redirection-url-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirection-url-설정하기"}},[t._v("#")]),t._v(" redirection url 설정하기")]),t._v(" "),s("p",[t._v("heroku를 통해서 배포를 진행했기 때문에 Heroku app에서는 redirection url을 heroku로 다시 지정해주어야 한다.")]),t._v(" "),s("h2",{attrs:{id:"error-확인하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-확인하기"}},[t._v("#")]),t._v(" Error 확인하기")]),t._v(" "),s("p",[t._v("아래의 명령어를 사용하면 heroku 앱에서 발생한 에러를 자세하게 확인할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("heorku log --tail\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);