// fs.writeFile() 메서드 - 비동기적으로 파일 쓰기

// 모듈 추출
const fs = require('fs');

// 파일 쓰기
fs.writeFile(__dirname + '/output2.txt', '안녕하세요...!2', (error) => {
  console.log('파일 쓰기 완료!2');
});
