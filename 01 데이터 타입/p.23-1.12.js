// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)

var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
    /* 
    - 주의 -
    result[prop]에 key가 들어가고 그 결과값이 복사되면서
    key와 value가 모두 복사된다. 
    하지만 프로퍼티에 대해 동일한 참조형 데이터의 주소를 가진다.
    console.log(result.gender === target.gender); 는 true이다. 
    */
  }
  return result;
};

var target = {
  name: 'Jaenam',
  gender: 'male'
};

var result = copyObject(target);
// result.name = 'Jung';하면, result와 target의 value는 달라진다.
console.log(target, result);



/* result 객체에 target 객체의 프로퍼티들을 복사 */