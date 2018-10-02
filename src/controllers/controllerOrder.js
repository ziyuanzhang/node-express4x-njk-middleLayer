let fs = require('fs');
let orderFile = require('../middleware/orderFile');

exports.orderStore = function (req, res) {
    orderFile.save(req.body.userName,req.body.dishName, (err) => {
        if (err) {
            res.send('-1')
        } else {
            res.send('1')
        }
    })
}
exports.allOrder = function(req, res){
    //console.log('显示所有订单');
    orderFile.getAllFilesName(function(data){
       // console.log('AllOrder:',data);
        res.render('allOrder',{AllOrder:data});
    })
}
exports.orderDetails =function(req, res){
    let userName = req.params.orderDetails;

    console.log('orderDetails:',userName);
    orderFile.getOrderDetails(userName,function(data){
        if(data=='-1'){
            res.render('orderDetails',{'errer':true,'userName':userName,'orderDetails':data})
        }
       res.render('orderDetails',{'userName':userName,'orderDetails':data})
    })
};