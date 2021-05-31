// 비동기 작업의 동기적 표현(4) - Promise + Async/await

var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};
var coffeeMaker = async function () {
  var coffeeList = '';
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
  };
    await _addCoffee('에스프레소');
    console.log(coffeeList);
    await _addCoffee('아메리카노');
    console.log(coffeeList);
    await _addCoffee('카페모카');
    console.log(coffeeList);
    await _addCoffee('카페라떼');
    console.log(coffeeList);
  };
coffeeMaker();

/* ES2017의 async/await 
비동기 작업을 수행하고자 하는 함수 앞에 async를 표기
함수 내부에서 실질적 비동기 작업이 필요한 위치마다 await 표기
뒤의 내용을 Promise로 자동 전환
해당 내용이 resolve된 이후에야 다음으로 진행 */