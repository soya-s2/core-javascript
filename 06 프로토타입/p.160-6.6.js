// 메서드 오버라이드

var Person = function (name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};

var iu = new Person('지금');
iu.getName = function () {
  return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금

/*
위의 코드는 인스턴스가 동일한 이름의 메서드를 가지고 있는 경우이다.
iu.__proto__.getName이 아닌 iu 객체에 있는 getName 메서드가 호출되었다.
즉 원래는 Person.prototype.getName이 호출되어야 한다. (iu.getName은 iu.__proto__.getName과 같으므로)
결과는 '지금'이어야 하는데 '바로 지금'이 출력된 것이다.
이런 현상을 메서드 오버라이드라고 한다. (메서드 위에 메서드를 덮어씌움)
자바스크립트 엔진이 getName 메서드를 찾는 방식은
가장 가까운 대상인 자신의 프로퍼티, 그 다음으로 __proto__를 검색하는 순서로 진행된다.

★ 메서드 오버라이딩이 이뤄져 있는 상태에서 prototype에 있는 메서드에 접근하려면 어떻게 해야 하는가?
console.log(iu.__proto__.getName()) // undefined
this가 prototype 객체를 가리키는데 prototype 상에는 name 프로퍼티가 없다.

Person.prototype.name = '이지금';
console.log(iu.__proto__.getName()); // 이지금
위의 코드는 원하는 메서드(prototype에 있는 getName)이 호출되었다.
다만 this가 prototype을 바라보고 있으므로 인스턴스를 바라보도록 아래와 같이 변경한다.
console.log(iu.__proto__.getName.call(iu)); // 지금

즉 일반적으로 메서드가 오버라이드된 경우에는 자신으로부터 가장 가까운 메서드에만 접근할 수 있지만
그다음으로 가까운 __proto__의 메서드도 우회적인 방법을 통해서긴 하지만 접근이 가능하긴 하다.

※ 다시금 봤을 때 헷갈릴 경우, 위의 코드를 복사하여 about:blank에서 테스트하여
iu 객체를 살펴보면 좋을 것 같다.
*/