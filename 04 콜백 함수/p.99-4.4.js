// 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우

var newArr2 = [10, 20, 30].map(function (index, currentValue) { // 인자의 순서를 임의로 바꾸어 사용한 경우 (제이쿼리의 방식대로)
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log(newArr2); // 사람은 그저 순서를 바꾸어 쓰지만 컴퓨터는 currentValue, index의 순서로만 계산을 할 뿐이다. 
// 즉, 예제 4-3으로 치면 return index + 5;와 같은 것이다.
// 그러므로 내장 함수를 쓸 때에는 정해진 규칙에 맞게 작성해야 한다. (제어권은 map에게 있으므로)

/* 실행 결과
10 0
20 1
30 2 
[ 5, 6, 7 ]
*/