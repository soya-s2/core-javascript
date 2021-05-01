var obj1 = {
  name: 'obj1',
  func: function () {
    console.log(obj1.name);
  }
};
setTimeout(obj1.func, 1000);

/*
결과 : obj1

예제 4.8에서 this를 사용하지 않은 경우의 결과
간결하고 직관적이나 재활용이 불가 
명시적으로 바라볼 객체를 obj1로 지정했기 때문임 
*/