const scrollTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 100){
    scrollTop.classList.add("active");
  }else{
    scrollTop.classList.remove("active");
  }
});
//------navbar scroll--//
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("header-scrolled");
  }else{
    nav.classList.remove("header-scrolled");
  }
}
//------preloder-------//
$(document).ready(function(){
    $(window).on('load', function(){
        $('#preloder').delay(4550).fadeOut('slow');
        $('body').delay(3850).css({'overflow':'visible'});
    });
});
/*----------counter------*/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
// nav nide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});
