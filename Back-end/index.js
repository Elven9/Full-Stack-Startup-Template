const express = require("express")
const mysql = require("mysql")

// Mysql Setting
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ekick4sl3",
  port: "3306",
  database: "avl"
})

// App Setting
const app = express()
const port = 9000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))