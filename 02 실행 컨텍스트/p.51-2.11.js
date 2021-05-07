// 함수 선언문의 위험성

console.log(sum(3, 4)); // 3 + 4 = 7

function sum(x, y) { // sum을 선언
  return x + y;
}

function sum(x, y) { // sum의 재선언
  return x + ' + ' + y + ' = ' + (x + y);
}

console.log(sum(3, 4)); // 3 + 4 = 7

/* 전역 컨텍스트가 활성화될 때
전역공간에 선언된 함수들이 모두 호이스팅됨 (함수 선언문). 
나중에 할당한 값이 먼저 할당한 값을 덮어씌움 
그러므로 재선언한 sum으로만 동작함. */