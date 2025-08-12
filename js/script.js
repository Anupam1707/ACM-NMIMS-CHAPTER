const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

const faders = document.querySelectorAll('.fade-up');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationPlayState = "running";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  let offset = window.scrollY * 0.4;
  heroContent.style.transform = `translateY(${offset}px)`;
});

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el) => revealOnScroll.observe(el));
