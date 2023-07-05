//關於我對話框
let show = document.querySelector(".home-dialog-show");
let info = document.querySelector(".home-dialog-info");
let close = document.querySelector(".home-dialog-close");

show.addEventListener("click", function(){
  info.showModal();
})
  close.addEventListener("click", function(){
  info.close();
})

//圖片切換
let photoDirection = document.getElementById("photochange");

photoDirection.onmouseover = function(){
  this.src = "assets/img/livephoto.jpg";
}
photoDirection.onmouseleave = function(){
  this.src = "assets/img/dennis.png";
}

//header變換
document.addEventListener("scroll", () =>{
  let header = document.querySelector("header");
  header.classList.toggle("headerchange", window.scrollY > 0);
})

//文字出現
$( ".skill-btn" ).on( "click", function() {
  $( ".showtext" ).slideToggle( "slow" );
});
$( ".skill-btn2" ).on( "click", function() {
  $( ".showtext2" ).slideToggle( "slow" );
});
$( ".skill-btn3" ).on( "click", function() {
  $( ".showtext3" ).slideToggle( "slow" );
});
$( ".skill-btn4" ).on( "click", function() {
  $( ".showtext4" ).slideToggle( "slow" );
});
$( ".skill-btn5" ).on( "click", function() {
  $( ".showtext5" ).slideToggle( "slow" );
});
$( ".skill-btn6" ).on( "click", function() {
  $( ".showtext6" ).slideToggle( "slow" );
});
$( ".skill-btn7" ).on( "click", function() {
  $( ".showtext7" ).slideToggle( "slow" );
});
$( ".skill-btn8" ).on( "click", function() {
  $( ".showtext8" ).slideToggle( "slow" );
});
$( ".skill-btn9" ).on( "click", function() {
  $( ".showtext9" ).slideToggle( "slow" );
});

//hamburger
let menuBtn = document.querySelector(".nav-menu-btn");
let closeBtn = document.querySelector(".nav-close-btn");
let nav = document.querySelector(".nav-container");
let navclose = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
  nav.classList.add("active");
});
closeBtn.addEventListener("click", () =>{
  nav.classList.remove("active");
});
navclose.forEach((navclose) =>{
  navclose.addEventListener("click", () =>{
    nav.classList.remove("active");
  });
});

//ScrollReveal
ScrollReveal({ 
  duration:2500,
  distance:'50px',
  delay:120
});

ScrollReveal().reveal('.home .info h2, .skills-title-p, .projects-title-p', { delay:400, origin:'left'});
ScrollReveal().reveal('.home .info h1, .home .info p, .skills-title-h2, .projects-title-h2', { delay:600, origin:'left'});
ScrollReveal().reveal('.home-social-icon', { delay:400, origin:'bottom', interval:200});
ScrollReveal().reveal('.home-social-items', { delay:400, origin:'bottom', interval:200});
ScrollReveal().reveal('.home-dialog-show', { delay:400, origin:'bottom', interval:200});
ScrollReveal().reveal('.home-img', { delay:600, origin:'bottom', interval:200});
ScrollReveal().reveal('.skills-container-items, .skills-bar', { delay:600, origin:'bottom'});
ScrollReveal().reveal('.projects-container-items', { delay:600, origin:'bottom'});





