const express = require("express")

// Import Router
const Restaurant = require('./router/Restaurant')

// App Setting
const app = express()
const port = 9000

// Mount Router
app.use('/restaurant', Restaurant)

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))