const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Avança para o próximo conjunto de 3 imagens
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Volta para o conjunto anterior de 3 imagens
  updateCarousel();
}

// Mudar automaticamente a cada 5 segundos
let carouselInterval = setInterval(nextSlide, 5000);

// Adicionar funcionalidade para pausar o carrossel ao passar o mouse
slides.addEventListener('mouseenter', () => clearInterval(carouselInterval));
slides.addEventListener('mouseleave', () => {
  carouselInterval = setInterval(nextSlide, 5000);
});

// Adicionar funcionalidade aos botões
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
