const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'',
  database:'CRUD'
})

app.post('/signup', async(req, res) => {
  const sql = 'INSERT INTO Signup (`name`, `email`, `password`) VALUES(?,?,?)'
  const values = [
    req.body.name,
    req.body.eamil,
    req.body.password,
  ]
  db.query(sql, [values], (err, data) => {
    if(err){
      res.json("Error")
    } else {
      res.json(data)
    }
  })
})


app.get('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.eamil, req.body.password], (err, data) => {
      if (err) {
        res.json("Error");
      } else {
        if (data.lenght > 0) {
          return res.json("Success");
        } else {
          return res.json("Failed");
        }
      }
    });
  })



app.listen(8082, () =>{
  console.log('listening')
})

