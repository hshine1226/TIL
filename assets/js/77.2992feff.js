(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{437:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("h2",{attrs:{id:"사용법-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("p",[t._v("https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492/")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Project 생성")])]),t._v(" "),s("li",[s("p",[t._v("앱 프로젝트 기본 구조 구성")]),t._v(" "),s("blockquote",[s("p",[t._v("https://cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env")])])]),t._v(" "),s("li",[s("p",[t._v("개발용 라이브러리 설정\n루트 프로젝트 디렉터리에 appengine_config.py라는 파일 생성")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vendor\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Add any libraries installed in the "lib" folder.')]),t._v("\n\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vendor.add(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'lib'))")]),t._v("\n\n")])])])]),t._v(" "),s("li",[s("p",[t._v("루트 프로젝트 디렉터리에 requirements.txt라는 파일 생성")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Flask==1.1.2\n# Werkzeug<0.13.0,>=0.12.0\nrequests\nbs4\n")])])])]),t._v(" "),s("li",[s("p",[t._v("virtualenv를 사용하여 종속 항목을 설치.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("virtualenv "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" env/bin/activate\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" YOUR_PROJECT\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -t lib -r requirements.txt\n")])])]),s("p",[t._v("여기서 -t lib 플래그는 라이브러리를 배포 중에 App Engine에 업로드 되는 lib 폴더로 복사한다.")]),t._v(" "),s("p",[t._v("-r requirements.txt 플래그는 pip에 requirements.txt 파일의 모든 요소를 설치하도록 지시합니다.")])]),t._v(" "),s("li",[s("p",[t._v("루트 디렉터리에 app.yaml 파일 만들기")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" python37\n\nhandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("static\n    static_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" static\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n    script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"배포-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#배포-방법"}},[t._v("#")]),t._v(" 배포 방법")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("gcloud app deploy\n")])])]),s("h2",{attrs:{id:"라이브러리를-사용할-때"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라이브러리를-사용할-때"}},[t._v("#")]),t._v(" 라이브러리를 사용할 때")]),t._v(" "),s("ul",[s("li",[t._v("라이브러리를 사용하려면 requirements.txt 파일에 라이브러리를 선언해주어야 한다.")])]),t._v(" "),s("h2",{attrs:{id:"외부-라이브러리를-사용할-때"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#외부-라이브러리를-사용할-때"}},[t._v("#")]),t._v(" 외부 라이브러리를 사용할 때")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("외부 라이브러리를 사용하기 위해서 appengine_config.py에 외부 라이브러리 폴더를 지정해주어야 한다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vendor\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Add any libraries installed in the "lib" folder.')]),t._v("\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("realpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("그 후에 lib폴더에 외부 라이브러리를 직접 추가해야한다.")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);