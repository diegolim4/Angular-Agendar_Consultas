 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/consultas', {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
 });

 mongoose.Promise = global.Promise;

 module.exports = mongoose;