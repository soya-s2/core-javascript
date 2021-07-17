// 조기 리턴 활용

// 모듈 추출
const fs = require('fs');

// 파일 읽어 들이기
fs.readFile('textfile.txt', (error, file) => {
  // 예외 처리
  if (error) {
    // 예외가 발생했을 때
    console.log('파일을 읽어 들이는데 문제가 발생했습니다.');
    console.log(error);
    return;
    // 여기 부분이 '조기 리턴'이며, else를 쓰지 않아도 된다.
  }

  // 출력
  console.log(file);
  console.log(file.toString());
});

/* 
Node.js에서는 동기 처리를 사용할 이유가 없으며
따라서 비동기 처리와 관련된 내용에 주력할 것. 
*/