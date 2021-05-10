// 빈 요소와 배열의 순회

var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) { console.log(v, i); }); // undefined 0 , 1 1.
arr2.forEach(function (v, i) { console.log(v, i); }); //               1 1. 비어있는 [0]의 요소가 순회에서 제외됨

arr1.map(function (v, i) { return v + i; }); // [NaN, 2]
arr2.map(function (v, i) { return v + i; }); // [empty, 2]

arr1.filter(function (v) { return !v; }); // [undefined]
arr2.filter(function (v) { return !v; }); // []

arr1.reduce(function (p, c, i) { return p + c + i; }, ''); // undefined011
arr2.reduce(function (p, c, i) { return p + c + i; }, ''); // 11

/* 각 메소드들의 기능에 대해서는 추후 다시 봐야함 */

/* 01 데이터타입/forEach-map-filter-reduce (1.21)에
모든 메소드의 문법과 예제들을 공부한 내용을 작성하였음 */