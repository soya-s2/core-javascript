// JSON을 활용한 간단한 깊은 복사

var copyObjectViaJSON = function (target) {
  return JSON.parse(JSON.stringify(target));
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function () { console.log(3); }
  },
  func2: function () { console.log(4); }
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
/* {
   a: 1,
   b: { c: null, d: [ 1, 3 ], func1: [Function: func1] },
   func2: [Function: func2]
   } 
*/

console.log(obj2); // { a: 3, b: { c: 4, d: [ 1, 2 ] } }


/* 간단하게 깊은 복사를 할 수 있는 방법.
객체를 JSON 문법으로 표현된 문자열로 전환했다가
다시 JSON 객체로 바꾼다. 

메서드(함수)나 숨겨진 프로퍼티인 
__proto__, getter/setter와 같은 것은 무시함.

★ httpRequest로 받은 데이터를 저장한
객체를 복사할 때 등 '순수한 정보'만 다룰 때 유용함 ★ */