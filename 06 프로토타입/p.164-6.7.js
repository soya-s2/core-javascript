// 배열에서 배열 메서드 및 객체 메서드 실행

var arr = [1, 2];
// arr(.__proto__).push(3);
// arr(.__proto__)(.__proto__).hasOwnProperty(2); // true

/*
배열도 객체이기 때문에 상위에 객체라는 개념이 있다.
그러므로 배열은 Object의 prototype 안에 있는 메서드도 사용할 수 있고,
Array의 prototype 안에 있는 메서드도 사용 가능하다.
즉 생략 가능한 (.__proto__)를 한번 따라가면 배열의 프로토타입을,
(.__proto__)를 두번 따라가면 객체의 프로토타입에 있는 메서드를 사용 가능한 것이다.

어떤 데이터의 __proto__ 프로퍼티 내부에 다시 __proto__ 프로퍼티가
연쇄적으로 이어진 것을 프로토타입 체인이라 하고,
이 체인을 따라가며 검색하는 것을 프로토타입 체이닝이라고 한다.

__proto__에는 또다른 __proto__가 있는데,
이는 prototype 객체도 객체이기 때문이다.
★ 기본적으로 모든 객체의 __proto__에는 Object.prototype이 연결된다.
prototype 객체도 예외는 아닌 것이다.

Person과 Person의 인스턴스인 kim을 예로 들자.
Person은 prototype 객체를 가지며 이것을 A라 하면,
A는 constructor가 Person이다.
인스턴스인 kim은 __proto__라는 프로퍼티를 가지며,
이것은 A를 참조한다.
즉 인스턴스의 __proto__는 생성자의 prototype 객체를 참조한다.
*/