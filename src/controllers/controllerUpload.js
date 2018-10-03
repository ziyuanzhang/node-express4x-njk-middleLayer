
//https://www.npmjs.com/package/formidable  上传文件用插件
var formidable = require('formidable');
let customizeUtil = require('../middleware/customizeUtil')
const targetFile = './upload';

exports.upload = function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = customizeUtil.createFolder(targetFile);
    form.keepExtensions = true;
    form.encoding = 'utf-8';
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFileSize = 200 * 1024 * 1024
    form.parse(req,function(err,fields,files){
        if(err){
           throw new Error(err);
        }
        console.log('fields:',fields); 
        console.log('files:',files);        

        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end('表单提交成功！');
    });
  
}