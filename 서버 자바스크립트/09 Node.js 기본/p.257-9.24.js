// 복잡한 비동기 코드

// 모듈 추출
const fs = require('fs');

// 파일 A를 읽음
fs.readFile('fileA.txt', (error, fileA) => {
  // 파일 B를 읽음
  fs.readFile('fileB.txt', (error, fileB) => {
    // 파일 C를 읽음
    fs.readFile('fileC.txt', (error, fileC) => {
      console.log(fileA);
      console.log(fileB);
      console.log(fileC);
    });
  });
});

/*
비동기의 콜백지옥 발생.
n개의 파일을 읽을 때 n+1번의 들여쓰기가 발생함.
이를 해결하기 위해 async 모듈이 적절한 방안으로 제시됨.
async 모듈의 parallel() 메서드는
병렬 처리를 쉽게 할 수 있도록 도와줌.
*/