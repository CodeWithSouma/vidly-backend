require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./startup/routes')(app);

winston.handleExceptions(
    new winston.transports.File({filename:'uncaughtException.log'}));

process.on('unhandledRejection',(ex) => {
   throw ex;
});

winston.add( winston.transports.File,{ filename: 'logfile.log' });
winston.add( winston.transports.MongoDB,{
    db:'mongodb://localhost/vidly',
    level:'error'
});

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR:jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/vidly',{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false})
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...'));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));