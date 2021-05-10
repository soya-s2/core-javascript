// ex1에 두 번째 인수로 초기값을 제공, 화살표 함수 활용

var sum = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue, 10);
console.log(sum); // 20

/* 
두 번째 인수로 초기값을 제공하면, 
accumulator는 10이 되고 currentValue는 인덱스 0부터 시작함

  accumulater / currentValue / return  (다시 accuumulater가 됨)
      10             0           10
      10             1           11
      11             2           13
      13             3           16
      16             4           20    (reduce()의 최종 반환 값)

*/