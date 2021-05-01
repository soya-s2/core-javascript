// 콜백 함수 예제 (2-1) Array.prototype.map

var newArr = [10, 20, 30].map(function (currentValue, index) { // map(콜백함수[, thisArg])
// 즉 메서드의 대상이 되는 배열의 모든 요소들을 모두 꺼내어 콜백 함수를 반복 호출함.
// 그리고 콜백 함수의 실행 결과들을 모아 새로운 배열을 생성.
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr);

/* 실행 결과
10 0
20 1
30 2
[ 15, 25, 35 ]
*/