// Person.prototype

var Person = function (name) {
  this._name = name;
};
Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person('Suzi');
suzi.__proto__.getName(); // undefined

/*
line 11의 this에 바인딩 된 대상이
suzi가 아니라 suzi.__proto__이므로
_name 프로퍼티를 찾을 수 없다.
그러므로 suzi.__proto__ 객체에 name 프로퍼티가 있도록

var suzi = new Person('Suzi');
suzi.__proto__._name = 'SUZI__proto__';
suzi.__proto__.getName();을 하면 잘 출력된다.

즉 관건은 this가 __proto__객체가 되는 것이다.
이에 대한 방법은 __proto__ 없이 인스턴스에서 곧바로 메서드를 쓰는 방법이 있다.

var suzi = new Person('Suzi', 28);
suzi.getName(); // Suzi
var iu = new Person('Jieun', 28);
iu.getName(); // Zieun

__proto__를 빼면 this는 instance 자체가 된다. 
이는 정상적인 방법인데, __proto__가 생략 가능한 프로퍼티이기 때문이다.
'그냥 그런가보다'하는 수밖에 없다고 한다.

suzi.__proto__.getName
-> suzi(.__proto__).getName
-> suzi.getName

총 정리하자면
인스턴스의 __proto__ 프로퍼티는 생성자 함수의 prototype을 참조하고,
위의 예제에 한정하면 suzi 객체에 _name 프로퍼티가 있는 것이며
우리는 suzi.__proto__.getName()을 했기 때문에
this가 suzi가 아닌 suzi.__proto__가 되고
suzi.__proto__ 객체에는 _name은 없고 getName() 메서드만 있으므로 
undefined가 출력되는 것이다.
*/