// 부분 적용 함수 - 디바운스

var debounce = function (eventName, func, wait) { // eventName은 출력 용도, func는 실행할 함수, wait는 발생 이벤트 여부 판단
  var timer = null;
  return function (event) {
    var self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timer);
    timer = setTimeout(func.bind(self, event), wait); // wait 시간 뒤에 func를 실행할 것
  };
};

var moveHandler = function (e) {
  console.log('move event 처리');
};
var wheelHandler = function (e) {
  console.log('wheel event 처리');
};
document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));

/*
최초 event 발생 시 line 9에 의해
timer의 대기열에 'wait 시간 뒤에 func를 실행할 것'이라는 내용이 담김.
wait 시간이 경과하기 이전에 다시 동일한 event 발생 시
line 8에 의해 앞서 저장했던 대기열을 초기화하고, 다시 line 9에서 새로운 대기열을 등록함
*/