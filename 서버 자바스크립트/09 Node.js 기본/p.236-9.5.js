// os 모듈

// 모듈 추출
const os = require('os');

// 모듈 사용
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());

/*
require() 함수의 매개 변수로
문자열 os를 입력해 모듈을 추출하고 사용한다.
그리고 os 모듈 정보를 Node.js 문서에서 찾는다.
*/