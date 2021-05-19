// call/apply 메서드의 활용 1-1) 유사배열객체에 배열 메서드를 적용

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
Array.prototype.push.call(obj, 'd');
console.log(obj); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

/* 객체에는 배열 메서드를 직접 적용 불가.
키가 0 또는 양의 정수인 프로퍼티, 
length 프로퍼티의 값이 0 또는 양의 정수인 객체를 유사배열객체라고 하며
이는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있음.

여기서 배열 메서드는 push, slice 등임.

line 9에서는 push를 obj에 적용해 프로퍼티 3에 'd'를 추가하였음.
line 11에서는 slice 메서드를 적용해 객체를 배열로 전환함. (배열 요소를 추출하는 메서드임.)
slice 메서드는 매개변수를 아무것도 넘기지 않으면 원본 배열의 얕은 복사본을 반환함.
*/