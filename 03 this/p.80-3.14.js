// call 메서드 (1)

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // Window { ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

/* 함수를 그냥 실행하면 this는 전역객체를 참조.
call 메서드를 이용하면 임의의 객체를 this로 지정 가능.
즉 line 8의 func.call({ x: 1 }) 부분은 this를 지정하는 부분이다. 

즉 명시적으로 this를 바인딩하는 방법에는
call 메서드를 활용하는 방법이 있는 것이다.

추가로, func.call을 실행하면 call 메서드는
★ call의 호출 주체인 func 함수를 즉시 실행하도록 한다. ★ */