// 생성자 함수

var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age
  // console.log(this)
};
var choco = new Cat('초코', 7); // this : choco
var nabi = new Cat('나비', 5); // this : nabi
console.log(choco, nabi);

/* 
결과
Cat { bark: '야옹', name: '초코', age: 7 }
Cat { bark: '야옹', name: '나비', age: 5 }
*/

/* 자바스크립트에서는 함수에 생성자로서의 역할을 함께 부여했다.
new 명령어로 함수를 호출하면 해당 함수가 생성자로 동작한다.
어떤 함수가 생성자 함수로서 호출된 경우,
★ 내부에서의 this는 곧 새로 만들 구체적인 인스턴스 자신이 된다. 

생성자 함수를 new와 함께 호출하면,
미리 준비된 공통 속성 및 개성을 해당 객체(this)에 부여한다.
이렇게 해서 구체적인 인스턴스가 생성된다.

즉 위 line 8의 경우, var choco = new Cat('초코', 7)이 실행되면
Cat 함수는 생성자로서 동작하며,
this.?의 속성이 부여된 choco가 인스턴스로 생성된다. */