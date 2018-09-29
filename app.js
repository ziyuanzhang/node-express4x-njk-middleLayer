var express = require("express");
var nunjucks = require("nunjucks");
var app = express();
const path = require('path');
var router = require('./src/router');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

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
app.use('/static', express.static(__dirname + '/images'));
//路径：http://localhost:3000/static/ad1.jpg

/*  njk 渲染模板引用*/
app.set("view engine", "html");
//app.set('views',path.resolve(__dirname,'./views'));
nunjucks.configure('./src/views', {
    autoescape: true,
    express: app
});
/* end  njk 渲染模板引用*/
router(app);
app.listen(process.env.PORT ||3000, function () {
    console.log("Example app listening on port 3000!");
});