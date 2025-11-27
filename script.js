const hero = document.querySelector('.hero');
const yearSpan = document.getElementById('year');

const heroImages = [
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1453814235491-3cfac3999928?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80'
];

let slideIndex = 0;

function setHeroBackground() {
  if (!hero) return;
  hero.style.backgroundImage = `url(${heroImages[slideIndex]})`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % heroImages.length;
  setHeroBackground();
}

setHeroBackground();
setInterval(nextSlide, 6000);

yearSpan.textContent = new Date().getFullYear();
