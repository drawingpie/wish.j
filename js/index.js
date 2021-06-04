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
  (function BrowserVersion() {
    let agent = navigator.userAgent.toLowerCase();
      console.log((agent.indexOf("trident") || agent.indexOf("msie")) !== -1)
    if((agent.indexOf("trident") || agent.indexOf("msie")) !== -1) {
      alert("해당 브라우저는 지원하지 않습니다. \n(지원 브라우저: Chrome, Opera, Firefox, Safari, Edge 그 외 Chrome 기반 브라우저)")
    }
  })();
