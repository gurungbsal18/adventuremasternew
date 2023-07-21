// let scrollToTop = document.querySelector(".scroll-top");

window.onscroll = function () {
  let mobilePrice = document.querySelector(".mobile-trip-price");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mobilePrice.style.display = "block";
    // scrollToTop.sylte.display = "block";
  } else {
    mobilePrice.style.display = "none";
    // scrollToTop.sylte.display = "none";
  }
};

// let scrollToTop = document.querySelector(".scroll-top");
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     scrollToTop.style.display = "block";
//   } else {
//     scrollToTop.style.display = "none";
//   }
// }

window.addEventListener("scroll", function () {
  let scrollToTop = document.querySelector(".scroll-top");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

window.addEventListener("click", function () {
  let scrollToTop = document.querySelector(".scroll-top");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  let navBar = document.querySelector(".trip-nav");
  if (
    document.body.scrollTop > 797 ||
    document.documentElement.scrollTop > 797
  ) {
    // console.log("testing scroll");
    navBar.classList.add("sticky-nav");
  } else {
    navBar.classList.remove("sticky-nav");
  }
});
