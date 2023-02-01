// server/index.js

const express = require("express");
const db = require('./configDb/database')
const cors = require('cors')

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});

app.get("/api/user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});


