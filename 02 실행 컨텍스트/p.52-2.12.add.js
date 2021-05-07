// 2.12.js를 호이스팅 된 상태로 변형

var sum;
var sum;

sum = function (x, y) {
  return x + y;
};

console.log(sum(3, 4)); // 7

sum = function (x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
};

console.log(sum(3, 4)); // 3 + 4 = 7

/* 그러므로 함수 표현식이 
함수 선언에 있어 더 안전하다고 볼 수 있다. */