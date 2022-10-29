const IMAGE_COUNT = 10;
const imagesArray = [];
const switchCircles = [];
const SELECTED_CLASS = 'selected';

let currentImage = 0;

const createElement = (parentName, tagName, className) => {
  const elem = document.createElement(tagName);

  elem.className = className || '';

  parentName.append(elem);

  return elem;
};

const containerElement = createElement(document.body, 'div', 'container');
const imagesContainter = createElement(containerElement, 'div', 'images-containter');
const switchContainer = createElement(containerElement, 'div', 'switch-container');
const leftSwitcher = createElement(imagesContainter, 'div', 'arrow-switcher');
const rightSwitcher = createElement(imagesContainter, 'div', 'arrow-switcher');

const slideImages = (currentImageNewValue) => {
  imagesArray[currentImage].style.opacity = '0';
  switchCircles[currentImage].classList.remove(SELECTED_CLASS);

  currentImage = currentImageNewValue;

  switchCircles[currentImage].classList.add(SELECTED_CLASS);
  imagesArray[currentImage].style.opacity = '1';

  rightSwitcher.hidden = currentImage === IMAGE_COUNT - 1;
  leftSwitcher.hidden = !currentImage;
}

for (let i = 0; i < IMAGE_COUNT; i++) {
  imagesArray[i] = createElement(imagesContainter, 'img', 'image');
  imagesArray[i].style.opacity = '0';
  imagesArray[i].src = `./assets/${i}.jpg`;

  switchCircles[i] = createElement(switchContainer, 'div', 'switcher');
  switchCircles[i].addEventListener('click', (e) => {
    slideImages(i);
  });
}

[leftSwitcher.textContent, rightSwitcher.textContent] = ['❰', '❱'];
leftSwitcher.hidden = true;
rightSwitcher.classList.add('right-switcher');

leftSwitcher.addEventListener('click', (event) => {
  if (currentImage > 0) {
    slideImages(currentImage - 1);
  }
});

rightSwitcher.addEventListener('click', (event) => {
  if (currentImage < IMAGE_COUNT - 1) {
    slideImages(currentImage + 1);
  }
});

imagesArray[0].style.opacity = '1';
switchCircles[0].classList.add(SELECTED_CLASS);
