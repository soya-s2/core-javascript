// request 모듈

// 모듈 추출
const request = require('request');

// request 모듈을 사용
const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
  console.log(body);
});

/* 
코드를 실행하면 웹 페이지의 소스 코드를 긁어와서 출력한다.
request는 url에 요청을 보내고 response를 받는 모듈이다.
*/