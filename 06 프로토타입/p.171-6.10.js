// Grade 생성자 함수와 인스턴스

var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};

Grade.prototype = [];

var g = new Grade(100, 80);
console.log(g); // Grade { '0': 100, '1': 80, length: 2 }

g.push(90);
console.log(g); // Array { '0': 100, '1': 80, '2': 90, length: 3 }

/*
Grade의 prototype에 배열을 추가함으로써
프로토타입 체이닝을 이끌어냈고,
Object -> Array -> Grade -> g 순으로 체인이 이어진다.
그러므로 g 인스턴스도 Grade의 prototype인 배열의 메서드를 사용 가능하다.
즉 Grade의 prototype = Array의 prototype을 참조 가능함(__proto__가 생략 가능하므로).
이렇게 프로토타입 체이닝은 무한으로 생성도 가능함.
*/