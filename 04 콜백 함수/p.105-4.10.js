// 예제 4-8의 func 함수 재활용

var obj1 = {
  name: 'obj1',
  func: function () {
    var self = this;
    return function () {
      console.log(self.name); // obj1
    };
  }
};

var obj2 = {
  name: 'obj2',
  func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2, 1500); // obj2, obj1.func()를 실행한 결과를 담아 콜백으로 사용

var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000); // obj3, obj1의 func를 실행하면서 this를 obj3으로 지정하여 콜백으로 사용