const ObjectID = require('mongodb').ObjectID

module.exports = (app, db) => {
  app.post('/api/contacts', (req, res) => {
    const contact = {
      name: req.body.name,
      type: req.body.type
    }

    db.collection('contacts').insert(contact, (err, result) => {
      if (err) { 
        res.send({error: 'An error has occurred'})
      } else {
        res.send(result.ops[0])
      }
    })
  })

  app.get('/api/contacts', (req, res) => {
    db.collection('contacts').find({}).toArray(function(err, docs) {
      if (err) {
        res.send({error: 'An error has occurred'})
      } else {
        res.send(docs)
      }
    });
  })

  app.get('/api/contacts/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)}

    db.collection('contacts').findOne(details, (err, item) => {
      if (err) {
        res.send({error: 'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })

  app.put ('/api/contacts/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}
    const contact = {
      name: req.body.name,
      type: req.body.type
    }

    db.collection('contacts').update(details, contact, (err, result) => {
      if (err) {
        res.send({error: 'An error has occurred'})
      } else {
        res.send(contact)
      } 
    });
  });

  app.delete('/api/contacts/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}

    db.collection('contacts').remove(details, (err, item) => {
      if (err) {
        res.send({error: 'An error has occurred'})
      } else {
        res.send('Note ' + id + ' deleted!')
      } 
    })
  })
}