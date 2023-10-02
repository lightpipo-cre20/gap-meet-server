// 필요한 모듈 불러오기
const mysql = require('mysql');

// MySQL 연결 설정
const dbConfig = {
  host: 'awsdbinstance.ctpcezq624ms.ap-northeast-2.rds.amazonaws.com', // MySQL 호스트 주소
  user: 'gapmeet', // MySQL 사용자 이름
  password: 'ese2023sw', // MySQL 비밀번호
  database: 'gapmeetdb' // 사용할 데이터베이스 이름
};

// MySQL 연결 생성
const connection = mysql.createConnection(dbConfig);

// 연결 시작
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    throw err;
  }
  console.log('MySQL 연결 성공');
});e

module.exports = connection;