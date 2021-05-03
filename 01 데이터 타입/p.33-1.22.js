// undefined와 null의 비교

var n = null;
console.log(typeof n); // object

console.log(n == undefined); // true
console.log(n == null); // true

console.log(n === undefined); // false
console.log(n === null); // true

/* === (일치 연산자)로만 null 값을 판별 가능하다. 
즉 typeof 쓰지 말 것. */