// map을 활용해 배열 속 객체를 재구성하기

var kvArray = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }];
var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
console.log(reformattedArray); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]