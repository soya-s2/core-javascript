// 콜백 지옥 예시

setTimeout(function (name) {
  var coffeeList = name;
  console.log(coffeeList);

  setTimeout(function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);

    setTimeout(function (name) {
      coffeeList += ', ' + name;
      console.log(coffeeList);

      setTimeout(function (name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);
      }, 500, '카페라떼');
    }, 500, '카페모카');
  }, 500, '아메리카노');
}, 500, '에스프레소');

/* 
결과 : 
에스프레소
에스프레소, 아메리카노
에스프레소, 아메리카노, 카페모카
에스프레소, 아메리카노, 카페모카, 카페라떼

0.5초 주기마다 커피 목록을 수집하고 출력
각 콜백은 커피 이름을 전달하고 목록에 이름을 추가 */