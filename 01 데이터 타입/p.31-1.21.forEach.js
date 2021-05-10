/* forEach() 함수는 주어진 함수를 배열 요소 각각에 대해 실행한다.

# 구문 : arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

# 매개변수 : 
callback
- 각 요소에 대해 실행할 함수. 다음 세 가지 매개변수를 받는다.
    currentValue
    - 처리할 현재 요소.
    index (Optional)
    - 처리할 현재 요소의 인덱스.
    array (Optional)
    - forEach()를 호출한 배열.
thisArg (Optional)
- callback을 실행할 때 this로 사용할 값. 

# arr.forEach(callback(currentValue, index, array), thisArg))로 정리 가능하다.

# 반환 값은 undefined이다. return 값이 따로 없다. */


// ---------------------------------------------------------------------------------------
var arr = [1, 2, 3, 4, 5];

arr.forEach(function (v, i) { console.log(v, i); }); // v = currentValue, i = index

/* 
1 0
2 1
3 2
4 3
5 4
*/

// ---------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------

// 반복 중 배열 뛰어넘어 출력하기
let words = ['one', 'two', 'three', 'four'];
words.forEach(function (word) {
    console.log(word);
    if (word === 'two') {
        words.shift(); // word 순회 차례가 'two'가 되면 배열의 첫 번째 항목을 제거함.
    }
});

/*
one
two
four (인덱스 2에 접근하면 'four'가 됨)
*/

// ---------------------------------------------------------------------------------------