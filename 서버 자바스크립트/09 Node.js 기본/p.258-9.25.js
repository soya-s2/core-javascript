// async 모듈의 parallel() 메서드

// 모듈 추출
const fs = require('fs');
const async = require('async');

// 파일 A를 읽음
async.parallel({
  fileA: (callback) => {
    fs.readFile('fileA.txt', callback);
  },
  fileB: (callback) => {
    fs.readFile('fileB.txt', callback);
  },
  fileC: (callback) => {
    fs.readFile('fileC.txt', callback);
  }
}, (error, results) => {
  console.log(results.fileA);
  console.log(results.fileB);
  console.log(results.fileC);
});