// 비동기 작업의 동기적 표현(3) - Generator

var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};

var coffeeGenerator = function* () { // ES6의 Generator. 
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);
  var americano = yield addCoffee(espresso, '아메리카노');
  console.log(americano);
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);
};

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();

/* Generator를 실행하면 Iterator가 반환됨. 
이것은 next 메서드를 가지며, 
next 메서드를 호출하면
Generator 함수 내부에서 
가장 먼저 등장하는 yield에서 함수의 실행을 멈춤.
이후 다시 next를 호출하면 멈췄던 부분부터 
다음 yield에서 함수의 실행을 멈춤. */