// 내부함수에 this 전달 - bind

var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = function () {
      console.log(this); 
    }.bind(this);
    innerFunc(); // { outer: [Function: outer] }, ★ 원래의 innerFunc() : Window { ... }
  }
};
obj.outer();

/* .bind(this);는 obj.outer() 내부의 this를 
innerFunc의 this로 지정한다. 

물론 bind 메서드는 미리 this만 지정하고
이후에 호출했을 때만 함수가 실행되므로
lien 8의 console.log는 실행되지 않는다. 
그러므로 line 9처럼 innerFunc()를 해주면 outer가 출력된다. (소속 객체가 obj)

원래 innerFunc()만 실행하면 
함수로서의 호출이므로 this는 전역객체이다. */