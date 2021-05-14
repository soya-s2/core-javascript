// 내부 함수에서의 this

var obj1 = {
  outer: function () {
    console.log(this); // (1) : obj1
    var innerFunc = function () {
      console.log(this); // (2) : Window { ... } (3) obj2
    }
    innerFunc(); // 함수로서의 호출

    var obj2 = {
      innerMethod: innerFunc
    };
    obj2.innerMethod(); // obj2가 점 앞에 있으므로 메서드로서의 호출
  }
};
obj1.outer(); // obj1이 점 앞에 있으므로 메서드로서의 호출


/* 같은 함수임에도 바인딩되는 this의 대상이 달라질 수 있다.
함수를 실행하는 당시의 주변 환경(메서드 내부, 함수 내부 여부)은 중요치 않고
해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지가 관건이다. */