// fs.readFile() 메서드 - 비동기적으로 파일 읽어 들이기

// 모듈 추출
const fs = require('fs');

// 파일 읽어 들이기
fs.readFile(__dirname + '/textfile.txt', (error, file) => {
  // 출력
  console.log(file);
  console.log(file.toString());
});

/*
<Buffer 54 68 69 73 20 69 73 20 4a 53>
This is JS
*/

/*
9-10.js와 9-11.js는 실행 결과는 같지만,
내부적으로 실행되는 구조는 다르다.
p.241~을 참고하여 동기적 파일 읽기와 비동기적 파일 읽기의 차이를 알아본다.
*/