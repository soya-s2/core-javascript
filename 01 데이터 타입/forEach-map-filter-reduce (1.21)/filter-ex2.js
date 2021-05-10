// JSON에서 무효한 항목 거르기 (0이 아닌 숫자 id인 모든 요소의 걸러진 json을 만들기)

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 }, // invalidEntries 1 (0)
  { id: 3 },
  { id: 12.2 },
  {}, // invalidEntries 2 (undefined)
  { id: null }, // invalidEntries 3 (null)
  { id: NaN }, // invalidEntries 4 (NaN)
  { id: 'undefined' } // invalidEntries 5 (undefined)
];

var invalidEntries = 0; // 테스트를 통과하지 못한 요소

function isNumber(obj) { 
  return obj != undefined && typeof (obj) === 'number' && !isNaN(obj);
}

function filterByID(item) { // filter 메서드에 적용할 테스트 함수
  if (isNumber(item.id) && item.id !== 0) { // item의 id가 0이 아닌 숫자이면 true를 반환
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array = ', arrByID);
console.log('Number of Invalid Entries = ', invalidEntries);

/*
Filtered Array =  [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
Number of Invalid Entries =  5
*/