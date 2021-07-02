// 메서드 오버라이드와 프로토타입 체이닝

var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); // 1,2

arr.toString = function () {
  return this.join('_');
};
arr.toString(); // 1_2

/*
arr 변수는 배열이므로 arr.__proto__는 Array.prototype을 참조하고,
Array.prototype은 객체이므로 Array.prototype.__proto__는 Object.prototype을 참조한다.
toString이라는 메서드는 Array.prototype 뿐만 아니라 Object.prototype에도 있다.

line 6의 출력 결과는 Array.prototype.toString을 적용한 결과이다.
line 8에서는 직접 arr에 toString 메서드를 부여하였다.
이제 line 11에서는 Array.prototype.toString이 아닌 arr.toString이 바로 실행되었다.

※ page 167은 중요도를 고려하여 우선 제외하였음.
*/