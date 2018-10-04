
//https://www.npmjs.com/package/formidable  上传文件用插件
let formidable = require('formidable');
let customizeUtil = require('../middleware/customizeUtil')
const targetFile = './src/public/upload';

exports.saveUploadData= function(req,callback){
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
        callback(fields,files);
    });
}