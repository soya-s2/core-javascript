// p.95-4.1을 보기 좋게 바꾼 version

var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300); // timer에는 setInterval의 ID가 담김.

// cbFunc()의 호출 주체와 제어권은 사용자에게 있음
// setInterval(cbFunc, 300)의 호출 주체와 제어권은 setInterval에 있음

/* 실행 결과
0
1
2
3
4
*/