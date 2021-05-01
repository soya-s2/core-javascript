// 콜백 함수 예제 - setInterval

var count = 0;
var timer = setInterval(function () { 
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);


/* 
결과
0
1
2
3
4
*/