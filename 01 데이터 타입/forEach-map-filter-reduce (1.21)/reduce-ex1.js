// 배열의 모든 값 합산

var sum = [0, 1, 2, 3, 4].reduce(function (accumulater, currentValue) {
  return accumulater + currentValue;
})

console.log(sum); // 10

/* 
  accumulater / currentValue / return  (다시 accuumulater가 됨)
      0               1           1
      1               2           3
      3               3           6
      6               4          10    (reduce()의 최종 반환 값)
*/