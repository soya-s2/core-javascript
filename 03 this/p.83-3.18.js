// call/apply 메서드의 활용 1-2) arguments, NodeList에 배열 메서드를 적용

function a() {
  var argv = Array.prototype.slice.call(arguments); // arguments도 유사배열객체임
  argv.forEach(function(arg) {
    console.log(arg); // 1 2 3
  });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div'); // querySelectorAll의 반환값도 유사배열객체
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
  console.log(node); // <div>a</div> <div>b</div> <div>c</div>
});

/* 
유사배열객체에 대한 정의는 3.17.js에 있다.
유사배열객체에서는 call/apply 메서드를 이용해
모든 배열 메서드를 적용할 수 있다. 

이는 문자열도 가능하다. (인덱스와 length 프로퍼티를 지니기 때문.)
단 문자열은 length 프로퍼티가 읽기 전용이므로 
push, pop, shift, unshift, slice 등은 에러가 됨.
*/