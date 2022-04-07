const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const Cat = require('./models/catSchema')

const app = express()
const port = 8000

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Mongoose!')
})

app.get('/cats', (req, res) => {
  Cat.find().then((cats) => res.send(cats))
})

app.post('/cats', (req, res) => {
  Cat.create({ name: req.body.name }).then((cat) => res.send(cat))
})

app.put('/cats/:id', (req, res) => {
  Cat.updateOne({ _id: req.params.id }, { name: req.body.name }).then((cat) =>
    res.send(cat)
  )
})

// delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
