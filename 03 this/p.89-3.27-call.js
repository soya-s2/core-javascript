// 내부함수에 this 전달 - call

var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = function () {
      console.log(this); // { outer: [Function: outer] }
    };
    // 원래의 innerFunc(); // Window { ... }
    innerFunc.call(this);
  }
};
obj.outer();

/* innerFunc.call(this); 는
obj.outer(); 당시의 this를 바인딩하여
innerFunc 내부에서의 this도 outer가 되게 한다. */
