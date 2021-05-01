// 비동기 작업의 동기적 표현(1) - Promise(1)

new Promise(function (resolve) {
  setTimeout(function () {
    var name = '에스프레소';
    console.log(name);
    resolve(name); 
  }, 500);
}).then(function (prevName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var name = prevName + ', 아메리카노';
      console.log(name);
      resolve(name);
    }, 500);
  });
  }).then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ', 카페모카';
        console.log(name);
        resolve(name);
      }, 500);
    });
  }).then(function (prevName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var name = prevName + ', 카페라떼';
          console.log(name);
          resolve(name);
        }, 500);
   });
  });

/* resolve 또는 reject 함수를 호출하는 구문이 있을 경우 
실행 전까지는 다음(then)으로 넘어가지 않는다.
그러므로 비동기 작업이 완료될 때 비로소 resolve 또는 reject를 호출하는 방법으로
비동기 작업의 동기적 표현이 가능해진다.

- 자바스크립트의 비동기 처리란 -
특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 
다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미한다. */