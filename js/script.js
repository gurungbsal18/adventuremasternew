// let scrollToTop = document.querySelector(".scroll-top");
let mobilePrice = document.querySelector(".mobile-trip-price");

window.onscroll = function () {
  scrollMobilePrice();
};

function scrollMobilePrice() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mobilePrice.style.display = "block";
    // scrollToTop.sylte.display = "block";
  } else {
    mobilePrice.style.display = "none";
    // scrollToTop.sylte.display = "none";
  }
}

//   let scrollToTop = document.querySelector(".scroll-top");
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

scrollToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
