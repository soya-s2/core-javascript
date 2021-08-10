// 6-2-4절의 Grade 생성자 함수 및 인스턴스

var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < arguments.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);
 
/*
length 프로퍼티가 삭제 가능하다는 문제,
Grade.prototype에 빈 배열을 참조시켰다는 점이 문제이다.
*/