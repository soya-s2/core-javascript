// 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태

var sum = function sum(a, b) { // 함수 선언문은 전체를 호이스팅
  return a + b;
}
var multiply; // 함수 표현식은 변수 선언부만 호이스팅
console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) { // error. 
  return a * b;
  /*
  선언부만 호이스팅되어 찾을 수 없기 때문에 
  TypeError: multiply is not a function이 출력
  변수의 할당부는 제자리에 남겨둠
  */
}