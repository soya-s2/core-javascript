// 메서드로서 호출 - 점 표기법, 대괄호 표기법

var obj = {
  method: function (x) { console.log(this, x); }
};
obj.method(1); // { method: [Function: method] } 1
obj['method'](2); // { method: [Function: method] } 2

/* 점 표기법이든 대괄호 표기법이든,
어떤 함수를 호출할 때 그 함수 이름 앞에 객체가 명시되어 있으면
메서드로 호출한 것이다. */