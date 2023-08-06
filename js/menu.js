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

let menuItem1 = document.querySelector(".menu-item-1");
let menuItem2 = document.querySelector(".menu-item-2");
let menuList1 = document.querySelector(".menu-list-1");
let menuList2 = document.querySelector(".menu-list-2");

menuItem1.addEventListener("click", function () {
  menuList1.style.display = "block";
  menuList2.style.display = "hide";
});
menuItem2.addEventListener("click", function () {
  menuList1.style.display = "hide";
  menuList2.style.display = "block";
});
