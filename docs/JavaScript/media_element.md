# 자바스크립트에서 Media Element 제어하기

자바스크립트에서 Media Element 제어하기 위해서는 [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) 공식 MDN 문서를 확인하면 된다.

## Play and pause

다음의 속성과 메소드를 활용해서 `HTMLMediaElement.paused`, `HTMLMediaElement.play()`, `HTMLMediaElement.play()` 플레이어의 동영상 재생과 정지를 구현해보자.

### HTMLMediaElement.paused

읽기만 가능한 속성으로 Boolean 형태로 해당 미디어가 정지된 상태인지 아닌지 알려준다.

### HTMLMediaElement.play()

미디어의 재생을 시작하는 메소드이다.

### HTMLMediaElement.pause()

미디어의 재생을 중지하는 메소드이다.

``` js 
const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    // 플레이를 한 후 버튼은 정지 버튼으로 바꾼다.
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
    videoPlayer.pause();
    // 정지를 한 후 버튼은 플레이 버튼으로 바꾼다.
    playBtn.innerHTML = "<i class='fas fa-play'></i>";
  }
}

function init() {
  // EventListener로 Click 했을 때 handlePlayClick 함수를 실행하도록 한다.
  playBtn.addEventListener("click", handlePlayClick);
}

// videoContainer가 존재할 때만 init()을 실행하도록 한다.
// videoContainer가 없다면 에러가 날 수 있기 때문이다.
if (videoContainer) {
  init();
}
```

## Mute and unmute

Mute와 Unmute는 `HTMLMediaElement.muted`속성을 사용해서 제어할 수 있다.

### HTMLMediaElement.muted

기본적으로 이 속성은 음소거 여부를 Boolean 값으로 반환하지만, 읽기 전용이 아니기 때문에 값을 변경할 수 있다. 아래의 코드를 참고하자.

``` js
const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const volumeBtn = document.getElementById("jsVolumeBtn");

function handleVolumeClick() {
  // videoPlayer가 mute일 때
  if (videoPlayer.muted) {
    // mute의 값을 false로 변경해서 소리가 나오게 한다.
    videoPlayer.muted = false;
    // 소리가 나오면 volume-up 아이콘으로 변경한다.
    volumeBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
  } else {
    // mute의 값을 true로 변경해서 소리가 나오지 않게 한다.
    videoPlayer.muted = true;
    // 소리가 멈추면 volume-mute 아이콘으로 변경한다.
    volumeBtn.innerHTML = "<i class='fas fa-volume-mute'></i>";
  }
}


function init() {
  volumeBtn.addEventListener("click", handleVolumeClick);
}

// videoContainer가 존재할 때만 init()을 실행하도록 한다.
// videoContainer가 없다면 에러가 날 수 있기 때문이다.
if (videoContainer) {
  init();
}

```

## Fullscreen, Exit Fullscreen

Fullscreen은 해당 문서([Using fullscreen mode](https://developer.mozilla.org/ko/docs/Web/Guide/DOM/Using_full_screen_mode))에서 확인할 수 있다.

### HTMLMediaElement.requestFullScreen

``` js
const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const fullScrnBtn = document.getElementById("jsFullScreen");

function exitFullScreen() {
  fullScrnBtn.innerHTML = "<i class='fas fa-expand'></i>";
  fullScrnBtn.addEventListener("click", goFullScreen);
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullScreen) {
    document.webkitExitFullScreen();
  } else if (document.msExitFullScreen) {
    document.msExitFullScreen();
  }
}

function goFullScreen() {
  // 브라우저 호환성을 위해 아래와 같이 Prefix를 지정해준다.
  if (videoContainer.requestFullScreen) {
    videoContainer.requestFullScreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullScreen) {
    videoContainer.webkitRequestFullScreen();
  } else if (videoContainer.msRequestFullScreen) {
    videoContainer.msRequestFullScreen();
  }
  fullScrnBtn.innerHTML = "<i class='fas fa-compress'></i>";
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}


function init() {
  // FullScreen 버튼이 클릭하면 goFullScreen 함수가 실행되도록 EventListener를 추가한다.
  fullScrnBtn.addEventListener("click", goFullScreen);
}

// videoContainer가 존재할 때만 init()을 실행하도록 한다.
// videoContainer가 없다면 에러가 날 수 있기 때문이다.
if (videoContainer) {
  init();
}

```

## Total time and current time

### durationchange event

durationchange event는 duration 속성이 변경된 시점에 발생하는 이벤트이다.

### timeupdate event

timeupdate event는 currentTime 속성이 변경되는 시점에 발생하는 이벤트이다.

``` js
const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const currentTime = document.getElementById("jsCurrentTime");
const totalTime = document.getElementById("jsTotalTime");

// 초를 시간, 분, 초로 변환해주는 함수이다.
function secondsToHms(d) {
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);

  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  return `${h}:${m}:${s} `;
}

function setCurrentTime() {
  currentTime.innerHTML = secondsToHms(videoPlayer.currentTime);
}

function setTotalTime() {
  totalTime.innerHTML = secondsToHms(videoPlayer.duration);
}

function init() {
  // duration 즉, totalTime이 변경되면 setTotalTime 함수를 호출한다.
  videoPlayer.addEventListener("durationchange", setTotalTime);
  // currentTime 속성이 변경되면 setCurrentTime 함수를 호출한다.
  videoPlayer.addEventListener("timeupdate", setCurrentTime);
}

// videoContainer가 존재할 때만 init()을 실행하도록 한다.
// videoContainer가 없다면 에러가 날 수 있기 때문이다.
if (videoContainer) {
  init();
}

```

