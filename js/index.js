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

//ie 브라우저 금지
if ($.browser.msie) {
 $("html").addClass("ie");
};
