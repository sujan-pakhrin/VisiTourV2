
const db = require('./configDb/database')
const cors = require('cors')
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
   
app.post("/api/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE email=? AND password=?",
    [email,password], 
    (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length>0) {
          res.sendStatus(result);
      }else{
          res.send({message: "Wrong email/Password!"})
      }
      res.send(result)
    });
  });

