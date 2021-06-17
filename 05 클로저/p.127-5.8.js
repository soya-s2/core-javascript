// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때 - 콜백 함수와 클로저(3)

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

var alertFruit = function (fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) { 
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit.bind(null, fruit)); // 새로 바인딩 할 this는 null이고, 이벤트 객체는 fruit이다.
  $ul.appendChild($li);
});
document.body.appendChild($ul);

/*
다만 이렇게 하면 이벤트 객체가 인자로 넘어오는 순서가 바뀌는 점 및
함수 내부에서의 this가 원래의 그것과 달라지는 점은 감안해야 한다.
첫 번째 인자가 새로 바인딩 할 this인데, 이 값을 생략할 수 없기 때문에
일반적으로 원래의 this를 유지할 수 없는 경우가 많다.
이런 변경사항이 발생하지 않게끔 하면서 이슈를 해결하기 위해서는 
bind가 아닌 고차함수를 활용해야 한다. 
고차함수란 함수를 인자로 받거나 함수를 리턴하는 함수이다.
*/