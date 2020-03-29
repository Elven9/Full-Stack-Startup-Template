const express = require("express")
const cors = require('cors')

// Import Router
const Restaurant = require('./router/Restaurant')

// App Setting
const app = express()
const port = 9000

// CORS Plugin
app.use(cors)

// Mount Router
app.use('/restaurant', Restaurant)

// Health Check Route
app.get('/healthCheck', (req, res) => { res.send("OK") })

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))