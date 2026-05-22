// script.js

/* MOUSE GLOW */

const glow = document.querySelector('.mouse-glow');

window.addEventListener('mousemove', (e) => {

    glow.style.left = `${e.clientX - 150}px`;

    glow.style.top = `${e.clientY - 150}px`;

});

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

document.querySelectorAll('section').forEach((section) => {

    section.classList.add('hidden');

    observer.observe(section);

});

/* FLOATING PARALLAX */

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    document.querySelector('.floating1').style.transform =
    `translateY(${scrollY * 0.2}px)`;

    document.querySelector('.floating2').style.transform =
    `translateY(${scrollY * -0.2}px)`;

});

/* CONTACT FORM */

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Message Sent Successfully 🚀');

    form.reset();

});