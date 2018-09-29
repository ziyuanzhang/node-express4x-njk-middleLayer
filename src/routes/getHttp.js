var http = require('http');
exports.find = function(req,success){
    
    var options = {
      port: 80,
      hostname: '123.56.41.127',
      method: 'GET',
      path: 'http://api.crap.cn/mock/trueExam.do?id=895aaabc-f3d7-461c-bad6-e9c44f6cdb4f'
    };
    var req = http.request(options, function(res) {
	    res.setEncoding('utf8');
	    res.on('data', function (data) {
	      var data = JSON.parse(data);
	      success(data);
	    });
    });	
    req.on('error', function(e){
       console.log("auth_user error: " + e.message);
    });
     req.end();
}
