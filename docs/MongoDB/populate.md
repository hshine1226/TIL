# Mongoose populate

몽구스에는 populate라는 기능이 있다. 해당 기능은 ObjectId를 실제 객체로 치환시키고 싶을 때 사용한다.

```js
const video = await Video.findById(id);
console.log(video.creator);

// creator를 실제 객체로 치환한다.
const video = await Video.findById(id).populate("creator");
console.log(video.creator);
```

## populate 미사용 결과

```shell
5ee0816b9203fb7d33bddf58
```

## populate 사용 결과

아래와 같이 populate를 통해 creator를 치환해주면, 해당 creator가 만든 video id 목록을 확인할 수도 있다.

```shell
{
  videos: [
    5ee8844acc3e465bf6b14533,
    5ee88605cc3e465bf6b14534,
    5ee886e3502b8f62245a03a3,
    5ee887f1502b8f62245a03a4
  ],
  comments: [],
  _id: 5ee0816b9203fb7d33bddf58,
  name: '최준혁',
  email: 'hshine1226@gmail.com',
  __v: 4,
  githubId: 31975706,
  googleId: 104800319884752320000,
  avatarUrl: 'uploads/avatars/52e8baf497b8fafc608d6e01b85a2165',
  facebookId: 135595834827089
}
```

## creator 사용 예시

pupulate를 사용해서 creator를 실제 객체로 치환시켰기 때문에 `video.creator`를 통해서 id, name을 확인해서 아래와같이 화면에 업로드한 유저를 출력할 수 있다.

```pug
// views/videoDetail.pug

.video__author
    |Uploaded by
    a(href=routes.userDetail(video.creator.id))=video.creator.name

```

## 정리

populate를 너무 맹신해서는 안된다. 왜냐하면 이는 DB에서 합쳐주는 것이 아니고 JavaScript 단에서 합쳐주는 것이기 때문에 성능이 그렇게 좋지 못하다. 그리고 특히 populate가 중첩되면 성능 문제가 생길 확률이 커진다.
