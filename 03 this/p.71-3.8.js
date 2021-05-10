// 메서드 내부에서의 this

var obj = {
  methodA: function () { console.log(this); },
  inner: {
    methodB: function () { console.log(this); }
  }
};

obj.methodA();
/* 
=== obj
{
  methodA: [Function: methodA],
  inner: { methodB: [Function: methodB] }
} 
*/

obj['methodA']();
/* 
=== obj
{
  methodA: [Function: methodA],
  inner: { methodB: [Function: methodB] }
}
*/

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB']();

// { methodB: [Function: methodB] } === obj.inner