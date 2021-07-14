// fs.writeFileSync() 메서드 - 동기적으로 파일 쓰기

// 모듈 추출
const fs = require('fs');

// 파일 쓰기
fs.writeFileSync(__dirname + '/output.txt', '안녕하세요...!');
console.log('파일 쓰기 완료!');