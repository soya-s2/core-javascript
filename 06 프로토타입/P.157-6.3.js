// constructor 프로퍼티

var arr = [1, 2];
Array.prototype.constructor === Array // true
arr.__proto__.constructor === Array // true
arr.constructor === Array // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]

/*
생성자 함수의 프로퍼티인 prototype 객체 내부에 constructor라는 프로퍼티가 있으며,
인스턴스의 __proto__ 객체 내부에도 있다.
인스턴스의 __proto__가 생성자 함수의 prototype 프로퍼티를 참조하기 때문이다.
__proto__가 생략 가능하므로 인스턴스에서 직접 constructor에 접근할 수 있는 수단이 생긴다.
constructor 프로퍼티는 단어 그대로 원래의 생성자 함수(자기 자신)를 참조한다.
이 프로퍼티는 인스턴스로부터 그 원형이 무엇인지를 알 수 있는 좋은 수단이 된다.

한편 constructor는 읽기 전용 속성이 부여된 예외적인 경우(number, string, boolean)를
제외하고는 값을 바꿀 수 있다. 이는 예제 6-4에서 다룬다.
*/