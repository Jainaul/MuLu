const fs = require('fs');

// 根据URL创建app页面
function apppage(res,realname) {
	var content = fs.readFileSync('../muluui/html/app.html');
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF8' });
    res.write(content);
	res.write('<br/><script>'+ realname +'()</script><br/><script src="title.js"></script>');
    res.end();
}

// 引入的相关css,js,ttf等文件
function basiscss(res) {
	var content = fs.readFileSync('../muluui/css/basis.css');
    res.writeHead(200, {'Content-Type': 'text/css; charset=UTF8' });
    res.write(content);
    res.end();
}

function configjs(res) {
	var content = fs.readFileSync('../muluui/js/config.js');
    res.writeHead(200, {'Content-Type': 'text/javascript; charset=UTF8' });
    res.write(content);
    res.end();
}

function titlejs(res) {
	var content = fs.readFileSync('../muluui/js/title.js');
    res.writeHead(200, {'Content-Type': 'text/javascript; charset=UTF8' });
    res.write(content);
    res.end();
}

// 网站主页
function homepage(res) {
	var content = fs.readFileSync('../muluui/html/home.html');
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF8' });
    res.write(content);
    res.end();
}

// 导出函数
exports.apppage = apppage;
exports.basiscss = basiscss;
exports.configjs = configjs
exports.titlejs = titlejs
exports.homepage = homepage;