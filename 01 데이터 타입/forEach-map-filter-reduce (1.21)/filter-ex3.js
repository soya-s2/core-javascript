// 배열 내용 검색 (배열 내용을 조건에 따라 검색)

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// 검색 조건에 따른 배열 필터링(쿼리)
function filterItems(query) { 
  return fruits.filter(function (el) { // (2) 참인 요소들만 새로운 배열에 추가
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1; // (1) query가 fruits에 있으면 참을 반환
  });
}

/* ※ 위 코드를 ES2015로 구현하면
const filterItems = (query) => {
  return fruits.filter((el) => 
  el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
*/

console.log(filterItems('ap')); // [ 'apple', 'grapes' ]
console.log(filterItems('an')); // [ 'banana', 'mango', 'orange' ]

/* 
'ap'를 filterItems 함수로 전달하여
fruits 배열에 'ap'가 있으면 그것을 찾아 반환,
자세한 동작 원리는 (1), (2)를 참고

indexOf() : 배열에서 지정된 요소를 찾을 수 있는
첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.
indexOf(찾을 값, 검색을 시작할 인덱스) */