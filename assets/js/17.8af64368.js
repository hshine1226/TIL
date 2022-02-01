(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python-version-관리하기-with-alternatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-version-관리하기-with-alternatives"}},[t._v("#")]),t._v(" Python version 관리하기 with Alternatives")]),t._v(" "),a("h2",{attrs:{id:"파이썬의-실행-위치-확인하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#파이썬의-실행-위치-확인하기"}},[t._v("#")]),t._v(" 파이썬의 실행 위치 확인하기")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ python -V\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".14\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" python\n/usr/bin/python\n")])])]),a("p",[t._v("which python 명령어를 사용하면 현재 사용하는 파이썬이 어디에 설치되어 있는지 알 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"update-alternatives로-파이썬-버전-등록-및-변경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-alternatives로-파이썬-버전-등록-및-변경"}},[t._v("#")]),t._v(" Update-alternatives로 파이썬 버전 등록 및 변경")]),t._v(" "),a("p",[t._v("이미 등록된 것이 있는지 확인")]),t._v(" "),a("p",[t._v("update-alternatives --config python 옵션은 python 버전을 변경하는 옵션이다.")]),t._v(" "),a("p",[t._v("아래 error 로그는 아무것도 등록된 것이 없다는 의미이다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config python\nupdate-alternatives: error: no alternatives "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" python\n")])])]),a("p",[t._v("아래와 같이 입력해서 2.7 버전과 3.6 버전을 등록한다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/python python /usr/bin/python2.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/python python /usr/bin/python3.6 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[t._v("update-alternatives --config python을 입력하면 등록한 파이썬 버전을 선택하는 메뉴가 나온다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config python\nThere are "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" choices "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the alternative python "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("providing /usr/bin/python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\n  Selection    Path                Priority   Status\n------------------------------------------------------------\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("            /usr/bin/python3.6   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         auto mode\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("            /usr/bin/python2.7   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         manual mode\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("            /usr/bin/python3.6   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         manual mode\n\nPress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" to keep the current choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" selection number: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[t._v("원하는 메뉴의 번호를 입력하고 파이썬 버전을 확인해보면 설정한 버전이 잘 지정된 것을 볼 수 있다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ python --version\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),t._v(".3\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al /usr/bin/python\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("월 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(":28 /usr/bin/python -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/alternatives/python\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al /etc/alternatives/python\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("월  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":59 /etc/alternatives/python -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/bin/python3.6\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);