// 함수로서 호출, 메소드로서 호출

var func = function (x) {
  console.log(this, x); // Object [global]
};
func(1);

var obj = {
  method: func
};
obj.method(2); // { method: [Function: func] } 2

/* func(1)과 obj.method(2)는
모두 line 3의 func 함수를 참조하는데,
익명함수는 그대로이나, (1) 변수에 담아 호출한 경우와 
(2) obj 객체의 프로퍼티에 할당해서 호출한 경우 this가 달라진다.

함수 앞에 .이 있으면 메서드로서 호출한 것이다.

함수는 그 자체로 독립적으로 기능하지만,
메서드는 객체에 소속되어 있으므로 
객체의 메서드로서 호출할 경우에만 동작한다. */