const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const app = express()
const port = 1337

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./app/static'))

MongoClient.connect(db.url, (err, database) => {
  if (err) {
    console.log(err)

    return
  }

  require('./app/routes')(app, database)

  app.listen(port, () => {
    console.log(`Server is live at ${port}`)
  })
})
