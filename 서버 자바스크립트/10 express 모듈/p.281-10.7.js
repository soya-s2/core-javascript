// 요청 매개변수 추출

// 모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너를 설정
app.get('*', (request, response) => { // '*'는 모든 경로를 나타낸다.
  console.log(request.query);
  response.send(request.query);
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});

/*
요청 매개 변수를 추출할 때는 query 객체를 사용한다.
요청 매개 변수는 URL뒤에 ?기호를 삽입하고
'<키>=<값>' 형태로 값을 &로 구분해서 입력한다.
*/