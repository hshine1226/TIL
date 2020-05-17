# Alternatives를 이용해서 python version 관리하기

## 파이썬의 실행 위치 확인하기

```shell
$ python -V
Python 2.7.14

$ which python
/usr/bin/python
```

which python 명령어를 사용하면 현재 사용하는 파이썬이 어디에 설치되어 있는지 알 수 있다.

## Update-alternatives로 파이썬 버전 등록 및 변경

이미 등록된 것이 있는지 확인

update-alternatives --config python 옵션은 python 버전을 변경하는 옵션이다.

아래 error 로그는 아무것도 등록된 것이 없다는 의미이다.

```shell
$ sudo update-alternatives --config python
update-alternatives: error: no alternatives for python
```

아래와 같이 입력해서 2.7 버전과 3.6 버전을 등록한다.

```shell
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.6 2
```

update-alternatives --config python을 입력하면 등록한 파이썬 버전을 선택하는 메뉴가 나온다.

```shell
$ sudo update-alternatives --config python
There are 2 choices for the alternative python (providing /usr/bin/python).

  Selection    Path                Priority   Status
------------------------------------------------------------
* 0            /usr/bin/python3.6   2         auto mode
  1            /usr/bin/python2.7   1         manual mode
  2            /usr/bin/python3.6   2         manual mode

Press <enter> to keep the current choice[*], or type selection number: 2
```

원하는 메뉴의 번호를 입력하고 파이썬 버전을 확인해보면 설정한 버전이 잘 지정된 것을 볼 수 있다.

```shell
$ python --version
Python 3.6.3

$ ls -al /usr/bin/python
lrwxrwxrwx 1 root root 24  4월 18 19:28 /usr/bin/python -> /etc/alternatives/python

$ ls -al /etc/alternatives/python
lrwxrwxrwx 1 root root 18  9월  2 13:59 /etc/alternatives/python -> /usr/bin/python3.6
```
