let menuBar = document.getElementById("menu--bar");
menuBar.addEventListener("click", () => {
  let mobileMenu = document.getElementById("showLinks");
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});
