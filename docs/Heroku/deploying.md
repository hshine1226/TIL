# Heroku로 application 배포하기

## heroku로 Application 배포하기

### 1. heroku 설치하기

```bash
sudo snap install heroku --classic
```

### 2. heroku 로그인하기

``` bash
heroku login
```

### 3. App 만들기

``` bash
$ heroku create
Creating sharp-rain-871... done, stack is heroku-18
http://sharp-rain-871.herokuapp.com/ | https://git.heroku.com/sharp-rain-871.git
Git remote heroku added
```

### 4. remote에 추가하기

3에서 만든 App에서 깃허브 주소를 remote에 추가해주어야 한다.

추가하는 방법은 아래와 같다.

``` bash
git remote add heroku <GIT_URL>
```

`git remote -v`로 추가된 remote를 확인할 수 있다.

``` bash
$ git remote -v
heroku  https://git.heroku.com/protected-oasis-82576.git (fetch)
heroku  https://git.heroku.com/protected-oasis-82576.git (push)
origin  git@github.com:hshine1226/youtube-clone.git (fetch)
origin  git@github.com:hshine1226/youtube-clone.git (push)
```

### 5. heroku-config

우리는 .env 파일에 우리가 공개하고 싶지 않은 설정들을 저장해놓았기 때문에 이 설정들을 heroku에 push 해주어야 한다. 이럴 때 heroku-config를 사용해서 .env 환경변수 파일을 heroku config에 push 해줄수 있다.

#### 설치 방법

 `heroku plugins:install heroku-config`

#### push 

.env 파일을 push하는 방법은 .env 파일이 있는 디렉토리에서 아래의 명령어를 실행하면 된다.

`heroku config:push`

#### push된 config 확인하기

push한 config 설정들을 확인하려면 아래의 명령어로 확인 가능하다.

`heroku config`

### 6. procfile

heroku에서는 기본적으로 build를 해주지 않는다. 따라서 우리는 시작하기 전에 build를 해주어야 한다. 아래와 같이 prestart를 추가해서 start를 실행하기 전에 build를 하게 해준다.

그리고 5번에서와 같이 config를 추가했으므로 start에 `PRODUCTION=true`를 추가해준다.

``` json
// package.json

"scripts": {    
    "start": "PRODUCTION=true node build/init.js",
    "prestart": "npm run build"
  },
```

### 6. 배포하기

heroku에 우리가 생성한 App을 아래와 같이 push해주면 배포가 완료된다.

```bash
git push heroku master
```

## redirection url 설정하기

heroku를 통해서 배포를 진행했기 때문에 Heroku app에서는 redirection url을 heroku로 다시 지정해주어야 한다.

## Error 확인하기

아래의 명령어를 사용하면 heroku 앱에서 발생한 에러를 자세하게 확인할 수 있다.

``` bash
heorku log --tail
```

