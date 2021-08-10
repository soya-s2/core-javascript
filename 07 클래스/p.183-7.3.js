// length 프로퍼티를 삭제한 경우

var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < arguments.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);
 
g.push(90);
console.log(g); // Array { '0': 100, '1': 80, '2': 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Array { '0': 70, '1': 80, '2': 90, length: 1 }

/* 
내장객체인 배열 인스턴스의 length 프로퍼티는 
configurable 속성이 false로 삭제 불가능하나,
Grade 클래스의 인스턴스는 배열 메서드를 상속하지만
기본적으로 일반 객체의 성질을 그대로 지니므로 삭제가 가능해서 문제가 된다.

push를 했을 때, 0번째 인덱스에 70이 들어가고 length가 1이 된 이유는
Grade.prototype이 빈 배열을 가리키고 있기 때문이다.
push 명령에 의해 g.length를 읽고자 하는데 없으므로
프로토타입 체이닝을 타고 g.__proto__.length를 읽어온 것이다.

빈 배열(Grade.prototype)의 length가 0이므로 여기에 값을 할당하고 
length는 1만큼 증가시키라는 명령을 한다.
*/