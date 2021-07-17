// 페이지 라우팅

// 모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('/page/:id', (request, response) => { // ':<토큰 이름>'이 토큰이다. request의 params 속성으로 전달된다.
  // 토큰 꺼냄
  const id = request.params.id;

  // 응답
  response.send(`<h1>${id} Page</h1>`);
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});