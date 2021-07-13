// fs.readFileSync() 메서드 - 동기적으로 파일 읽어 들이기

// 모듈 추출
const fs = require('fs');

// 파일을 읽어 들이고 출력
const file = fs.readFileSync(__dirname + '/textfile.txt');
console.log(file);
console.log(file.toString());

/*
<Buffer 54 68 69 73 20 69 73 20 4a 53>
This is JS
*/