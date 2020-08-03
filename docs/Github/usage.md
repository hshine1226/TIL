# 깃허브 사용법

``` shell
git init
git add README.md
git commit -m "first commit"
git remote add origin 레퍼지토리주소
git push -u origin master
```

## git clone

`git clone`은 클라이언트 상에 아무것도 없을 때 서버의 프로젝트를 내려받는 명령어입니다.

`git clone [저장소 주소]`와 같이 명령어를 입력하면 됩니다.

## git remote

git remote는 원격 저장소를 관리할 수 있는 명령어입니다.

`git remote add origin 레퍼지토리주소`와 같이 명령어를 사용하면 origin이라는 이름으로 원격 저장소 주소를 등록하는 것입니다.

이 때 `origin`은 임의로 변경할 수 있습니다.

만약, origin이라는 원격 저장소를 지우고 싶다면 `git remote remove origin`이라고 하면 됩니다.

## git commit

`git commit -m "Message"` 명령어로 커밋을 작성할 수 있습니다.

## git push 

작성한 커밋을 원격 저장소에 저장하기 위해서는 `git push` 명령어를 사용합니다.

`git push origin master`와 같이 명령어를 입력해주면, origin 원격 저장소에 커밋을 push 해줍니다.

여기서 master는 현재 사용하는 컴퓨터의 브랜치 이름입니다.


## git pull

`git pull` 명령어는 다른 사람이 PR을 통해서 코드를 업데이트 했거나, Commit을 했을 때 그 변경 내용을 클라이언트로 내려받는 명령어입니다.

`git pull origin master`와 같이 명령어를 작성하면 origin 원격 저장소의 내용이 master로 복사됩니다.


