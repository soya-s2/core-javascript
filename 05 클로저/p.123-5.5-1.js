// 클로저의 메모리 관리

// (1) return에 의한 클로저의 메모리 해제
var outer = (function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
})();
console.log(outer());
console.log(outer());
outer = null; // outer 식별자의 inner 함수 참조를 끊음

/*
클로저는 어떤 필요에 의해 의도적으로 함수의 지역변수를
메모리를 소모하도록 함으로써 발생하는 현상이다.
그 필요성이 사라진 시점에는 더는 메모리를 소모하지 않게 해주면 되는데,
그 방법은 참조 카운트를 0으로 만들어 GC가 수거해가도록 하는 것이다.
-> 참조 카운트를 0으로 만드는 방법은
식별자에 기본형 데이터(null, undefined)를 할당하면 된다.
그것이 메모리 해제 코드라고 볼 수 있다. 
*/