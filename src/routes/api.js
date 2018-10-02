let express = require('express');
let router = express.Router();
let getHttp = require('../service/getHttp');
let postHttp = require('../service/postHttp');
let controllerOrder = require('../controllers/controllerOrder')

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
router.post('/orderStore', controllerOrder.orderStore)

module.exports = router;
