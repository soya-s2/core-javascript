// 스코프 체인

var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined (p.57 그림 참조)
    var a = 3;
  };
  inner(); 
  console.log(a); // 1
};
outer();
console.log(a); // 1

/* 스코프 체인상으로 변수에 접근하려면,
내부 <-> 내부, 내부 -> 외부만 가능하다.
a를 전역 공간에서도 1로 선언하고,
inner() 내부에서도 3으로 선언했으나
inner 스코프에서는 가장 가까운 inner 내부의 L.E부터 참조하므로
동일한 이름을 가진 외부의 변수에는 접근할 수 없다.
이를 변수 은닉화라고 한다. */