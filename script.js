const hero = document.querySelector('.hero');
const benefitCards = document.querySelectorAll('[data-animate]');

const heroImages = [
  'https://images.unsplash.com/photo-1502209524164-acea936639b7?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80'
];

let slideIndex = 0;

function setHeroBackground() {
  if (!hero) return;
  hero.style.setProperty('--hero-image', `url(${heroImages[slideIndex]})`);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % heroImages.length;
  setHeroBackground();
}

if (hero) {
  setHeroBackground();
  setInterval(nextSlide, 7000);
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

benefitCards.forEach(card => observer.observe(card));
