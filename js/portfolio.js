  // initialize on load
  // sometimes the body size is 0 so we call this now and again later
  window.addEventListener("load", clickCounter);
  window.document.addEventListener("click", event => event.stopPropagation());
}

window.application = new Application();

//하트버튼
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "" + localStorage.clickcount + "";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

//슬라이드메뉴
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
