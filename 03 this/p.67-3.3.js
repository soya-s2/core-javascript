// 전역변수와 전역객체 (1)

var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1

/* 전역변수를 선언하면
전역객체의 프로퍼티로도 할당한다. 

자바스크립트의 모든 변수는
실은 특정 객체의 프로퍼티로서 동작한다.

var a = ? 를 하더라도
어떤 특정 객체의 프로퍼티로 인식하는 것이다. 
위에서 말하는 어떤 특정 객체는 L.E이며,
실행 컨텍스트는 어떤 변수를 수집하여 L.E의 프로퍼티로 저장한다. */