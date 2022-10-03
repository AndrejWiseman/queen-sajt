//const dugmad = document.querySelector("[data-carousel-button]");
//
//dugmad.forEach(button => {
//    button.addEventListener('click', () => {
//        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//        
//        const slides = button
//                        .closest("[data-carousel]")
//                        .querySelector("[data-slides]")
//        
//        
//        const  activeSlide = slides.querySelector("[data-active]")
//        let newIndex = [...slides.children].indexOf(activeSlide) + offset
//        if (newIndex < 0) newIndex = slides.children.length - 1
//        if (newIndex >= slides.children.length) newIndex = 0
//        
//        slides.children[newIndex].dataset.active = true
//        delete activeSlide.dataset.active
//        
//    })
//})






//-------------------------------------------
//var i = 0;
//var images = [];
//var time = 3000;
//
//images[0] = 'img/sal7-1.png';
//images[1] = 'img/sal5-1.png';
//images[2] = 'img/sal6-1.png';
//
//
//function changeImg() {
//    document.slide.src = images[i];
//    
//    if(i < images.length - 1) {
//        i++;
//    } else {
//        i = 0;
//    }
//    
//    setTimeout("changeImg()", time);
//}
//
//window.onload = changeImg;




















