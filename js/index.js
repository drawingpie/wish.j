//슬라이드메뉴
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

//모바일 세로모드고정
$(window).on("orientationchange", function(event) {
	if (window.matchMedia("(orientation: portrait)").matches) {
		// 가로로 볼 때 경고창
		alert("가로는 No No~ 세로로 보시는게 좋아요");
	} else if (window.matchMedia("(orientation: landscape)").matches) {
		// 세로모드고정
		console.log("가로금지");
	}
});

// ie 주석
		function BrowserVersionCheck() {
			var word;
			var versionOrType = "another";
			var ieName = navigator.appName;
			var agent = navigator.userAgent.toLowerCase();
			/*** 1. IE 버전 체크 ***/
			// IE old version ( IE 10 or Lower )
			if (ieName == "Microsoft Internet Explorer") {
				word = "msie ";
			} else {
				// IE 11
				if (agent.search("trident") > -1) word = "trident/.*rv:";
				// IE 12 ( Microsoft Edge )
				else if (agent.search("edge/") > -1) word = "edge/";
			}
			var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
			if (reg.exec(agent) != null) versionOrType = RegExp.$1 + RegExp.$2;
			if (versionOrType == "another") {
				if (agent.indexOf("chrome") != -1) versionOrType = "Chrome";
				else if (agent.indexOf("opera") != -1) versionOrType = "Opera";
				else if (agent.indexOf("firefox") != -1) versionOrType = "Firefox";
				else if (agent.indexOf("safari") != -1) versionOrType = "Safari";
			}
			if (versionOrType !== ("Chrome" || "Opera" || "Firefox" || "Safari")) {
				return alert("이 브라우저는 지원하지 않습니다. \n(지원 브라우저: Chrome, Opera, Firefox, Safari, Edge 그 외 Chrome 기반 브라우저)")
			}
			return versionOrType;
		};
		BrowserVersionCheck();
