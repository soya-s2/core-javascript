// 클로저로 변수를 보호한 자동차 객체(1)

var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2); // 연비(km/L)
  var moved = 0; // 총 이동거리
  return {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
    }
  };
};
var car = createCar();

// 다음과 같이 값을 변경하고자 하는 시도는 대부분 실패하게 된다.
car.run(); // 2km 이동 (총 2km). 남은 연료: 15.6
console.log(car.moved); // 2
console.log(car.fuel); // undefined
console.log(car.power); // undefined

car.fuel = 1000; 
console.log(car.fuel); // 1000
car.run(); // 4km 이동 (총 6km). 남은 연료: 14.8

car.power = 100;
console.log(car.power); // 100
car.run(); // 2km 이동 (총 8km). 남은 연료: 14.4

car.moved = 1000;
console.log(car.moved); // 8
car.run(); // 1km 이동 (총 9km). 남은 연료: 14.2

/* 
이번에는 createCar라는 함수를 실행함으로써 객체를 생성하게 하였다.
fuel, power 변수는 비공개 멤버로 지정해 외부에서의 접근을 제한했고,
moved 변수는 getter만을 부여하여 읽기 전용 속성을 부여했다.
이제 외부에서는 run 메서드의 실행과 현재의 moved 값을 확인하는 두 가지 동작만 확인 가능하다.
*/