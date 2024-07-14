require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sparsh', (req,res) => {
    res.send('hi there, this is sparsh!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})