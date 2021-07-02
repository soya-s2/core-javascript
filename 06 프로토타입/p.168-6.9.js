// Object.prototype에 추가한 메서드에의 접근

Object.prototype.getEntries = function () {
  var res = [];
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      res.push([prop, this[prop]]);
    }
  }
  return res;
};
var data = [
  ['object', { a: 1, b: 2, c: 3 }], // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
  ['number', 345], // []
  ['string', 'abc'], // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
  ['boolean', false], // []
  ['func', function () { }], // []
  ['array', [1, 2, 3]] // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]
];
data.forEach(function (datum) {
  console.log(datum[1].getEntries());
});

/*
line 13부터 line 18까지의 데이터를 각 데이터마다
getEntries에 대해 실행하였다.
원래의 의도대로라면 객체가 아닌 다른 데이터 타입에 대해 오류를 던져야 한다.
하지만 어느 데이터 타입이건 프로토타입 체이닝을 통해 getEntries 메서드에 접근할 수 있으므로 오류가 나지 않는다.

위와 같은 이유로 객체만을 대상으로 동작하는 
객체 전용 메서드들은 부득이 Object.prototype이 아닌
Object에 스태틱 메서드로 부여할 수 밖에 없었다.

★ 객체 한정 메서드들을 Object.prototype이 아닌 Object에 직접 부여하지 않는 이유는
Object.prototype이 여타의 참조형 데이터뿐 아니라 기본형 데이터조차 __proto__에
반복 접근함으로써 도달할 수 있는 최상위 존재이기 때문이다.
반대로 같은 이유에서 어떤 데이터에서도 활용할 수 있는 범용적인 메서드는 Object.prototype에 있다.
toString, hasOwnProperty, valueOf, isPrototypeOf 등은
모든 변수가 마치 자신의 메서드인 것처럼 호출할 수 있다.

※ Object.create(null)를 이용하면 Object.prototype에 접근할 수 없다. (__proto__가 없는 객체를 생성)
*/