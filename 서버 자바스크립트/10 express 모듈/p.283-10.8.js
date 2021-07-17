// 정적 파일 제공

// 모듈 추출
const express = require('express');
const path = require('path');
// 서버 생성
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// request 이벤트 리스너 설정
app.get('*', (request, response) => {
  //response.status(404);
  //response.send('<img src="/test.png">');
});

// 서버 실행
app.listen(52273, () => {
  console.log(__dirname);
  console.log('Server running at http://127.0.0.1:52273');
});