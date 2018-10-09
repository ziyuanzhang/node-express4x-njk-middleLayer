var morgan = require('morgan');
var fs = require('fs');
var path = require('path');


let log = function (app) {

    // log only 4xx and 5xx responses to console
    app.use(morgan('dev', {
        skip: function (req, res) {
            return res.statusCode < 400
        }
    }))
    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream('./src/logs/logsData/access.log', {
        flags: 'a'
    })

    // setup the logger
    app.use(morgan('common', {
        stream: accessLogStream
    }))
}
module.exports = log;