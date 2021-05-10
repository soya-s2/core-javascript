/* map() 메서드는 배열 내의 모든 요소 각각에 대하여
주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 

# 구문 : arr.map(callback(currentValue[, index[, array[[)[, thisArg]) 

# 매개변수는 1.21.forEach.js와 같음 

# 반환 값 : 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

# 특징 : 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않음 
thisArg 매개변수가 전달되지 않은 경우 this는 undefined임 
호출한 배열의 값을 변형하지 않음 */