// call/apply 메서드의 활용 3-1) 최대/최솟값을 구하는 코드를 직접 구현

var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];
numbers.forEach(function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});
console.log(max, min); // 45 3