// 모든 작은 값 걸러내기 (10보다 큰 값만 걸러내기)

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); // [ 12, 130, 44 ]