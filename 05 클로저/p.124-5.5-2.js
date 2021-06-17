// 클로저의 메모리 관리

// (2) setInterval에 의한 클로저의 메모리 해제
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null; // inner 식별자의 함수 참조를 끊음
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

/* 즉 inner 자체를 null로 만들어버림으로써
외부 함수의 변수 a를 참조하는 카운트가 0이 되도록 
메모리를 해제해주었다. */