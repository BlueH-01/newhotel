// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());


// MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost", // MySQL 서버 주소
  user: "root",      // MySQL 사용자
  password: "5428",  // MySQL 비밀번호
  database: "hotel_reservation",  // 사용할 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error: ", err);
  } else {
    console.log("Connected to MySQL Database!");
  }
});

// 회원가입 API
app.post("/signup", (req, res) => {
  const { email, username, password, like_type } = req.body;

  const query = "INSERT INTO user (email, username, password, like_type) VALUES (?, ?, ?, ?)";
  db.query(query, [email, username, password, like_type], (err, result) => {
    if (err) {
      res.status(500).send("서버 오류");
    } else {
      res.status(200).send("회원가입 성공");
    }
  });
});

// 호텔 타입 가져오기 (GET 요청)
app.get("/hotel-types", (req, res) => {
  const sqlQuery = "SELECT * FROM hotel_type";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
    }
  });
});

// 호텔 목록 가져오기 (GET 요청)
app.get("/hotels", (req, res) => {
  const sqlQuery = "SELECT * FROM Hotel";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
    }
  });
});

// 호텔 추가하기 (POST 요청)
app.post("/add-hotel", (req, res) => {
  const { name, locationID, rating, priceRange, imageURL } = req.body;
  const sqlQuery = "INSERT INTO Hotel (Name, LocationID, Rating, PriceRange, ImageURL) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlQuery, [name, locationID, rating, priceRange, imageURL], (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send("Hotel added successfully!");
    }
  });
});

// 호텔 삭제하기 (DELETE 요청)
app.delete("/delete-hotel/:id", (req, res) => {
  const hotelID = req.params.id;
  const sqlQuery = "DELETE FROM Hotel WHERE HotelID = ?";
  db.query(sqlQuery, [hotelID], (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send("Hotel deleted successfully!");
    }
  });
});

// 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
