// // trip price only on mobile view while scrolling
window.onscroll = function () {
  let mobilePrice = document.querySelector(".mobile-trip-price");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mobilePrice.style.display = "block";
  } else {
    mobilePrice.style.display = "none";
  }
};

// // scroll to the top
let scrollToTop = document.querySelector(".scroll-top");
document.addEventListener('DOMContentLoaded', function (){
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  });
  
  scrollToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
})

// explore region content read more and less
let exploreRegionContent = document.querySelector('.explore-region-content');
let readMoreBtn = document.getElementById('content-read-more');

document.addEventListener('DOMContentLoaded', function (){
  readMoreBtn.addEventListener('click', function () {
    if(exploreRegionContent.classList.contains('collapsed')) {
      exploreRegionContent.classList.remove('collapsed');
      exploreRegionContent.classList.add('expand')
      readMoreBtn.innerText = 'Read Less'
    } else {
      exploreRegionContent.classList.remove('expand')
      exploreRegionContent.classList.add('collapsed')
      readMoreBtn.innerText = "Read More"
    }
  })
  
})


// // trip navbar sticky
let navBar = document.querySelector(".trip-nav");
const initialOffset = navBar.offsetTop;
document.addEventListener('DOMContentLoaded', function (){
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPos = window.scrollY;
  
    if (scrollPos >= initialOffset) {
      navBar.style.position = "fixed";
      navBar.classList.add("sticky-trip-nav");
      // navBar.style.width = "100%";
      // navBar.style.top = "0";
    } else {
      navBar.style.position = "relative";
      navBar.classList.remove("sticky-trip-nav");
    }
  });
})

// cost include exclude and trip highlight tab section
let costIncludeTab = document.querySelector(".cost-include-tab");
let costExcludeTab = document.querySelector(".cost-exclude-tab");

document.addEventListener('DOMContentLoaded', function (){
  costIncludeTab.addEventListener("click", function () {
    document.querySelector(".cost-include-tab-content").style.display = "block";
    document.querySelector(".cost-exclude-tab-content").style.display = "none";
    costIncludeTab.classList.add('btn-success');
    costIncludeTab.classList.remove('btn-outline-success')
    costExcludeTab.classList.add('btn-outline-danger')
    costExcludeTab.classList.remove('btn-danger')
  });
  costExcludeTab.addEventListener("click", function () {
    document.querySelector(".cost-exclude-tab-content").style.display = "block";
    document.querySelector(".cost-include-tab-content").style.display = "none";
    costExcludeTab.classList.add('btn-danger')
    costExcludeTab.classList.remove('btn-outline-danger')
    costIncludeTab.classList.add('btn-outline-success')
    costIncludeTab.classList.remove('btn-success');
  });
  
})