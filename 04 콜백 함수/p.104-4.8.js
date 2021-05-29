// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(1) - 전통적인 방식

var obj1 = {
  name: 'obj1',
  func: function () {
    var self = this;
    return function () {
      console.log(self.name); // obj1
      console.log(this); // Window { ... }
    };
  }
};
var callback = obj1.func(); 
setTimeout(callback, 1000); // 콜백 함수는 callback의 함수만 전달한다. this는 전달하지 않음.

/* 
결과 : obj1

self 변수에 this를 담아 
콜백 함수로 활용할 함수에서
this 대신 그 변수를 사용하게 하고,
이를 클로저로 만드는 방식이 전통적이나 번거롭다. 
*/