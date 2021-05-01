var obj1 = {
  name: 'obj1',
  func: function () {
    console.log(this.name);
  }
};
setTimeout(obj1.func.bind(obj1), 1000); // this를 지정

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500);

/* 
결과 : 
obj1
obj2
*/