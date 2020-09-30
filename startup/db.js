const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://localhost/vidly',{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false})
        .then(() => winston.info('Connected to MongoDB...'));

}