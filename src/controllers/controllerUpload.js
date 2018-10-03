let UploadData = require('../middleware/formUpload');

exports.upload = function (req, res) {
    UploadData.saveUploadData(req,function(fields,files){
        console.log('fields:',fields); 
        console.log('files:',files);        

        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end('表单提交成功！');
    })
  
}