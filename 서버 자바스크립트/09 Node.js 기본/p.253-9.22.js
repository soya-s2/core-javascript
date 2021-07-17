// cheerio 모듈

// 모듈 추출
const request = require('request');
const cheerio = require('cheerio');

// request 모듈 사용
const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
  // cheerio 모듈 사용
  const $ = cheerio.load(body);

  // 데이터 추출
  $('.view_box').each((index, element) => { // ★ .book_tit, .book_writer 등은 html 페이지의 클래스명이다.
    const title = $(element).find('.book_tit').text().trim();
    let writer = $(element).find('.book_writer').text().trim();
    writer = writer.split(',').map((item) => item.trim());

    // 출력
    console.log(title);
    console.log(writer);
    console.log();
  });
});

/*
cheerio 모듈은 받아온 페이지를 파싱하여
전체 페이지 중에서 필요한 부분의 정보만을 가져올 수 있다.
jquery 선택자를 이용해서 쉽게 사용 가능하다는 장점이 있다.
*/