const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight;

for(element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

for(link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// ==== SWIPER ===============================================
const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

// ==== SCROLL REVEAL ======================================
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`,

    { interval:100 }
)