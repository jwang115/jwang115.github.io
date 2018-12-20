// Function for sticky header
window.onscroll = function() {myFunction()};

var topnav = document.getElementById("myTopnav");
var sticky = topnav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}
