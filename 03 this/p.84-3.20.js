// call/apply 메서드의 활용 1-4) ES6의 Array.from 메서드

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
var arr = Array.from(obj);
console.log(arr); // [ 'a', 'b', 'c' ]

/*
유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을
배열로 전환하는 메서드가 바로 Array.from 메서드이다. 
*/