// call 메서드 (2)

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
};

obj.method(2, 3); // 1 2 3 - this는 obj가 되어 this.a는 obj의 a인 1이 된다.
obj.method.call({ a: 4 }, 5, 6); // 4 5 6 - this.a는 4가 된다. ★ 즉 this를 { a: 4 }로 지정한 것이다.