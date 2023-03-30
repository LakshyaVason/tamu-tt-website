const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const cardWidth = document.querySelector('.card').offsetWidth;
const cardsPerPage = 3;
const cardMargin = 10;

nextBtn.addEventListener('click', () => {
  if (counter >= carousel.children.length - cardsPerPage) {
    carousel.style.transition = "none";
    counter = 3;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }
  setTimeout(() => {
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }, 0);
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    carousel.style.transition = "none";
    counter = carousel.children.length - cardsPerPage;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }
  setTimeout(() => {
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = `translateX(${-1 * (cardWidth * cardsPerPage + cardMargin * (cardsPerPage - 1)) * counter}px)`;
  }, 0);
});