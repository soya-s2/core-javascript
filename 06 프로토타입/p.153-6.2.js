// prototype과 __proto__

var Constructor = function (name) {
  this.name = name;
};
Constructor.prototype.method1 = function () { };
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor); // [Function: Constructor]
console.dir(instance); // Constructor { name: 'Instance' }

/*
어떤 생성자 함수의 인스턴스는 해당 생성자 함수의 이름을 표기함으로써 해당 함수의 인스턴스임을 표기하고 있다.
instance의 __proto__는 Constructor의 prototype과 동일한 내용으로 구성되어 있다.
*/