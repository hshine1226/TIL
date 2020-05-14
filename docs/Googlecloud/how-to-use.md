# 사용법

## 사용법

https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492/

1. Project 생성
2. 앱 프로젝트 기본 구조 구성

   > https://cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env

3. 개발용 라이브러리 설정
   루트 프로젝트 디렉터리에 appengine_config.py라는 파일 생성

   ```python
   from google.appengine.ext import vendor

   # Add any libraries installed in the "lib" folder.

   vendor.add('lib')
   # vendor.add(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'lib'))

   ```

4. 루트 프로젝트 디렉터리에 requirements.txt라는 파일 생성

   ```txt
   Flask==1.1.2
   # Werkzeug<0.13.0,>=0.12.0
   requests
   bs4
   ```

5. virtualenv를 사용하여 종속 항목을 설치.

   ```shell
   virtualenv env
   source env/bin/activate
   ```

   ```shell
   cd YOUR_PROJECT
   pip install -t lib -r requirements.txt
   ```

   여기서 -t lib 플래그는 라이브러리를 배포 중에 App Engine에 업로드 되는 lib 폴더로 복사한다.

   -r requirements.txt 플래그는 pip에 requirements.txt 파일의 모든 요소를 설치하도록 지시합니다.

6. 루트 디렉터리에 app.yaml 파일 만들기

   ```python
   runtime: python37

   handlers:
   - url: /static
       static_dir: static
   - url: /.*
       script: auto
   ```

## 배포 방법

```shell
gcloud app deploy
```

## 라이브러리를 사용할 때

- 라이브러리를 사용하려면 requirements.txt 파일에 라이브러리를 선언해주어야 한다.

## 외부 라이브러리를 사용할 때

- 외부 라이브러리를 사용하기 위해서 appengine_config.py에 외부 라이브러리 폴더를 지정해주어야 한다.

  ```python
  from google.appengine.ext import vendor
  import sys
  import os
  # Add any libraries installed in the "lib" folder.
  vendor.add(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'lib'))
  ```

- 그 후에 lib폴더에 외부 라이브러리를 직접 추가해야한다.
