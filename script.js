const IMAGE_COUNT = 10,
  imagesArray = [],
  switchCircles = [];

let currentImage = 0;

const createElement = (parentName, tagName, className) => {
  const elem = document.createElement(tagName);

  elem.className = className || '';

  parentName.append(elem);

  return elem;
};

const containerElement = createElement(document.body, 'div', 'container'),
  imagesContainter = createElement(
    containerElement,
    'div',
    'images-containter'
  ),
  switchContainer = createElement(containerElement, 'div', 'switch-container'),
  leftSwitcher = createElement(imagesContainter, 'div', 'arrow-switcher'),
  rightSwitcher = createElement(imagesContainter, 'div', 'arrow-switcher');

function showSwitcher() {
  rightSwitcher.hidden = true;
  leftSwitcher.hidden = true;

  if (currentImage < IMAGE_COUNT - 1) {
    rightSwitcher.hidden = false;
  }

  if (currentImage > 0) {
    leftSwitcher.hidden = false;
  }
}

for (let i = 0; i < IMAGE_COUNT; i++) {
  imagesArray[i] = createElement(imagesContainter, 'img', 'image');
  imagesArray[i].classList.add(`image${i}`);
  imagesArray[i].style.opacity = '0';
  imagesArray[
    i
  ].src = `./assets/${i}.jpg`;

  switchCircles[i] = createElement(switchContainer, 'div', 'switcher');
  switchCircles[i].addEventListener('click', (e) => {
    imagesArray[currentImage].style.opacity = '0';
    switchCircles[currentImage].classList.remove(`selected`);

    currentImage = i;

    switchCircles[i].classList.add(`selected`);
    imagesArray[i].style.opacity = '1';

    showSwitcher();
  });
}

leftSwitcher.textContent = '❰';
leftSwitcher.hidden = true;

leftSwitcher.addEventListener('click', (event) => {
  if (currentImage > 0) {
    imagesArray[currentImage].style.opacity = '0';
    switchCircles[currentImage].classList.remove(`selected`);

    --currentImage;

    switchCircles[currentImage].classList.add(`selected`);
    imagesArray[currentImage].style.opacity = '1';
    showSwitcher();
  }
});

rightSwitcher.textContent = '❱';

rightSwitcher.classList.add('right-switcher');

rightSwitcher.addEventListener('click', (event) => {
  if (currentImage < IMAGE_COUNT - 1) {
    imagesArray[currentImage].style.opacity = '0';
    switchCircles[currentImage].classList.remove(`selected`);

    ++currentImage;

    switchCircles[currentImage].classList.add(`selected`);
    imagesArray[currentImage].style.opacity = '1';
    showSwitcher();
  }
});

imagesArray[0].style.opacity = '1';
switchCircles[0].classList.add(`selected`);
