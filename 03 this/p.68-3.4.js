// 전역변수와 전역객체 (2)

var a = 1;
window.b = 2;
console.log(a, window.a, this.a); // 1 1 1
console.log(b, window.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, window.a, this.a); // 3 3 3
console.log(b, window.b, this.b); // 4 4 4

/* 대부분의 경우에는 전역변수 선언이
window.변수 = ?와 같이 동작한다. */