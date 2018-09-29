var express = require("express");
var nunjucks = require("nunjucks");
var app = express();
const path = require('path');
/* 解析请求格式 */
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
/* end 解析请求格式 */
var birds = require('./src/routes/birds');
var api = require('./src/routes/api');
var upload = require('./src/routes/upload');
var download = require('./src/routes/download');

//设置跨域访问
/* app.all('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1');  
    res.header("Content-Type", "application/json;charset=utf-8");      

    //res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    //res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/;
    }
    else {
        next();
    }
}); */

/*  njk 渲染模板引用*/
app.set("view engine", "html");
//app.set('views',path.resolve(__dirname,'./views'));
nunjucks.configure('./src/views', {
    autoescape: true,
    express: app
});

/* end  njk 渲染模板引用*/

app.get('/',(req,res)=>{
     res.render('index',{name:'postbird','title':'nunjucks'});
  });
app.get('/about',(req,res)=>{
      res.render('about',{name:'about us'});
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

app.use('/static', express.static(__dirname + '/images'));
//路径：http://localhost:3000/static/ad1.jpg

/* app.all("*",function(req, res){
  res.redirect(302, '/');  
}) */
app.listen(process.env.PORT ||3000, function () {
    console.log("Example app listening on port 3000!");
});