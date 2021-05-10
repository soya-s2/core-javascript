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