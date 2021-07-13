// url 모듈

// 모듈 추출
const url = require('url');

// 모듈 사용
const parsedObject = url.parse('http://wwww.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);

/*
url 모듈의 parse 메서드는 
url 문자열을 url 객체로 변환하여 리턴해준다.
*/