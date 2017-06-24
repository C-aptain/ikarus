const contacts = require('./contacts')

module.exports = (app, db) => {
  contacts(app, db)
}