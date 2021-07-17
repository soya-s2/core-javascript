// fs.readFileSync() 메서드 - 동기 코드 예외 처리

/*
동기 코드를 예외 처리할 때는 try catch 구문을,
비동기 코드를 예외 처리할 때는 콜백함수로 전달된 첫 번째 매개변수 error를 활용하여
예외 처리를 하면 된다.
*/

// 모듈 추출
const fs = require('fs');

// 예외 처리
try {
  // 파일을 읽어 들이고 출력
  const file = fs.readFileSync('none.txt');
  console.log(file);
  console.log(file.toString());
} catch (e) {
  // 예외 발생 시
  console.log('파일을 읽어 들이는데 문제가 발생했습니다.');
  console.log(e); // Error: ENOENT: no such file or directory, open 'none.txt'
}

