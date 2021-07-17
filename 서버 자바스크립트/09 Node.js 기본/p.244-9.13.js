// 여러 파일을 비동기적으로 읽기 (ES6 문법 더 익혀야 함)

// 모듈 추출
const fs = require('fs');
const async = require('async');

// ★ 병렬적으로 ★ 파일 읽어 들이기
async.parallel([
  (callback) => { fs.readFile(__dirname + '/a.txt', callback); },
  (callback) => { fs.readFile(__dirname + '/b.txt', callback); },
  (callback) => { fs.readFile(__dirname + '/c.txt', callback); },
], (error, results) => {
  // 출력
  console.log(results.toString());
});