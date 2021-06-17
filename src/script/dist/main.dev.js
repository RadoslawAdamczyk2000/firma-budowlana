"use strict";

// const btnSold = document.getElementById('btn__sold');
// const btnDuring = document.getElementById('btn__during');
// const tabSold = document.getElementById('sold');
// const tabDuring = document.getElementById('during');
// tabSold.style.display="none";
// btnSold.addEventListener('click' , ()=> {
//     btnSold.classList.add('active');
//     tabSold.classList.add('fade_animation');
//     btnDuring.classList.remove('active');
//     tabDuring.style.display="none";
//     tabSold.style.display="grid";
// })
// btnDuring.addEventListener('click' , ()=> {
//     btnDuring.classList.add('active');
//     btnSold.classList.remove('active');
//     tabDuring.classList.add('fade_animation');
//     tabSold.style.display="none";
//     tabDuring.style.display="grid";
// })
var fullscreen = document.querySelector('.fullscreen');
var fullscreenClose = document.querySelector('.fullscreen__button');
fullscreen.style.left = "-100vw";
fullscreenClose.addEventListener('click', function () {
  fullscreen.style.left = "-100vw";
});
var galleryWrapper = document.querySelector('.gallery__wrapper');
var galleryItem = document.querySelectorAll('.gallery__item');
var galleryImage = document.querySelectorAll('.gallery__image');
galleryImage[2].style.backgroundColor = "#f00";
galleryWrapper.addEventListener('click', function (e) {
  console.log('dziala');
  galleryItem.style.background = "#f00";
});