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


/*@cc_on

  @if (@_jscript_version == 11)
    document.write("You are using IE11 with an older document mode");
  @elif (@_jscript_version == 10)
    document.write("You are using IE10");
  @elif (@_jscript_version == 9)
    document.write("You are using IE9");
  @elif (@_jscript_version == 5.8)
    document.write("You are using IE8");
  @elif (@_jscript_version == 5.7)
    document.write("You are using IE" + (!window.XMLHttpRequest ? 6 : 7));
  @elif (@_jscript_version == 5.6)
    document.write("You are using IE6");
  @elif (@_jscript_version == 5.5)
    document.write("You are using IE5.5");
  @elif (@_jscript_version < 5.5)
    document.write("You are using a version older than IE5.5");
  @else
    document.write("You are using an unknown version of IE");
  @end

@*/
