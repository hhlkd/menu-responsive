var menu = document.querySelector('.bx-menu');
var nav = document.querySelector('.navbar');
const slide = document.querySelectorAll('.slide');
let index = 0;
const totalSlide = slide.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

//create auto slide animation with set duration
function changeSlide(n) {
    index += n;
    if (index < 0) {
        index = totalSlide - 1;
    } else if (index > totalSlide) {
        index = 0;
    }
    updateSlide();
}

function updateSlide() {
    const translateValue = -index * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
}
prev.addEventListener('click', () => {
    changeSlide(-1);
});
next.addEventListener('click', () => {
    changeSlide(1);
});
setInterval(() => {
    changeSlide(1);
}, 3000);