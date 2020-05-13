# Flask에서 CSS 사용하는 방법

## 사용법

1. root 경로에 static 폴더 생성
2. static 폴더에 css 폴더 생성
3. html 파일에서 다음과 같이 css를 불러온다.

   ```html
   <link
     rel="stylesheet"
     href="{{ url_for('static', filename='css/report.css') }}"
   />
   ```

### Cache clear

> Ctrl + Shift + R
