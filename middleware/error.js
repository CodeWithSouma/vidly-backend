const winston = require('winston');

module.exports = function(err,req,res,next){
    console.log(err);
    winston.error({message: err.message, level: err.level, stack: err.stack, meta: err});
    res.status(500).send('Something failed.');
}