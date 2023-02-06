
const db = require('./configDb/database')
const cors = require('cors')
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
   
app.post("/api/signin1", (req, res) => {
  const email = req.body.UserEmail;
  const password = req.body.UserPassword;

  db.query("SELECT * FROM user WHERE UserEmail=? AND UserPassword=?",
  [email,password], 
  (err, result) => {
    if (err) {
      console.log(err)
    }
    else if (result.length>0) {
        res.sendStatus(result);
    }else{
        res.send({message: "Wrong email/Password!"})
    }
    res.send(result)
  });
});




