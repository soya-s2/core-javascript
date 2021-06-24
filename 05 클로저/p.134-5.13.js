// bind 메서드를 활용한 부분 적용 함수

/* 부분 적용 함수란 n개의 인자를 받는 함수에
미리 m개의 인자만 넘겨 기억시키고,
나중에 (n-m)개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻을 수 있게끔 하는 함수.
this를 바인딩해야 하는 점을 제외하면
앞서 살펴본 bind 메서드의 실행 결과가 바로 부분 적용 함수임. */

var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55

/*
addPrrtial 함수는 인자 5개를 미리 적용하고,
추후 추가적으로 인자들을 전달하면 모든 인자를 모아 원래의 함수가 실행되는 부분 적용 함수이다.
add 함수는 this를 사용하지 않으므로 bind 메서드만으로도 문제 없이 구현됐다.
그러나 this의 값을 변경할 수밖에 없기 때문에 메서드에서는 사용할 수 없다.
*/