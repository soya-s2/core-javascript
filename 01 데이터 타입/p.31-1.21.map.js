/* map() 메서드는 배열 내의 모든 요소 각각에 대하여
주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 

# 구문 : arr.map(callback(currentValue[, index[, array[[)[, thisArg]) 

# 매개변수는 1.21.forEach.js와 같음 

# 반환 값 : 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

# 특징 : 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않음 
thisArg 매개변수가 전달되지 않은 경우 this는 undefined임 
호출한 배열의 값을 변형하지 않음 */

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots); // [ 1, 2, 3 ]

// map을 활용해 배열 속 객체를 재구성하기
var kvArray = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }];
var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
console.log(reformattedArray); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]


// 인자를 받는 함수를 사용하여 숫자 배열 재구성하기
var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles); // [ 2, 8, 18 ]


// map을 포괄적으로 사용하기
var map = Array.prototype.map;
var a = map.call('Hello World', function (x) { return x.charCodeAt(0); });
console.log(a); // [72, 101, 108, 108, 111,  32,  87, 111, 114, 108, 100]