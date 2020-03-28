const mysql = require("mysql")

// Mysql Setting
const table = "storage"

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

const dbSetting = () => mysql.createConnection({
  host: "localhost",
  user: "avl",
  password: "ekick4sl3",
  port: "3306",
  database: "avl"
})

module.exports = {
  dbSetting,
  table,
  fields
}