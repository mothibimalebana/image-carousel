import '../css/style.css';
import img1 from '../img/watch1.png';
import img2 from '../img/watch2.png';
import img3 from '../img/watch3.png';

const imageCarousel = (function () {
  const rightButton = document.getElementById('right');
  const leftButton = document.getElementById('left');
  const watch1 = new Image();
  const watch2 = new Image();
  const watch3 = new Image();
  const display = document.getElementById('display');
  const color = document.querySelector('.itemColor');
  let currImage = 0;
  const getCurrImg = () => currImage;
  const increaseIndex = () => currImage++;
  const decreaseIndex = () => currImage--;
  const updateIndex = (newIndex) => (currImage = newIndex);
  watch1.src = img1;
  watch2.src = img2;
  watch3.src = img3;

  //array of images in our carousel
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
  //reads array index and displays the image and its color
  function displayCarousel(indexOfArray) {
    display.src = imgArray[indexOfArray].image.src;
    color.textContent = `${imgArray[indexOfArray].color}`;
  }
  rightButton.addEventListener('click', () => {
    increaseIndex();
    displayCarousel(getCurrImg());
  });
  leftButton.addEventListener('click', () => {
    decreaseIndex();
    displayCarousel(getCurrImg());
  });
  return {
    getCurrImg,
    displayCarousel,
    updateIndex,
    increaseIndex,
    decreaseIndex,
  };
})();

const stateOfCarousel = (function () {
  const dummyArray = ['img1', 'img2', 'img3'];
  let i = 0;
  while (i < dummyArray.length) {
    if (i == dummyArray.length - 1) {
      console.log(i);
      console.log('wait 5 seconds');
      i = 0;
    } else {
      console.log(i);
      console.log('wait 5 seconds');
      i++;
    }
  }
})();
