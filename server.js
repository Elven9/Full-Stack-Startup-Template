const express = require('express')

const app = express()
const port = process.env.PORT

app.use(express.static('build'))

app.listen(port, () => { console.log(`Server start to listen on port ${port}`) })