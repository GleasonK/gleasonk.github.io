function getBrowser(){
	$.browser = {};
	$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
	return $.browser;
}

function transformAll(obj, degree){
	obj.css('-webkit-transform', 'rotate(' + degree + 'deg)');
	obj.css('-ms-transform', 'rotate(' + degree + 'deg)');
	obj.css('-moz-transform','rotate(' + degree + 'deg)');
	obj.css('-o-transform','rotate(' + degree + 'deg)');
}

function gradientAll(obj, color1, color2){
	var browser = getBrowser();
	if (browser.mozilla) {
		obj.css({ background: "-moz-linear-gradient(315deg, "+ color1 +", "+ color2 +")"});
	} else if (browser.msie) {
		obj.css({ background: "-ms-linear-gradient(315deg, "+ color1 +", "+ color2 +")"});
	} else if (browser.opera) {
		obj.css({ background: "-o-linear-gradient(315deg, "+ color1 +", "+ color2 +")"});
	} else {
		obj.css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ color1 +"), to("+ color2 +"))"});
	}
}