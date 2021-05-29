// thisArg를 받는 경우 예시 - forEach 메서드

var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments); // 요소를 추출하여 새로운 배열을 반환함
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this); // 콜백 함수 내부에서의 this는 이 this임. (add 메서드의 this == report, line 17)
  },
  average: function () {
    return this.sum / this.count;
  }
};
report.add(60, 85, 95); // report.add이므로 this는 report
console.log(report.sum, report.count, report.average()); // 240 3 80