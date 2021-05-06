// 매개변수와 변수에 대한 호이스팅 (2) - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태

function a() { 
  var x = 1; // 수집 대상 1 (매개변수 선언)
  console.log(x); // (1)
  var x; // 수집 대상 2 (변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상 3 (변수 선언)
  console.log(x); // (3)
}
a();

/* 호이스팅 될 때, '어떤' 식별자가 있는지만 관심이 있음.
따라서 변수를 호이스팅 시 변수명만 끌어올리고 할당 과정은 원래 자리에 남겨둠. */