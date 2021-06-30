// 다양한 constructor 접근 방법

var Person = function (name) {
  this.name = name;
};
var p1 = new Person('사람1');
var p1Proto = Object.getPrototypeOf(p1); // Person { name: "사람1" } true
var p2 = new Person.prototype.constructor('사람2'); // Person { name: "사람2" } true
var p3 = new p1Proto.constructor('사람3'); // Person { name: "사람3" } true
var p4 = new p1.__proto__.constructor('사람4'); // Person { name: "사람4" } true
var p5 = new p1.constructor('사람5'); // Person { name: "사람5" } true

[p1, p2, p3, p4, p5].forEach(function (p) {
  console.log(p, p instanceof Person);
});

/*
즉 다음과 같은 것들은 모두 동일한 대상을 가리킨다.
[Constructor]
[instance].__proto__.constructor
[instance].constructor
Object.getPrototypeOf([instance]).constructor
[Constructor].prototype.constructor

다음 각 줄은 모두 동일한 객체(prototype)에 접근할 수 있다.
[Constructor].prototype
[instance].__proto__
[instance]
Object.getPrototypeOf([instance])
*/