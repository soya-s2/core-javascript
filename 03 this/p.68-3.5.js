// 전역변수와 전역객체 (3)

var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1

var b = 2;
delete b; // false
console.log(b, window.b, this.b); // 2 2 2

window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined

window.d = 4;
delete d; // true
console.log(d, window.d, this.d); // Uncaught ReferenceError: d is not defined

/* 전역객체의 프로퍼티로 할당(window.?)한 경우에는
delete 키워드로 삭제가 가능하지만,
전역변수로 선언한 경우에는 삭제가 되지 않는다. */