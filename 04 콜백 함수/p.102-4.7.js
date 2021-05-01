// 메서드를 콜백 함수로 전달한 경우

var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  }
};
obj.logValues(1, 2); // {vals : [1, 2, 3], logValues: f} 1 2 * 메서드로써의 호출

[4, 5, 6].forEach(obj.logValues);

/* 
forEach 함수의 콜백함수로써 전달. 
obj.logValues가 가리키는 함수만 전달한 것임.
별도의 this를 지정하지 않음. 

★ 즉 정리하자면 객체의 메서드를
콜백 함수로 전달하면 
해당 객체를 this로 바라볼 수 없게 된다. ★ 
*/

// Window { ... } 4 0
// Window { ... } 5 1
// Window { ... } 6 2