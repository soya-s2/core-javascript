// 그림 파일과 음악 파일 제공

// 모듈 추출
const express = require('express');
const fs = require('fs');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('/image', (request, response) => {
  fs.readFile('image.png', (error, data) => {
    // 이미지 파일을 제공
    response.type('image/png');
    response.send(data);
  });
});

app.get('/audio', (request, response) => {
  fs.readFile('audio.mp3', (error, data) => {
    // 음악 파일을 제공
    response.type('audio/mpeg');
    response.send(data);
  });
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});

/*
HTML 파일을 제공할 때 MIME 형식을 따로 지정하지 않는 이유는
express 모듈이 자동으로 붙여주기 때문임.
express 모듈에는 기본적인 파일 형식만 입력하면
자동으로 MIME 형식을 찾아주는 기능이 들어있음. (내부적으로 mime 모듈을 활용함)
*/