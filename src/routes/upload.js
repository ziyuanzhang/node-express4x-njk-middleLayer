var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploadFolder = './upload';
let customizeUtil = require('../middleware/customizeUtil');

customizeUtil.createFolder(uploadFolder);
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, customizeUtil.createFolder(uploadFolder))
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});



//添加配置文件到muler对象。
var upload = multer({
    storage: storage
});

//如需其他设置，请参考multer的limits,使用方法如下。
//var upload = multer({
//    storage: storage,
//    limits:{}
// });

 router.post('/',upload.single('logo'),function(req,res){
     console.log('file:',req.file);
     res.send('ok');
 })
 module.exports = router;

