// 객체의 깊은 복사를 수행하는 범용 함수

var copyObjectDeep = function (target) {
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