var arr = [1, 2];
// console.dir(arr);
// console.dir(Array);

/*
arr을 dir로 추적하면 Array가 표시되고,
Array의 prototype과 arr의 __proto__가 같은 것을 알 수 있다.
이는 arr를 new Array로 생성하든, 배열 리터럴로 선언하든
instance인 [1, 2]가 만들어지고, __proto__가 Array.prototype을 참조하게 되기 때문.
__proto__는 생략 가능하므로 마치 instance가 push, pop 등을 자신의 메서드인 것처럼 호출 가능함.
*/

arr.forEach(function () { }); // (O) true
Array.isArray(arr); // (O) true
arr.isArray(); // (X) TypeError: arr.isArray is not a function

/*
line 13 - line 15는 
Array의 생성자 함수에 있는 프로퍼티나 메서드이기 때문에
arr에서는 직접 호출할 수 없다.
즉 Array 생성자 함수의 prototype 프로퍼티 내부에 있는 것들에만
arr가 접근해서 사용할 수 있는 것이다.
*/