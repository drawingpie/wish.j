//슬라이드메뉴
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

//모바일 세로모드고정
// $(window).on("orientationchange", function(event) {
// 	if (window.matchMedia("(orientation: portrait)").matches) {
// 		// 세로 모드 (평소 사용하는 각도)
// 		console.log("가로금지");
// 		$("#orientation_val").html("portrait");
// 	} else if (window.matchMedia("(orientation: landscape)").matches) {
// 		// 가로 모드 (동영상 볼때 사용하는 각도)
// 		console.log("가로금지");
// 		$("#orientation_val").html("landscape");
// 	} else {
// 		alert("The orientation has changed!");
// 	}
// });


$(window).on("orientationchange", function(event) {
	if (window.matchMedia("(orientation: portrait)").matches) {
		// 세로 모드 (평소 사용하는 각도)
		alert("가로는 No No~ 세로로 보시는게 좋아요");
    $("body").rotate("180deg");
	} else if (window.matchMedia("(orientation: landscape)").matches) {
		// 가로 모드 (동영상 볼때 사용하는 각도)
		console.log("가로금지");
	}
});
