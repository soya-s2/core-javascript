// 콜백 지옥 해결 - 기명함수로 변환

var coffeeList = '';

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, '아메리카노');
}

var addAmericano = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, '카페모카');
}

var addMocha = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, '카페라떼');
}

var addLatte = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');

/*
결과는 4.12와 동일
익명의 콜백함수를 모두 기명함수로 바꿈으로써
가독성과 들여쓰기가 깊은 문제를 해결
*/