// 여러 파일을 비동기적으로 읽기 (오류 추정-수정 완료)

// 모듈 추출
const fs = require('fs');

// 파일 읽어 들이기
const a = fs.readFileSync(__dirname + '/a.txt');
const b = fs.readFileSync(__dirname + '/b.txt');
const c = fs.readFileSync(__dirname + '/c.txt');

// 파일 출력
console.log(a.toString(), b.toString(), c.toString());