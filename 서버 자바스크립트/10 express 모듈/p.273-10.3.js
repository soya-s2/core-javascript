// response 객체의 기본 메서드

// 모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('*', (request, response) => {
  response.status(404); // response.status는 상태 코드를 제공
  response.set('methodA', 'ABCDE');
  response.set({ // response.set은 헤더를 설정함
    'methodB1': 'FGHIJ',
    'methodB2': 'KLMNO'
  });
  response.send('내 마음대로 본문을 입력합니다.'); // response.send는 데이터 본문을 제공
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
})