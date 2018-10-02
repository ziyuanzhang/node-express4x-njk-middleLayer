let fileUrlbase ='./src/public/orderStore/';
let fs = require('fs');

exports.save = function (userName,data,callback) {
    fs.appendFile(`${fileUrlbase}/${userName}.txt`, data, callback);

}
exports.getAllFilesName = function(callback){
    fs.readdir(`${fileUrlbase}`,function(err,fileNameArray){
        if(err){
            throw new Error('读取订单文件失败')
        }else{
            let fileNameArr = []
            for( fileName of fileNameArray){
                fileNameArr.push(fileName.substr(0,fileName.length-4));
            }
            console.log("fileNameArr:",fileNameArr)
            callback(fileNameArr)
        }
       
    })
}
exports.getOrderDetails = function(userName,callback){
     fs.readFile(`${fileUrlbase}/${userName}.txt`,function(err,data){
         if(err){
            callback('-1');
            //throw new Error('读取订单详情失败')

         }else{
            callback(data.toString());
         }
        
     })
}
/* getOrderDetails(11,function(data){
    console.log(data)
}) */
//node src/middleware/orderFile.js