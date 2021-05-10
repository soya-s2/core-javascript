// 인자를 받는 함수를 사용하여 숫자 배열 재구성하기

var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles); // [ 2, 8, 18 ]