// this를 바인딩하지 않는 함수

var obj = {
  outer: function () {
    console.log(this); // (1) { outer : f } === obj
    var innerFunc = () => {
      console.log(this); // (2) { outer : f } === obj
    };
    innerFunc();
  }
};
obj.outer();

/* 화살표 함수는 this를 바인딩 하지 않는다.
그러므로 우회법이 필요 없고,
상위 스코프의 this를 그대로 활용할 수 있다. 

그 밖에도 call, apply 등의 메서드를 활용해
함수를 호출할 때 this를 명시적으로 지정할 수 있다. */