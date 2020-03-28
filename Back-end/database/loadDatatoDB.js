const mysql = require("mysql")
const csvParse = require("csv-parse")
const fs = require("fs")

const { dbSetting, table, fields } = require('.')

function createTable() {
  return new Promise((res, rej) => {
    // Construct Query
  let query =
`
CREATE TABLE ${table} (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
`
    // Add Field Definition
    for (let i = 0; i < fields.length; i++) {
      query += `  ${fields[i]} VARCHAR(255) NOT NULL${i !== fields.length - 1 ? "," : ""}\n`
    }
    query += ");"
  
    console.log(query)
  
    let db = dbSetting()
  
    db.connect()
    db.query(query, (err) => {
      db.end()
      if (err) rej(err)
      else res()
    })
  })
}

function loadData(data) {
  return new Promise((res, rej) => {
    // Construct Columns
    let query = `INSERT INTO ${table} (${fields.join(", ")}) VALUES\n`

    for (let i = 0; i < data.length; i++) query += `(${data[i].flatMap(e => `'${e}'`).join(", ")})${i != data.length - 1 ? ",\n" : ";"}`

    console.log(query)

    let db = dbSetting()

    db.connect()
    db.query(query, (err) => {
      db.end()
      if (err) rej(err)
      else res()
    })
  })
}

function main() {
  // Read CSV File
  fs.readFile('./日本料理餐廳資料.csv', (err, data) => {
    if (err) throw err

    // Data
    const str = data.toString()

    // Parse it.
    csvParse(str, {}, async (err, out) => {
      try {
        await createTable()
        await loadData(out.slice(1))
      } catch (err) {
        throw err
      }
    })
  })
}

main()