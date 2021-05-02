// 참조형 데이터의 프로퍼티 재할당

var obj1 = {
  a: 1,
  b: 'bbb'
};
obj1.a = 2;

/* 변수 obj1이 바라보고 있는 주소는 바뀌지 않았다.
'새로운 객체'가 만들어진 것이 아니라
기존의 객체 내부의 값만 바뀐 것이다. 

프로퍼티의 값이 변경되면
해당 프로퍼티 변수는 달라진 메모리 주소를 지정하지만
프로퍼티들의 주소의 묶음을 저장하는 메모리의 주소는 변하지 않는다. */