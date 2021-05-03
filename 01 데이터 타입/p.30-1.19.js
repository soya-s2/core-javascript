// 자동으로 undefined를 부여하는 경우

var a;
console.log(a); // undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 }; 
console.log(obj.a); // 1
console.log(obj.b); // undefined. 존재하지 않는 프로퍼티에 접근
// console.log(b); // ReferenceError: b is not defined

var func = function () { };
var c = func(); // 반환 값이 없으면 undefined를 반환한 것으로 간주
console.log(c); // undefined