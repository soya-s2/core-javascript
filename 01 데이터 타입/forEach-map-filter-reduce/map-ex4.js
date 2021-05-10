// map을 포괄적으로 사용하기

var map = Array.prototype.map;
var a = map.call('Hello World', function (x) { return x.charCodeAt(0); });
console.log(a); // [72, 101, 108, 108, 111,  32,  87, 111, 114, 108, 100]