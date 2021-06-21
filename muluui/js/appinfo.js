function purewriter(){
	var appname = "纯纯写作";
	var offsite = "https://writer.drakeet.com/";
	var appintro= "写作辅助的编辑器。";
	var appversion = "19.8.5";
	var appversion2 = "19.8.6";
	var suffix = "apk"
	
	var tmp = arguments.callee.toString();
	var re = /function\s*(\w*)/i;
	var filename = re.exec(tmp);
	return [appname,offsite,appintro,appversion,appversion2,suffix,filename[1]];
}
exports.purewriter = purewriter;