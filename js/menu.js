let menuToggle = document.getElementById("menu-toggle");
let expandMenu = document.querySelector(".expand-menu");
let topNav = document.querySelector(".top-nav");
let searchBar = document.querySelector(".search-bar");
let mobileMenuBar = document.getElementById("sm-menu-toggle");

menuToggle.addEventListener("click", function () {
  expandMenu.style.display = "block";
  topNav.style.display = "none";
  searchBar.style.display = "none";
  // console.log("hello");
});

mobileMenuBar.addEventListener("click", function () {
  expandMenu.style.display = "none";
  topNav.style.display = "flex";
  searchBar.style.display = "block";
  //   console.log("helo");
});
