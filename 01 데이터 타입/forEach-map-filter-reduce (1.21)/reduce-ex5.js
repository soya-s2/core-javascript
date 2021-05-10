// 확장 연산자(스프레드 연산자)와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기

var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
  }];

var allbooks = friends.reduce(function (accumulater, currentValue) {
  return [...accumulater, ...currentValue.books]; // 리터럴을 하나의 배열 요소처럼 연결해줌
}, ['Alphabet']);

console.log(allbooks);

/* 
[
  'Alphabet',
  'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining'
]
*/