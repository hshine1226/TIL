# MediaDevices 인터페이스의 getUserMedia()를 이용해서 비디오 녹화하기

## html 구성

``` pug
.record-container#jsRecordContainer
            video#jsVideoPreview
            button#jsRecordBtn Start Recording
```



## Video stream object 받아오기

MediaDevices에 접근하기 위해서는 `navigator.mediaDevices`를 통해서 접근한다.

[참고 문서](https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia)

``` js
const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");
let streamObject;


const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
	
    // videoPreview에 srcObject로 stream을 주어서 녹화 화면이 표시되게 한다.
    videoPreview.srcObject = stream;
    // videoPreview에서 소리가 들리는 것을 mute 시킨다.
    videoPreview.muted = true;
    // videoPreview를 시작한다.
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "😞 Can't record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};
```

## 녹화 시작하기

``` js
let videoRecorder;

const handleVideoData = (event) => {
  const { data: videoFile } = event;
  // 녹화된 video를 저장하기 위해서 fake link를 생성한다.
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  // faking click
  link.click();
};

const startRecording = () => {
  // MediaRecorder objct를 생성한다.
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  // dataavailable은 녹화가 다 끝나야 받을 수 있다.
  // 하지만 start(1000)과 같이 time을 주게 되면 1초마다 event를 가져올 수 있다.
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};
```

## 녹화 종료하기

``` js
const stopRecording = () => {
  videoRecorder.stop();
  // video 녹화 시 빨간 점이 안사라진다면 아래의 stream의 각각의 track을 stop해주어야 한다.
  streamObject.getTracks().forEach((track) => track.stop());
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Start recording";
};
```

## Blob Duration Bug

녹화된 blob 파일의 동영상 길이가 표시가 되지 않는 버그가 발생할 수 있다. 

이럴 때는 `getBlobDuration`을 통해서 동영상 길이를 받아올 수 있다.

``` js
// assets/js/videoPlayer.js

async function setTotalTime() {
  // blob을 받아오기 위해서 fetch를 사용한다.
  const blob = await fetch(videoPlayer.src).then((response) => response.blob());
  // blob duration을 받아온다.
  const duration = await getBlobDuration(blob);
  // totalTime.innerHTML = secondsToHms(videoPlayer.duration);
  totalTime.innerHTML = secondsToHms(duration);
  // setInterval(getCurrentTime, 1000);
}

```

