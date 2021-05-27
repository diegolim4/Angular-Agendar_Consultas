 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/consultas', {
     useMongoClient: true
 });

 mongoose.Promise = global.Promise;

 module.exports = mongoose;