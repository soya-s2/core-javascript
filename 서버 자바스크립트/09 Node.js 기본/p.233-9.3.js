// process 객체의 이벤트

// exit 이벤트를 연결
process.on('exit', () => {
  console.log('프로세스가 종료되었습니다.');
});

// uncaughtException 이벤트를 연결
process.on('uncaughtException', () => {
  console.log('예외가 발생했습니다.');
});

// 예외를 강제로 발생시킴
error.error.error();

/*
Node.js의 이벤트 연결 메서드는
on(<이벤트 이름>,<이벤트 핸들러>) 순으로 쓴다.

이벤트 핸들러의 매개변수로 전달되는 매개변수를 '이벤트 매개변수'라고 한다.
*/