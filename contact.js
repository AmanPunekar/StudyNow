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
