const express = require('express');
const router = express.Router();
const app = express();
const db = require('../config/db');

const ctrl = require("./home.ctrl");

app.post("/register", (req, res) => {
    console.log("/register", req.body);
    var id = req.body.id;
    var name = req.body.name;
    var psword = req.body.psword;
    var email = req.body.email;
    var num = req.body.num;

    const query="INSERT INTO users(id,psword,name,email,phone) VALUES(?, ?, ?, ?, ?);";
    db.query(sqlQuery, [id,name, psword, email,num], (err, result) => {
      res.send(result);
    });
  });

app.use(express.json());
var cors = require('cors')
app.use(cors());

module.exports = router;