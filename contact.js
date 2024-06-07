document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("contactForm");
  var btn = document.getElementById("contactButton");
  var span = document.getElementById("closeButton");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function change() {
  let icon = document.getElementsByClassName("menu-icon")[0];
  let btn = document.getElementsByClassName("menu-button")[0];
  let header = document.getElementsByClassName("header-content")[0];
  let menuBtn = document.getElementsByClassName("nav")[0];
  const logo = document.getElementById("studynow_logo");

  if (menuBtn.style.display === "flex") {
    menuBtn.style.display = "none";
    icon.src = "./images/Hamburger.svg";
    icon.style.width = "2rem";
    icon.style.height = "2rem";
    logo.style.display = "flex";
    header.style.flexDirection = "row";
    btn.style.position = "sticky";
  } else {
    menuBtn.style.display = "flex";
    menuBtn.style.flexDirection = "column";
    icon.src = "./images/wrong.png";
    icon.style.width = "2.8rem";
    icon.style.height = "2.8rem";
    logo.style.display = "none";
    header.style.flexDirection = "column-reverse";
    btn.style.position = "relative";
    btn.style.left = "7rem";
  }
}
