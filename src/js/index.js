import '../css/style.css';
import img1 from '../img/watch1.png';
import img2 from '../img/watch2.png';
import img3 from '../img/watch1.png';

const imageCarousel = (function () {
  const watch1 = new Image();
  const watch2 = new Image();
  const watch3 = new Image();
  const display = document.getElementById('display');
  const color = document.querySelector('.itemColor');
  let currImage = 0;
  function updateCarousel(indexOfImage) {
    display.src = imgArray[indexOfImage].image.src;
    color.textContent = `${imgArray[indexOfImage]}`;
  }

  watch1.src = img1;
  watch2.src = img2;
  watch3.src = img3;

  const imgArray = [
    {
      color: 'Rose Gold',
      image: watch1,
    },
    {
      color: 'Grey',
      image: watch2,
    },
    {
      color: 'Dark Blue',
      image: watch3,
    },
  ];
})();
