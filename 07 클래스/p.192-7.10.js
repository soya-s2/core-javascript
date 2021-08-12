// 클래스 상속 및 추상화 방법(3) - Object.create 활용

// (...생략)
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);
// (...생략)