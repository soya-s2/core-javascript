// bind 메서드 - 내부함수에 this 전달

var obj = {
  logThis: function () {
    console.log("2: ", this); // Window { ... }
  },
  logThisLater1: function () {
    console.log("1: ", this) // obj
    setTimeout(this.logThis, 500); // 3.12.js 파일 참고 (setTimeout 함수는 this를 지정하지 않음.)
  },
  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 1000); // ★ obj, 내부함수에 this를 전달하는 방법으로 bind 메서드가 쓰였음.
  }
};
obj.logThisLater1(); // Window { ... }
obj.logThisLater2();

/* 
line 15 = obj
{
  logThis: [Function: logThis],
  logThisLater1: [Function: logThisLater1],
  logThisLater2: [Function: logThisLater2]
}
*/