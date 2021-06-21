// 文件下载地址前缀定义
var downproto = "http"
var downsite = "127.0.0.1:8080/"

//页面信息配置
function pageinfo(appname,offsite,appintro,appversion,versionhref,appversion2,versionhref2){
	document.getElementById("appname").innerHTML= appname;
	document.getElementById("offsite").innerHTML= offsite;
	document.getElementById("offsite").href= offsite;
	document.getElementById("appintro").innerHTML= appintro;
	document.getElementById("appversion").innerHTML= appversion;
	document.getElementById("appversion").href= versionhref;
	document.getElementById("appversion2").innerHTML= appversion2;
	document.getElementById("appversion2").href= versionhref2;
}

//合成链接
function comlink(appversion,appversion2,suffix,filename){
	var versionhref = downproto + "://" +downsite + filename + "-" + appversion + "." + suffix;
	var versionhref2 = downproto + "://" +downsite + filename + "-" + appversion2 + "." + suffix;
	return [versionhref,versionhref2]
}
