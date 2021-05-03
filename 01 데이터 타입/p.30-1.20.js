// undefined와 배열

var arr1 = [];
arr1.length = 3;
console.log(arr1); // [ <3 empty items> ], undefined 조차 할당되지 않음

var arr2 = new Array(3);
console.log(arr2); // [ <3 empty items> ], undefined 조차 할당되지 않음

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [undefined, undefined, undefined]

/* '비어 있는 요소'와 'undefined를 할당한 요소'는 다르다.
'비어 있는 요소'는 순회와 관련된 많은 배열 메서드들의 순회 대상에서 제외된다. */ 