
let formidable = require('formidable');
var birds = require('./routes/birds');
var api = require('./routes/api');
var upload = require('./routes/upload');
var download = require('./routes/download');

router = function(app){
    app.get('/',(req,res)=>{
        res.render('index',{name:'postbird','title':'nunjucks'});
     });
    app.get('/about',(req,res)=>{
         res.render('about',{name:'about us'});
     });
    app.get('/order',(req,res)=>{
       res.render('order',{titleName:'order'});
    });
    
    var cb0 = function (req, res, next) {
       console.log('CB0');
       next();
    }
    var cb1 = function (req, res, next) {
       console.log('CB1');
       next();
    }
    
    app.get('/example/d', [cb0, cb1], function (req, res, next) {
       console.log('the response will be sent by the next function ...');
       next();
    }, function (req, res) {
        res.send('Hello from D!!');
    });
    app.get('/profile/:id/user/:name',function(req,res){
      res.send("name:",req.query.name)
    })
    app.get("/json", function (req, res) {
        res.json({ user: 'tobi' });
    });
    app.get("/redirect", function (req, res) {
       /*  res.redirect('http://google.com'); */
        res.redirect('/json');
    });
    app.post('/http', function (req, res) {
       console.log("postHttp:",req.body);
        res.send('hellow post! ');
    });
    app.use('/birds', birds);
    app.use('/api', api);
    app.use('/download', download);
    app.use('/upload', upload);
    /* app.all("*",function(req, res){
     res.redirect(302, '/');  
    }) */
}

module.exports = router;


