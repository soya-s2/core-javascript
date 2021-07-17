// 상태 코드

// 모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('*', (request, response) => {
  response.redirect('http://hanbit.co.kr');
});


/* 
set() 메서드로 직접 구현
response.status(302);
response.set('Location', 'http://hanbit.co.kr');
response.send();
*/


// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});

/*
http://127.0.0.1:52273에 접속하는 순간
한빛출판네트워크 웹 사이트로 바로 이동한다.

★ 웹 서버가 클라이언트로 제공하는 것은 3가지 요소가 있다.
헤더, 상태 코드, 본문이다.
이를 어떻게 활용할 수 있는지 아는 것이
서버 개발의 시작이자 끝이라고 할 수 있다.
*/