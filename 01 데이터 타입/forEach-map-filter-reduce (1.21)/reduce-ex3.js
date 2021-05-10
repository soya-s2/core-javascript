// 객체 내의 값 인스턴스 개수 세기

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  console.log(allNames);
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
},{}); // {} 부분이 initialValue가 되고, 이것이 처음 accumulator가 됨. 즉 빈 배열을 초기값으로 준 것.

console.log(countedNames);

/* 
allNames : 
{}
{ Alice: 1 }
{ Alice: 1, Bob: 1 }
{ Alice: 1, Bob: 1, Tiff: 1 }
{ Alice: 1, Bob: 1, Tiff: 1, Bruce: 1 }

countedNames : { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
*/