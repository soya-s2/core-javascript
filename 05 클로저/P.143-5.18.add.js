var getInformation = function (baseUrl) {
  return function (path) {
    return function (id) {
      return fetch(baseUrl + path + '/' + id);
    };
  };
};
// ES6
var getInformation = baseUrl => path => id => fetch(baseUrl + path + '/' + id);

//////////////////////////////////////////////////////////////////////////////////////

var imageUrl = 'http://imageAddress.com/';
var productUrl = 'http://productAddress.com/';

// 이미지 타입별 요청 함수 준비
var getImage = getInformation(imageUrl);
var getEmoticon = getImage('emoticon');
var getIcon = getImage('icon');

// 제품 타입별 요청 함수 준비
var getProduct = getInformation(productUrl);
var getFruit = getProduct('fruit');
var getVegetable = getProduct('vegetable');

// 실제 요청
var emoticon1 = getEmoticon(100);
var emoticon2 = getEmoticon(102);
var icon1 = getIcon(205);
var icon2 = getIcon(234);
var fruit1 = getFruit(300);
var fruit2 = getFruit(400);
var vegetable1 = getVegetable(456);
var vegetable2 = getVegetable(789);