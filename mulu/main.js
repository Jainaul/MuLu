const http = require('http');
const url = require('url');
const fs = require('fs');
const mypage = require('./mypage');

// 读取页面的URL
function geturl(req, res){
	var pathname = url.parse(req.url).pathname;
	var realname = pathname.substr(1);
   
    if (typeof pagesite[pathname] === 'function') {
		pagesite[pathname](res);
	} 
	else {mypage.apppage(res,realname)}
   
   console.log('Request for ' + pathname + ' received.');
}

// 创建服务端口
function pageserver(geturl){
	var host = '127.0.0.1';
	var port = 8080;
	http.createServer(geturl).listen(port, host);
	console.log('Server has started and listening on ' + host + ':' + port);
}

// 运行服务
var pagesite = {};
pagesite['/basis.css'] = mypage.basiscss;
pagesite['/config.js'] = mypage.configjs;
pagesite['/title.js'] = mypage.titlejs;
pagesite['/'] = mypage.homepage;

pageserver(geturl)
