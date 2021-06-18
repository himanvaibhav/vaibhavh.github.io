  //javascript for navigation bar effect on scroll
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });


  let i=0;
  function read(){
    if(!i){
      document.getElementById("moreText").style.
      display = "inline";
      document.getElementById("dots").style.
      display = "none";
      document.getElementById("read-more-btn").innerHTML="Read Less";
      i=1;
    }
    else{
      document.getElementById("moreText").style.
      display = "none";
      document.getElementById("dots").style.
      display = "inline";
      document.getElementById("read-more-btn").innerHTML="Read More";
      i=0;
    }
  }




// const slider = document.querySelector(".slider");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");
// const slides = document.querySelectorAll(".slide");
// const slideIcons = document.querySelectorAll(".slide-icon");
// const numberOfSlides = slides.length;
// var slideNumber = 0;

// //image slider next button
// nextBtn.addEventListener("click", () => {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   slideIcons.forEach((slideIcon) => {
//     slideIcon.classList.remove("active");
//   });

//   slideNumber++;

//   if(slideNumber > (numberOfSlides - 1)){
//     slideNumber = 0;
//   }

//   slides[slideNumber].classList.add("active");
//   slideIcons[slideNumber].classList.add("active");
// });

// //image slider previous button
// prevBtn.addEventListener("click", () => {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   slideIcons.forEach((slideIcon) => {
//     slideIcon.classList.remove("active");
//   });

//   slideNumber--;

//   if(slideNumber < 0){
//     slideNumber = numberOfSlides - 1;
//   }

//   slides[slideNumber].classList.add("active");
//   slideIcons[slideNumber].classList.add("active");
// });

// //image slider autoplay
// var playSlider;

// var repeater = () => {
//   playSlider = setInterval(function(){
//     slides.forEach((slide) => {
//       slide.classList.remove("active");
//     });
//     slideIcons.forEach((slideIcon) => {
//       slideIcon.classList.remove("active");
//     });

//     slideNumber++;

//     if(slideNumber > (numberOfSlides - 1)){
//       slideNumber = 0;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcons[slideNumber].classList.add("active");
//   }, 4000);
// }
// repeater();

// //stop the image slider autoplay on mouseover
// slider.addEventListener("mouseover", () => {
//   clearInterval(playSlider);
// });

// //start the image slider autoplay again on mouseout
// slider.addEventListener("mouseout", () => {
//   repeater();
// });







//   const menuBtn = document.querySelector(".menu-btn");
//     const navigation = document.querySelector(".navigation");

//     menuBtn.addEventListener("click", () => {
//       menuBtn.classList.toggle("active");
//       navigation.classList.toggle("active");
//     });

//     //Javacript for video slider navigation
//     const btns = document.querySelectorAll(".nav-btn");
//     const slides = document.querySelectorAll(".video-slide");
//     const contents = document.querySelectorAll(".content");

//     var sliderNav = function(manual){
//       btns.forEach((btn) => {
//         btn.classList.remove("active");
//       });

//       slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });

//       contents.forEach((content) => {
//         content.classList.remove("active");
//       });

//       btns[manual].classList.add("active");
//       slides[manual].classList.add("active");
//       contents[manual].classList.add("active");
//     }

//     btns.forEach((btn, i) => {
//       btn.addEventListener("click", () => {
//         sliderNav(i);
//       });
//     });



//     const TypeWriter = function(txtElement, word, wait = 3000) {
//       this.txtElement = txtElement;
//       this.word = word;
//       this.txt = '';
//       this.wordIndex = 0;
//       this.wait = parseInt(wait, 10);
//       this.type();
//       this.isDeleting = false;
//     }

//     // Type Method

//     //Init On DOM Load
//     document.addEventListener('DOMContentLoaded', init);

//     //Init App

//     function init() {
//       const txtElement = document.querySelector('.txt-type');
//       const words = JSON.parse(txtElement.getAttribute('data-word'));
//       const wait = txtElement.getAttribute('data-wait');
//     }