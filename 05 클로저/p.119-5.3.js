// 외부 함수의 변수를 참조하는 내부 함수(3)

var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner; // 함수 자체를 return 한다는 것에 유의
};
var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3