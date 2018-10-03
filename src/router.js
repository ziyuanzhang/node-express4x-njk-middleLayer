
let formidable = require('formidable');
let birds = require('./routes/birds');
let api = require('./routes/api');
let upload = require('./routes/upload');
let download = require('./routes/download');
let controllerOrder = require('./controllers/controllerOrder');
let controllerUpload = require('./controllers/controllerUpload');

router = function(app){
    app.get('/',(req,res)=>{
        res.render('index',{name:'postbird','title':'nunjucks'});
     });
    app.get('/about.html',(req,res)=>{
         res.render('about',{name:'about us'});
     });  
     app.get('/order.html',(req,res)=>{
        res.render('order',{titleName:'order'});
     });
     app.get('/allOrder.html', controllerOrder.allOrder)
     app.get('/order/:orderDetails', controllerOrder.orderDetails)
     app.post('/upload',controllerUpload.upload);

     

    let cb0 = function (req, res, next) {
       console.log('CB0');
       next();
    }
    let cb1 = function (req, res, next) {
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
    /* app.all("*",function(req, res){
     res.redirect(302, '/');  
    }) */
}

module.exports = router;


