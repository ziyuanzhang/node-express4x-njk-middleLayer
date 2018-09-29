var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    res.download('./images/ad1.jpg');
});


module.exports = router;