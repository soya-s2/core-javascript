// 화살표 함수 내부에서의 this

var obj = {
  outer: function () {
    console.log(this); // obj, { outer: [Function: outer] }
    var innerFunc = () => {
      console.log(this); // obj, { outer: [Function: outer] }
    };
    innerFunc();
  }
};
obj.outer()

/* 원래는 line 7의 출력에서 전역 객체가 출력되어야 한다.
innerFunc를 함수로서 호출했기 때문이다.
하지만 화살표 함수는 this를 지정하는 과정이 없으므로
스코프체인상 가장 가까운 this에 접근하게 된다. 
즉 상위 스코프의 this를 간편하게 쓸 수 있다. */