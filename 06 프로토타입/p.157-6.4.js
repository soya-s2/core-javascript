// constructor 변경

var NewConstructor = function () {
  console.log('this is new constructor!');
};
var dataTypes = [
  1, // Number & false
  'test', // String & false
  true, // Boolean & false
  {}, // NewConstructor & false
  [], // NewConstructor & false
  function () { }, // NewConstructor & false
  /test/, // NewConstructor & false
  new Number(), // NewConstructor & false
  new String(), // NewConstructor & false
  new Boolean, // NewConstructor & false
  new Object(), // NewConstructor & false
  new Array(), // NewConstructor & false
  new Function(), // NewConstructor & false
  new RegExp(), // NewConstructor & false
  new Date(), // NewConstructor & false
  new Error() // NewConstructor & false
];

dataTypes.forEach(function (d) {
  d.constructor = NewConstructor;
  console.log(d.constructor.name, '&', d instanceof NewConstructor);
})

/*
모든 데이터가 d instanceof NewConstructor 명령에 대해 false를 반환한다.
d instanceof NewConstructor는 d가 NewConstructor의 인스턴스이냐는 물음이다.
이로부터 constructor를 변경하더라도 참조하는 대상이 변경될 뿐
이미 만들어진 인스턴스의 원형이 바뀐다거나 데이터 타입이 변하는 것은 아님을 알 수 있다.
이것은 어떤 인스턴스의 생성자 정보를 알아내기 위해
constructor 프로퍼티에 의존하는 것이 항상 안전하지는 않다는 것이다.
*/