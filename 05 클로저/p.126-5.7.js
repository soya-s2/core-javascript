// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때 - 콜백 함수와 클로저(2)

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

var alertFruit = function (fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) { 
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit);
  $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

/* 
콜백 함수를 외부로 꺼내어 alertFruit라는 변수에 담았다.
line 16에서 정상적으로 banana에 대한 alert가 실행된다.
그런데 각 li 클릭 시, [object MouseEvent]라는 값이 출력되는데,
콜백 함수의 인자에 대한 제어권을 addEventListener가 가진 상태이고
addEventListener는 콜백 함수를 호출할 때 첫번째 인자에
'이벤트 객체'를 주입하기 때문이다.
이 문제는 bind 메서드로 손쉽게 해결 가능하다.
*/