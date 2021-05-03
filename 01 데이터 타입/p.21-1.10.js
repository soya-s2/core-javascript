// 객체의 가변성에 따른 문제점

var user = {
  name: 'Jaenam',
  gender: 'male'
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name); // Jung Jung
console.log(user === user2); // true

/* 값으로 전달받은 객체에 변경을 가하더라도
원본 객체는 변하지 않아야 하는 경우에 불변 객체가 필요하다. 

설명은 1-8.js를 참고 */