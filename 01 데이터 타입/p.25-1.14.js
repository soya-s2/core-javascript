// 중첩된 객체에 대한 얕은 복사

var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: 'Jaenam',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc'
  }
};
var user2 = copyObject(user);

user2.name = 'Jung';
console.log(user.name === user2.name); // false

user2.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true

/* 얕은 복사란 그 아래 단계의 값만 복사하는 것이고,
깊은 복사란 내부의 값들을 하나하나 찾아서 전부 복사하는 방법이다.
한 예로, 중첩된 객체에서 참조형 데이터가 저장된 프로퍼티를 복사하면 (한 단계 더 들어간, urls 같은 경우)
얕은 복사는 원본 프로퍼티 값의 주솟값만 복사한다. (기존의 데이터를 그대로 참조한다.)
그러므로 원본/사본 둘 중 하나를 수정하면 나머지도 값이 변경된다. 

이를 방지하려면 user.urls 프로퍼티에 대해서도 불변 객체로 만들어야 한다.*/