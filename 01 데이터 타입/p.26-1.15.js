// 중첩된 객체에 대한 깊은 복사

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
// console.log(user.urls === user2.urls); // true

user2.urls = copyObject(user.urls); // user 객체를 copyObject()한 것처럼 urls도 객체이므로 똑같이 불변객체화 한다.
// console.log(user.urls === user2.urls); // false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // false

// console.log(user, user2);

/* 결론적으로, 어떤 객체를 복사할 때
객체 내부의 값이 기본형인 경우에는 그냥 복사하면 되지만,
참조형 데이터의 경우 내부의 프로퍼티들을 다시 복사해야 한다.
즉 참조형 데이터가 객체 내부에 있을 때마다 재귀적으로 불변 객체화해야
비로소 깊은 복사가 된다고 볼 수 있는 것이다. 
코드 p.27-1.16.js는 위 코드를 깊은 복사 방식으로 고친 것이다. */