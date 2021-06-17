// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때 - 콜백 함수와 클로저(1)

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

fruits.forEach(function (fruit) { // (A)
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function () { // (B)
    alert('your choice is ' + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);

/*
(A) 함수에서는 내부 변수에서 외부 변수를 사용하지 않고 있으므로 클로저가 없다.
하지만 (B) 함수에서는 fruit라는 외부 변수를 참조하고 있으므로 클로저가 있다.
그러므로 (A) 함수의 실행 종료와 상관 없이,
(B) 함수가 참조할 예정인 변수 fruit에 대해서는 (A)가 종료된 이후에도
GC 대상에서 제외되어 계속 참조가 가능하다. 

하지만 (B) 함수의 쓰임새가 콜백 함수에 국한되지 않는 경우라면
반복을 줄이기 위해 (B)를 외부로 분리하는 편이 나을 수 있다.
즉 fruit를 인자로 받아 출력하는 형태로 5-7에서 실습하기로 한다.
*/