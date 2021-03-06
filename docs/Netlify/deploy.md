# Netlify로 React Static App 배포하기

Netlify는 Static App에서만 작동한다. 즉, Front-end만 작동한다는 것이다.

여기에는 서버를 넣을 수 없다. 하지만 우리는 서버가 없는 React App을 배포할 것이기 때문에 Netlify를 사용해서 배포를 해볼 것이다.

## 배포하기

### 1. Netlify를 통해 배포 설정하기

![New site from git](https://user-images.githubusercontent.com/31975706/90109548-f260ae80-dd86-11ea-8f9d-f9d7d1352fa6.PNG)

일단 Netlify에 로그인하게 되면 위와 같이 `New site from Git`이라는 것이 보인다. 이것을 클릭해보자!

--- 

![Choose provider](https://user-images.githubusercontent.com/31975706/90109703-28059780-dd87-11ea-9fc0-dadfcfebb783.PNG)

다음으로는 Github, GitLab, Bitbucket 중에서 소스코드가 호스팅되길 원하는 서비스를 선택한다.

우리는 Github를 통해서 배포를 할 것이기 때문에 Github를 선택해주자.

---

![Pick a repository](https://user-images.githubusercontent.com/31975706/90110031-96e2f080-dd87-11ea-9ad2-19989d130192.PNG)

다음으로는 배포하고 싶은 Repository를 선택하는 부분이다. 해당 Repository를 선택해주자.


---


![캡처2](https://user-images.githubusercontent.com/31975706/90110152-c134ae00-dd87-11ea-9807-a9c442f5b914.PNG)

마지막으로 `Build command`와 `Publish directory`를 정해주면 된다.

이것을 정해주게 되면 github에 push를 할 때마다 Netlify에서 자동적으로 해당 repository를 Build 해주게되고, 그 Build된 폴더를 통해서 배포를 진행해준다.

### 2. 내 앱의 homepage 설정

배포가 완료되었다면 배포한 앱의 `package.json` 파일에서 homepage에 배포된 url을 추가해주자.

왜냐하면 `index.html`을 확인해보면 아래와 같이 `$PUBLIC_URL`이라는 homepage의 주소를 따라서 변하게 되는 값이 있기 때문이다.

![캡처3](https://user-images.githubusercontent.com/31975706/90110408-212b5480-dd88-11ea-92e1-dec3f0bfcc34.PNG)

위와 같이 homepage를 설정하는 이유는 React App의 
![캡처4](https://user-images.githubusercontent.com/31975706/90110590-6ea7c180-dd88-11ea-8059-46e733931c26.PNG)
