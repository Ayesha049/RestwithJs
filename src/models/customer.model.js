
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    }
  })

  module.exports = mongoose.model('Customer', CustomerSchema)