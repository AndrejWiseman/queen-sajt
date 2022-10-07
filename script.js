'use strict';

//===== navigacija =======================
let hamburger = document.querySelector('.hamburger');
let meni = document.querySelector('.list-items');
let link = document.querySelectorAll('.item');
let bar = document.querySelectorAll('.bar');
let bukDugme = document.querySelector('.book-dugme');

let hamRam = document.querySelector('.hamb-ram');
let bukRam = document.querySelector('.buk-ram');

function otvoriMeni() {
    meni.classList.toggle('pojavljivanje');
    hamburger.classList.toggle('ham-back');
    bar.forEach(item => item.classList.toggle('bar-back'))
    window.scrollTo(0, 0);
}

function zatvoriMeni() {
    meni.classList.toggle('pojavljivanje');
    hamburger.classList.toggle('ham-back');
    bar.forEach(item => item.classList.toggle('bar-back'))
}

link.forEach(item => item.addEventListener('click', zatvoriMeni))

hamburger.addEventListener('click', otvoriMeni);

hamburger.addEventListener('mouseenter', function(){
    hamRam.classList.add('hidden');
    hamburger.classList.add('ham-out')
})
hamburger.addEventListener('mouseleave', function(){
    hamRam.classList.remove('hidden');
    hamburger.classList.remove('ham-out')
})
bukDugme.addEventListener('mouseenter', function(){
    bukRam.classList.add('hidden');
    bukDugme.classList.add('ham-out')
})
bukDugme.addEventListener('mouseleave', function(){
    bukRam.classList.remove('hidden');
    bukDugme.classList.remove('ham-out');
})
//=========================================

//== loader ================
let body = document.querySelector('body');

body.onload = function() {myFunction()}

let myVar;
let quLogo;
function myFunction() {
    myVar = setTimeout(showPage, 500);
    quLogo = setTimeout(logoShow, 1100);
    headBg = setTimeout(hBg, 900);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function logoShow() {
    document.querySelector(".logo").style.opacity = "1";
}
function hBg() {
//    document.querySelector("header").style.backgroundSize = "cover";
    document.querySelector(".head-box").style.transform =  "scale(1)";
}

//============================
var rellax = new Rellax('.rellax', {
    center: true,
//    wrapper: 'header'
});
//============================




// pojavljivanje elemenata na scroll =============
const allText = document.querySelectorAll('.scroll-pojava');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('reveal')

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection, {
    root: null,
    threshold: 0.2
})

allText.forEach(function (text) {
    sectionObserver.observe(text);
    text.classList.add('reveal');
});
//==============================================






//======= Kartice za usluge ========================
//const cards = document.querySelectorAll('.usl-box1');
//
//
//cards.forEach(card => {
//    card.addEventListener('click', function() {
//    card.classList.toggle('is-flipped')
//    })
//})


////====================================================
////====================================================



//==== otvaranje modal kartice/galerija  ==============
function openModal() {
//  document.getElementById("myModal").style.display = "block";
      document.querySelector(".modal").style.display = "block";
}

function closeModal() {
  document.querySelector(".modal").style.display = "none";
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
//  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//==========================================
//==========================================


//===== accordion =========================
//var acc = document.getElementsByClassName("accordion");
//var i;
//
//for (i = 0; i < acc.length; i++) {
//  acc[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var panel = this.nextElementSibling;
//    if (panel.style.display === "block") {
//      panel.style.display = "none";
//    } else {
//      panel.style.display = "block";
//    }
//  });
//}

//===========================================
//===========================================









