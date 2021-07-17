// express 모듈로 서버 생성과 실행

// 모듈 추출
const express = require('express');

// 서버 생성
const app = express(); // + 서버 어플리케이션 객체를 생성함

// request 이벤트 리스너를 설정함
app.use((request, response) => { // + 요청이 왔을 때 실행할 함수를 지정
  response.send('<h1>Hello express</h1>');
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});

/*
컴퓨터에는 0부터 65535번까지의 포트가 있음.
웹이 '정보의 바다'라면, 포트는 '항구'임.
즉 컴퓨터와 컴퓨터를 연결하는 정보의 출입구 역할을 함

이 프로그램에서 52273 포트를 사용한다는 것은
우리 컴퓨터에서 52273번 항구에 서버 프로그램을 연결해
다른 컴퓨터에서 접속할 수 있게 하는 것임.
*/