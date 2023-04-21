const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  console.log('Hello, World!1')
  res.send('Hello, World!1')
})
app.get('/colors', (req, res) => {
  console.log('colors1')
  res.send('colors1')
})
app.get('/colors/red', (req, res) => {
  console.log('colors/red1')
  res.send('colors/red1')
})
app.get('/user', (req, res) => {
  console.log('user1')
  res.send('user1')
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
