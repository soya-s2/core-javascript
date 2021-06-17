// 간단한 자동차 객체

var car = { // 이 객체를 사람 수만큼 생성해서 각자의 턴에 run을 실행하면 게임을 할 수 있다.
  // 하지만 자바스크립트를 이용해서 car.fuel, car.power 등을 조작하면 안되므로 클로저를 활용하여
  // 객체가 아닌 함수로 만들고, 필요한 멤버만을 return 하는 방법이 필요하다.
  fuel: Math.ceil(Math.random() * 10 + 10), // 연료(L)
  power: Math.ceil(Math.random() * 3 + 2), // 연비(km/L)
  moved: 0, // 총 이동거리
  run: function () {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log('이동불가');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + 'km 이동 (총 ' + this.moved + 'km )');
  }
};

/*
게임 RULE

1. 각 턴마다 주사위를 굴려 나온 숫자(km)만큼 이동한다.
2. 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
3. 남은 연료가 이동할 거리에 필요한 연료보다 부족하면 이동하지 못한다.
4. 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
5. 게임 종료 시점에 가장 멀리 이동해 있는 사람이 승리한다.
*/