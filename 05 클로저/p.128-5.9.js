// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때 - 콜백 함수와 클로저(4)

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

var alertFruitBuilder = function (fruit) {
  return function () {
    alert('your choice is ' + fruit);
  };
};
fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);

/*
line 6의 alertFruitBuilder 함수에서
기존의 alertFruit 함수를 반환하는 익명 함수를 반환한다.
line 14에서 alertFruitBuilder 함수를 실행하며 fruit 값을 인자로 전달한다.
그러면 이 함수의 실행 결과가 다시 함수가 되고,
이렇게 반환된 함수를 리스너에 콜백 함수로서 전달한다.

이후 클릭 이벤트가 발생하면 이 함수의 실행 컨텍스트가 열리면서
alertFruitBuilder의 인자로 넘어온 fruit를 outerEnvironmentReference에 의해 참조할 수 있다.
즉 alertFruitBuilder의 실행 결과로 반환된 함수에는 클로저가 존재한다.
*/

/*
콜백 함수 내부에서 외부변수를 참조하기 위한 방법 세 가지를 살펴보았다.

1) 5-6. 콜백 함수를 내부함수로 선언해서 외부변수를 직접 참조(클로저를 사용)
2) 5-8. bind를 활용하여 값을 직접 넘겨주었고, 클로저는 발생하지 않았지만 여러 제약이 따르게 됨.
3) 5-9. 콜백 함수를 고차 함수로 바꾸어 클로저를 적극 활용함

위 세가지의 장단점을 각기 파악하여 구체적 상황에 따라 어떤 방법을 도입하는 것이 가장 효과적일지 고민해야 하는 것이 숙제임.
*/