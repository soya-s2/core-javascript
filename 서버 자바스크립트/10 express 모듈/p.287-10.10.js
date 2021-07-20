// body-parser 미들웨어

// 모듈 추출
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { response } = require('express');

// 서버 생성
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

// request 이벤트 리스너 설정
app.get('/', (request, response) => {
  // HTML 형식의 문자열 생성
  let output = '';
  output += '<form method="post">';
  output += '<input type="text" name="a" />';
  output += '<input type="text" name="b" />';
  output += '<input type="submit" />';
  output += '</form>';

  // 응답
  response.send(output);
});

app.post('/', (request, response) => {
  // 응답
  response.send(request.body);
});

// 서버 실행
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});