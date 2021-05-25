// call/apply 메서드의 활용 3-3) ES6의 펼치기 연산자 활용

const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3

/* call/apply 메서드는 명시적으로 별도의 this를 바인딩하면서
함수 또는 메서드를 실행하는 훌륭한 방법임.
하지만 이로 인해 this를 예측하기 어렵게 만들어
코드 해석을 방해한다는 단점이 있음.
그럼에도 불구하고 ES5 이하의 환경에서는
마땅한 대안이 없으므로 실무에서 매우 광범위하게 활용되고 있음. */

/* 
펼치기 연산자는 말 그대로 펼친다.
Math.max(...numbers); 를 하면
Math.max.apply(null, numbers), Math.max(10, 20, 3, 16, 45)와 같은 것이다.
새로운 배열을 만들고 얕은 복사만을 수행한다는 특징이 있다.
iterable한 모든 인자는 펼칠 수 있고, concat 등을 대체할 수 있다.

참고 : https://dkwjdi.tistory.com/217
*/