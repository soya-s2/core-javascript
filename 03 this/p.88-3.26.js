// bind 메서드 - name 프로퍼티

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func
console.log(bindFunc.name); // bound func

/* bind 메서드를 이용해 새로 만들어진 함수는
name 프로퍼티가 'bound 함수'가 된다.
그러므로 함수의 name 프로퍼티에 'bound xxx'가 있으면
call이나 apply보다 코드를 추적하기에 더 수월하다. */