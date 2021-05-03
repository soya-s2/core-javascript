// 객체의 가변성에 따른 문제점의 해결 방법

var user = {
  name: 'Jaenam',
  gender: 'male'
};

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender
  };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 출력됨
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false

/* changeName 함수가 새로운 객체를 반환하도록 수정하여 
user와 user2가 서로 다른 객체가 됨.
하지만 변경할 필요가 없는 기존의 gender를 하드코딩으로 입력함. 

대상 객체의 프로퍼티 개수에 상관 없이 
모든 프로퍼티를 복사하는 함수를 만드는 것이 낫다. */