var http = require('http');
var querystring = require('querystring');
exports.find = function (req, success) {

  var contents = querystring.stringify({
    id: '8989-dddvdg',
    name: '文章标题-JSON格式参数演示',
    brief: '快速入门json参数',
    category: '分类',
  });

  var options = {
    port: 80,
    hostname: '123.56.41.127',
    path: 'http://api.crap.cn/mock/trueExam.do',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': contents.length,
    },
  };

  var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
      success(data);
      console.log('data:', data); //一段html代码
    });
    res.on('end', function (data) {
      console.log("post转发送完毕！")
    });
  });
  req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
  });
  req.write(contents);
  req.end();
};
