// 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용

var extendClass2 = (function () {
  var Bridge = function () { };
  return function (SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype; // SuperClass 자리를 Bridge가 대체
    SubClass.prototype = new Bridge();
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();