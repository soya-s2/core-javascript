// 더글라스 크락포드의 두 번째 방법 - 다리!

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

var Square = function (width) {
  Rectangle.call(this, width, width);
};

var Bridge = function () { };
Bridge.prototype = Rectangle.prototype;
Square.prototype = new Bridge();
Object.freeze(Square.prototype);

/*
Bridge가 Rectangle과 Square의 중간 다리 역할이 되어,
더는 클래스에 구체적인 데이터가 남아있지 않게 된다.
p.186-7.7.js 파일과 연관
*/