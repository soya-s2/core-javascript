// 이벤트 매개 변수

// exit 이벤트를 연결
process.on('exit', (code) => {
  console.log('프로세스 종료되었습니다.');
  console.log(`exit 이벤트 매개 변수 : ${code}`);
});

// uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', (error) => {
  console.log('예외가 발생했습니다.');
  console.log(`uncaughtException 이벤트 매개 변수 : ${error}`);
});

// 예외를 강제로 발생시킵니다.
error.error.error();

/*
예외가 발생했습니다.
uncaughtException 이벤트 매개 변수 : ReferenceError: error is not defined
프로세스 종료되었습니다.
exit 이벤트 매개 변수 : 0

이벤트 매개 변수로 무엇이 들어오는지는
문서를 참고해야 알 수 있다. (Node.js 문서)
*/