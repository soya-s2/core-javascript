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

/*
outer  함수는 외부(전역)로부터 철저하게 격리된 닫힌 공간이다.
외부에서는 외부 공간에 노출돼 있는 outer라는 변수를 통해
outer 함수를 실행은 가능하지만, outer 함수 내부에는 어떤 개입도 불가하다.
외부에서는 오직 outer 함수가 return한 정보에만 접근할 수 있다.
★ return 값이 외부에 정보를 제공하는 유일한 수단인 것이다.

그러니 외부에 제공하고자 하는 정보들을 모아 return하고,
내부에서만 사용할 정보들은 return하지 않는 것으로 접근 권한 제어가 가능하다.
return한 변수들은 공개 멤버, 그렇지 않은 변수들은 비공개 멤버가 된다.
*/