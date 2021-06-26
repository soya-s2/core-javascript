// 커링 함수(2)

var curry5 = function (func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return func(a, b, c, d, e);
          };
        };
      };
    };
  };
};
var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));

/* 
인자를 5개만 받아서 처리했음에도 불구하고
13줄을 소모하여 더 많은 인자가 필요할 때 가독성이 떨어질 수 있다는 단점이 있다.

이것을 ES6의 화살표 함수를 이용하여 간단하게 표기할 수 있다.
var curry5 = func => a => b => c => d => e => func(a, b, c, d, e);

각 단계에서 받은 인자들을 모두 마지막 단계에서 참조하므로
GC되지 않고 메모리에 차곡차곡 쌓였다가 
마지막 호출로 실행 컨텍스트가 종료된 후에야 비로소 한꺼번에 GC의 수거 대상이 된다.
*/