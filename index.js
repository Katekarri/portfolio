console.log(
    "Вёрстка валидная +10 \n" + "Вёрстка семантическая +20 \n" + "Вёрстка соответствует макету +48 \n" + "Требования к css + 8 \n" + "Интерактивность, реализуемая через css +15 \n" + "101/110 \n"
     
)

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const shadowBox = document.querySelector('.shadow-box');
function toggleMenu() {
  hamburger.classList.toggle('open');
  navList.classList.toggle('nav-list-visible');
  
  if (shadowBox.style.display === 'block') {
    shadowBox.style.display = 'none';
  } else {
    shadowBox.style.display = 'block';
  };
  
}
hamburger.addEventListener('click', toggleMenu);
