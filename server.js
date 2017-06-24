const express     = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser  = require('body-parser')
const app = express()
const port = 1337

app.use(express.static('client'))

app.get('/contacts', (req, res) => {
  res.json([
    {
      name: 'contactName',
      type: 'person',
    }
  ])
})

app.listen(port, () => {
  console.log(`Server is live at ${port}`)
})
