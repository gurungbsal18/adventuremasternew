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
let readMoreBtn = document.querySelector('.readmore-btn');

readMoreBtn.addEventListener('click', function(){
  if(exploreRegionContent.classList.contains('collapsed')){
    exploreRegionContent.classList.remove('collapsed')
    exploreRegionContent.classList.add('expand')
    readMoreBtn.innerText = "Read Less"
  } else {
    exploreRegionContent.classList.add('collapsed')
    exploreRegionContent.classList.remove('expand')
    readMoreBtn.innerText = "Read More"
  }
})