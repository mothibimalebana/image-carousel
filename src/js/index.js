import '../css/style.css';
import img1 from '../img/watch1.png';
import img2 from '../img/watch2.png';
import img3 from '../img/watch3.png';

const imageCarousel = (function () {
  const rightButton = document.getElementById('right');
  const leftButton = document.getElementById('left');
  const littleCircles = document.querySelectorAll('.littleCircles svg');
  const selectedCircle = document.getElementById('selectedCircle');
  const watch1 = new Image();
  const watch2 = new Image();
  const watch3 = new Image();
  const display = document.getElementById('display');
  const color = document.querySelector('.itemColor');
  let currImage = 0;
  const getCurrImg = () => currImage;
  const increaseIndex = () => {
    if (currImage == 2) {
      currImage = 0;
      return currImage;
    } else {
      return currImage++;
    }
  };
  const decreaseIndex = () => {
    if (currImage == 0) {
      currImage = 2;
      return currImage;
    } else {
      return currImage--;
    }
  };
  const updateIndex = (newIndex) => (currImage = newIndex);
  watch1.src = img1;
  watch2.src = img2;
  watch3.src = img3;

  //array of images in our carousel
  const imgArray = [
    {
      color: 'Rose Gold',
      littleCircle: 1,
      image: watch1,
    },
    {
      color: 'Grey',
      littleCircle: 2,
      image: watch2,
    },
    {
      color: 'Dark Blue',
      littleCircle: 3,
      image: watch3,
    },
  ];
  function currentCircle(indexOfArray) {
    littleCircles[indexOfArray].innerHTML = '';
    selectedCircle.style.display = 'block';
  }
  //reads array index and displays the image and its color
  function displayCarousel(indexOfArray) {
    display.src = imgArray[indexOfArray].image.src;
    color.textContent = `${imgArray[indexOfArray].color}`;
  }
  function timedDisplay() {
    setTimeout(() => {
      increaseIndex();
      displayCarousel(getCurrImg());
    }, 5000);
  }
  littleCircles.forEach((littleCircle, index) => {
    littleCircle.addEventListener('click', () => {
      displayCarousel(index);
    });
  });
  rightButton.addEventListener('click', () => {
    increaseIndex();
    displayCarousel(getCurrImg());
  });
  leftButton.addEventListener('click', () => {
    decreaseIndex();
    displayCarousel(getCurrImg());
  });
  console.log(littleCircles);
  return {
    getCurrImg,
    timedDisplay,
    displayCarousel,
    updateIndex,
    increaseIndex,
    decreaseIndex,
  };
})();

const stateOfCarousel = (function () {
  imageCarousel.displayCarousel(imageCarousel.getCurrImg());
})();
