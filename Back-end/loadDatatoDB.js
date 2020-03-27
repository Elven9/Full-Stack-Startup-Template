const mysql = require("mysql")
const csvParse = require("csv-parse")
const fs = require("fs")

// Mysql Setting
const db = mysql.createConnection({
  host: "localhost",
  user: "avl",
  password: "ekick4sl3",
  port: "3306",
  database: "avl"
})

const dbName = "storage"
const fields = [
  "name",
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "type",
  "michilin",
  "parking",
  "takeout",
  "downPayment",
  "evaluation",
  "place"
]

function createTable() {
  // Construct Query

  // Construct Query
  let query =
`
CREATE TABLE ${dbName} (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
`

  for (let i = 0; i < fields.length; i++) {
    query += `  ${fields[i]} VARCHAR(255) NOT NULL${i !== fields.length - 1 ? "," : ""}\n`
  }

  query += ");"

  console.log(query)

  // db.connect()
  // db.query(query, (err) => { if (err) throw err })
  // db.end()
}

function loadData(data) {
  // Construct Columns
  let query = `INSERT INTO ${dbName} (${fields.join(", ")}) VALUES\n`

  for (let i = 0; i < data.length; i++) query += `(${data[i].flatMap(e => `'${e}'`).join(", ")})${i != data.length - 1 ? ",\n" : ";"}`

  console.log(query)

  // db.connect()
  // db.query(query, (err) => { if (err) throw err })
  // db.end()
}

function main() {
  // Read CSV File
  fs.readFile('./日本料理餐廳資料.csv', (err, data) => {
    if (err) throw err

    // Data
    const str = data.toString()

    // Parse it.
    csvParse(str, {}, async (err, out) => {
      createTable()
      loadData(out.slice(1))
    })
  })
}

main()