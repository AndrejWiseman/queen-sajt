//======= Kartice za usluge ========================
const cards = document.querySelectorAll('.usl-box1');


cards.forEach(card => {
    card.addEventListener('click', function() {
    card.classList.toggle('is-flipped')
    })
})


//====================================================
//====================================================