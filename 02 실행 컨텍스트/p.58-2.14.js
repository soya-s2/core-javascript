// 스코프 체인 확인 (1) - 크롬 전용

var a = 1;
var outer = function () {
  var b = 2;
  var inner = function () {
    console.dir(inner);
  };
  inner();
};
outer();