// Carrossel automático
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Avança para a próxima imagem
  updateCarousel();
}

// Mudar automaticamente a cada 5 segundos
let carouselInterval = setInterval(nextSlide, 5000);

// Adicionar funcionalidade para pausar o carrossel ao passar o mouse
slides.addEventListener('mouseenter', () => clearInterval(carouselInterval));
slides.addEventListener('mouseleave', () => {
  carouselInterval = setInterval(nextSlide, 5000);
});

// Contagem regressiva
const startDate = new Date('2023-11-26T00:00:00'); // Data do início do namoro
function updateCountdown() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  document.getElementById('years').textContent = years.toString().padStart(2, '0');
  document.getElementById('months').textContent = months.toString().padStart(2, '0');
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
