window.onscroll = function () {
  let mobilePrice = document.querySelector(".mobile-trip-price");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mobilePrice.style.display = "block";
  } else {
    mobilePrice.style.display = "none";
  }
};

window.addEventListener("scroll", function () {
  let scrollToTop = document.querySelector(".scroll-top");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

let navBar = document.querySelector(".trip-nav");
const initialOffset = navBar.offsetTop;
window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPos = window.scrollY;

  if (scrollPos >= initialOffset) {
    navBar.classList.add("sticky-trip-nav");
  } else {
    navBar.classList.remove("sticky-trip-nav");
  }
});
