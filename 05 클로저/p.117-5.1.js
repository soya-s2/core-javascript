// 외부 함수의 변수를 참조하는 내부 함수(1)

var outer = function () {
  var a = 1;
  var inner = function () {
    console.log(++a); // 2
  };
  inner();
};
outer();


/* 
inner 함수 내부에서는
a를 선언하지 않았기 때문에
environmentRecord에서 값을 찾지 못함.
outerEnvironmentReference에 지정된 상위 컨텍스트인
outer의 LexicalEnvironment에 접근해서 a를 찾음.
그러므로 line 6에서는 2가 출력됨 

outer 함수의 실행 컨텍스트가 종료되면
LexicalEnvironment에 저장된 a와 inner에 대한 참조를 지움 
이후 각 주소에 저장된 값들은 자신을 참조하는 변수가 없어지므로
가비지 컬렉터의 수집 대상이 됨 
*/