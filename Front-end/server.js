const express = require('express')

const app = express()
const port = 80

app.use(express.static('build'))

app.listen(port, () => { console.log(`Server start to listen on port ${port}`) })