document.querySelector(".navigation__list").addEventListener("click", function(e) {
  if (e.target.matches(".navigation__link")) {
    document.getElementById("nav-toggle").checked = false;
    }
});