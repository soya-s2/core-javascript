// 깊은 복사 결과 확인

var copyObjectDeep = function (target) {
  /********************** console.log(target);

  { a: 1, b: { c: null, d: [ 1, 2 ] } }
  1
  { c: null, d: [ 1, 2 ] }
  null
  [ 1, 2 ]
  1
  2

  *******************************************/
  var result = {};
  if (typeof target === 'object' && target !== null) { // 매개변수가 객체이고 null이 아니면 불변객체화한다.
    // ★ 주의 : js에서는 null도 typeof의 결과로 object를 출력한다. 버그임.
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else { // 기본형인 경우 그냥 복사한다.
    result = target;
  }
  return result;
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2]
  }
};

var obj2 = copyObjectDeep(obj);
obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

//console.log(obj);
//console.log(obj2);