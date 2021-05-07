// 상대적으로 함수 표현식이 안전하다.

//console.log(sum(3, 4)); ※ TypeError: sum is not a function

var sum = function (x, y) {
  return x + y;
};

console.log(sum(3, 4)); // 7

var sum = function (x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
};

console.log(sum(3, 4)); // 3 + 4 = 7