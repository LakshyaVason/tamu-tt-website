const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const cardWidth = document.querySelector('.card').offsetWidth;
const cardsPerPage = 3;
const cardMargin = 10;

nextBtn.addEventListener('click', () => {
  if (counter < (carousel.children.length / cardsPerPage) - 1) {
    counter++;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }
});