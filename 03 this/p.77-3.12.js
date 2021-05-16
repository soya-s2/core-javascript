// 콜백 함수 내부에서의 this

setTimeout(function () { console.log(this); }, 300); // (1)

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x); // (2)
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function (e) {
  console.log(this, e); // (3)
});

/*
(1) : Window { ... }
- setTimeout 함수는 내부에서 콜백 함수를 호출할 때 대상이 될 this를 지정하지 않음.

(2) : Window { ... }, 1 / Window { ... }, 2 / ... / Window { ... }, 5 
- forEach 함수도 (1)과 마찬가지임. 그러므로 (1), (2)는 전역객체를 참조함.

(3) : <button id="a">클릭</button>, MouseEvent {...} 
- addEventListener 메서드는 자신의 this를 상속하도록 되어있음.
그러므로 메서드명의 점(.) 앞 부분이 곧 this가 됨
즉 document.body.querySelector('#a')의 결과인 객체 부분이 this가 되는 것임
*/