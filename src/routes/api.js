var express = require('express');
var router = express.Router();
var getHttp = require('./getHttp');
var postHttp = require('./postHttp');


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('APITime: ', Date.now());
  next();
 
});
// define the home page route
router.get('/get', function(req, res) {
  getHttp.find(req, function(data) {
      res.json({ user: data });
  });
});
// define the about route
router.post('/post', function(req, res) {
    //console.log("postHttp:",req.body);    
    postHttp.find(req, function(data) {
        res.json({ user: data });
  });

});

module.exports = router;
