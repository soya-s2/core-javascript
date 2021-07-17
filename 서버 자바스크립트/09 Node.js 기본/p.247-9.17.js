// fs.readFile() 메서드 - 비동기 코드 예외 처리

// 모듈 추출
const fs = require('fs');

// 파일 읽어 들이기
fs.readFile('none.txt', (error, file) => {
  // 예외 처리
  if (error) {
    // 예외 발생 시
    console.log('파일을 읽어 들이는데 문제가 발생했습니다.');
    console.log(error);
  } else {
    // 출력
    console.log(file);
    console.log(file.toString());
  }
});