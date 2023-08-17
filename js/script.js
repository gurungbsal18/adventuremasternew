// // scroll to the top
let scrollToTop = document.querySelector(".scroll-top");
document.addEventListener('DOMContentLoaded', () => {
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
let readMoreContent = document.querySelector('.readmore-content');
let readMoreBtn = document.querySelector('.readmore-btn');

readMoreBtn.addEventListener('click', () => {
  if(readMoreContent.classList.contains('collapsed')){
    readMoreContent.classList.remove('collapsed')
    readMoreContent.classList.add('expand')
    readMoreBtn.innerText = "Read Less"
  } else {
    readMoreContent.classList.add('collapsed')
    readMoreContent.classList.remove('expand')
    readMoreBtn.innerText = "Read More"
  }
})