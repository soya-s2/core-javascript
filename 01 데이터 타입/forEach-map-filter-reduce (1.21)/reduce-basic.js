/* reduce() 메서드는 배열의 각 요소에 대해 주어진
리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

# 리듀서 함수는 네 개의 인자를 가진다.
- 누산기(accumulater, acc)
- 현재값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)

리듀서 함수의 반환 값은 누산기에 할당되고,
누산기는 순회 중 유지되므로 최종 결과는 하나의 '값'이 된다.

# 구문 : arr.reduce(callback[, initialValue])

# 매개변수 : 
callback / 각 요소에 대해 실행할 함수
  - accumulator / 콜백의 반환값을 누적 
  - currentValue / 처리할 현재 요소
  - currentIndex / 처리할 현재 요소의 인덱스. initialValue를 제공하면 0, 아니면 1부터 시작 (Optional)
  - array / reduce()를 호출할 배열 (Optional)
initialValue / 콜백의 최초 호출에서 첫 번째 인수에 제공하는 값 (Optional)

# 반환 값 : 누적 계산의 결과 값

# 주의 : 빈 배열에 initialValue를 제공하지 않으면 TypeError 발생. */