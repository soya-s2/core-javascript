// apply 메서드

var func = function (a, b, c) {
  console.log(this, a, b, c); // { x: 1 } 4 5 6
};
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y); // 4 5 6
  }
};
obj.method.apply({ a: 4 }, [5, 6]);

/*
line 14의 this는 obj 객체가 아닌 { a: 4 }가 된다.

★ apply 메서드와 call 메서드의 차이 ★는
call 메서드는 this Arg를 제외한 매개변수를 호출할 함수에 지정하지만
apply 메서드는 this Arg를 제외한 매개변수(인자)를 '배열'로 지정한다는 점이다.
즉 두 번째 인자가 배열이다.
*/