const express = require('express')
const moment = require('moment')
const {dbSetting, table, fields} = require('../database')

const router = express.Router()

// Read 
router.get('/read', (req, res, next) => {
  let db = dbSetting()
  
  db.connect()
  db.query(`select * from ${table}`, (err, result) => {
    if (err) {
      next(err)
    } else {
      // Return Result
      res.json(result)
    }
  })
})

router.get('/now', (req, res, next) => {
  const db = dbSetting()
  const day = req.query.day
  const time = req.query.time

  // Verify Parameters Type and Value
  if (fields.slice(1, 8).indexOf(day) === -1) {
    throw new Error("Parameter 'day' is not a valid input.")
  }

  if (!moment(time, "HH:mm").isValid()) {
    throw new Error("Parameter 'time' is not a valid input.")
  }

  // Get DB Data
  // db.connect()
  // db.query(`SELECT * FROM ${table} WHERE `)
  res.send("OKOK")
})

module.exports = router