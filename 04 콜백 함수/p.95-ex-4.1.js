var count = 0; // count를 0으로 초기화
var timer = setInterval(function () { // timer에 setInterval함수를 실행한 결과를 할당. 첫 매개변수는 익명함수이고 두번째 매개변수는 300이라는 숫자임.
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);
// 즉 setInterval(func, delay)하면 매 delay ms마다 func를 실행함
// timer에는 clearInterval을 하기 위한 고유한 ID가 담김