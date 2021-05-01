setTimeout(function () { console.log(this); }, 300); // (1)의 this는 전역객체를 가리킴.

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this); // (2)의 this도 전역객체를 가리킴. 별도의 this를 지정하지 않았기 때문
});

document.body.innerHTML += '<button id="a">클릭<button>';
document.body.querySelector('#a').addEventListener('click', function (e) {
  console.log(this, e); // (3)의 this는 호출 주제인 HTML element를 가리킴.
});

// 예제 3-11과 연동