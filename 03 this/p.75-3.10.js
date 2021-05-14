// 내부함수에서의 this를 우회하는 방법

var obj = {
  outer: function () {
    console.log(this); // (1) { outer : f } === obj
    var innerFunc1 = function () { 
      console.log(this); // (2) Window { ... }
    };
    innerFunc1();

    var self = this; 
    var innerFunc2 = function () {
      console.log(self); // 3 { outer : f } === obj
    };
    innerFunc2();
  }
};
obj.outer(); // 메서드로서의 호출

/* line 18의 obj.outer()를 통해
outer()를 메서드로서 호출하여 
self 변수에 메서드로서 호출한 시점의 (this === obj)를 할당함. */