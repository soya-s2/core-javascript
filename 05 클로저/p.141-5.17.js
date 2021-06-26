// 커링 함수(1)

var curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10); 
console.log(getMaxWith10(8)); // 10 
console.log(getMaxWith10(25)); // 25

var getMaxWith10 = curry3(Math.min)(10);
console.log(getMaxWith10(8)); // 8
console.log(getMaxWith10(25)); // 10

/*
★ 커링 함수란 여러 개의 인자를 받는 함수를
하나의 인자만 받는 함수로 나누어 순차적으로 호출할 수 있게 체인 형태로 구성된 것이다.
커링은 한 번에 하나의 인자만 전달하는 것을 목표로 하며,
중간 과정상의 함수를 실행한 결과는 그 다음의 인자를 받기 위해 대기한다.
즉 마지막 인자가 전달되기 전까지는 원본 함수가 실행되지 않는다.
*/