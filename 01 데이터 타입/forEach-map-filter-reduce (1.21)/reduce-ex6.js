// 배열의 중복 항목 제거

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
  const length = accumulator.length;
  if (length === 0 || accumulator[length - 1] !== current) {
  // 빈 배열이거나 이전 인덱스의 값이 현재 값과 같지 않으면 (중복이 아니라면) 배열에 추가
    accumulator.push(current);
  }
  return accumulator;
}, []); // [] = initialValue
console.log(result); // [ 1, 2, 3, 4, 5 ]