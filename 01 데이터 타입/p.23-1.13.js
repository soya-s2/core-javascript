// copyObject를 이용한 객체 복사

var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: 'Jaenam',
  gender: 'name'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.'); // 출력됨
}
console.log(user.name, user2.name);
console.log(user === user2);

/* 1.10.js ~ 1.12.js의 최종판 
얕은 복사만을 수행한다는 점이 아쉬운 부분으로 꼽히고 있음 */