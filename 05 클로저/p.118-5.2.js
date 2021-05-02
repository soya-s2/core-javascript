// 외부 함수의 변수를 참조하는 내부 함수(2)

var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner();
};
var outer2 = outer();
console.log(outer2); // 2

/* outer 함수의 실행 컨텍스트가 종료되기 이전에
inner 함수의 실행 컨텍스트가 종료된다.
outer의 실행 컨텍스트가 종료된 후에도
inner 함수를 호출할 수 있게 만들어보자. */