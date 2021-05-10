// 속성으로 객체 분류하기

var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) { // people 배열과 'age' property를 매개변수로 전달받음
  return objectArray.reduce(function (acc, obj) { 
    var key = obj[property]; // key = obj(현재 객체)[age];
    if (!acc[key]) { // acc[key]가 없으면
      acc[key] = []; // 빈 배열을 추가
    }
    acc[key].push(obj);
    // console.log(acc);
    return acc;
  }, {}); // 초기 값은 빈 배열
}

var groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);



/* 과정 ------------------------------------------------------------
{ '21': [ { name: 'Alice', age: 21 } ] }

{
  '20': [ { name: 'Max', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 } ]
}

{
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 } ]
}
---------------------------------------------------------------- */



/* 결과 ------------------------------------------------------------
{
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 } ]
}
---------------------------------------------------------------- */