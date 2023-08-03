const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');
const cors = require('cors');

app.use('/user_inform', user_inform);

app.post("/register", (req, res) => {
  console.log("/register", req.body);
  var id = req.body.id;
  var name = req.body.name;
  var psword = req.body.psword;
  var email = req.body.email;
  var num = req.body.num;

  const query="INSERT INTO users(id,name,psword,email,phone) VALUES(?, ?, ?, ?, ?);";
  db.query(sqlQuery, [id,name, psword, email,num], (err, result) => {
    res.send(result);
  });
});


let corsOptions = {
    origin: "*", // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  };
  
  app.use(cors(corsOptions));

const port = 8080;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));
