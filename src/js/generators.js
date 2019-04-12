import {
  getRandomNumber,
  getRandomPosition,
  getRandomSize,
  getRandomFloat
} from './utils';

import {
  colorBlack,
  mainColors,
  redTones,
  blueTones,
  greenTones,
  yellowTones,
  backgroundTones,
  allColors
} from './colors';

export const generateBackground = (picture) => {
  const elBackground = document.createElement('div');
  elBackground.setAttribute('class', 'background');
  elBackground.style.backgroundColor = backgroundTones[getRandomNumber(0, backgroundTones.length - 1)];
  picture.append(elBackground);
}

export const generateCircles = (picture) => {
  const times = getRandomNumber(15, 20);

  for (let i = 0; i < times; i++) {
    const elCircle = document.createElement('div');
    elCircle.setAttribute('class', 'circle');
    elCircle.style.left = getRandomPosition();
    elCircle.style.top = getRandomPosition();

    const distributionControl = getRandomNumber(0, 100);
    let circleSize;
    if (distributionControl < 60) {
      circleSize = picture.clientWidth * getRandomSize(0.015, 0.03);
    } else if (distributionControl < 95) {
      circleSize = picture.clientWidth * getRandomSize(0.03, 0.10);
    } else {
      circleSize = picture.clientWidth * getRandomSize(0.10, 0.2);
    }
    const circleSizePx = `${Math.floor(circleSize)}px`;

    const randomColor = allColors[getRandomNumber(0, allColors.length - 1)];

    const hasBorder = getRandomNumber(0, 100) > 50;
    if (hasBorder) {
      const elCircleBackground = document.createElement('div');
      const randomExtraWidth = getRandomNumber(10, 30);
      elCircleBackground.style.borderRadius = '50%';
      elCircleBackground.style.width = `${circleSize + randomExtraWidth}px`;
      elCircleBackground.style.height = `${circleSize + randomExtraWidth}px`;
      elCircleBackground.style.minWidth = `${circleSize + randomExtraWidth}px`;
      elCircleBackground.style.minHeight = `${circleSize + randomExtraWidth}px`;
      elCircleBackground.setAttribute('class', 'backgroundCircle');
      elCircleBackground.style.backgroundColor = `${randomColor}`;
      elCircleBackground.style.opacity = 0.5;
      elCircle.append(elCircleBackground);
    }

    elCircle.style.width = circleSizePx;
    elCircle.style.height = circleSizePx;
    elCircle.style.borderRadius = '50%';
    elCircle.style.backgroundColor = randomColor;

    picture.appendChild(elCircle);
  }
}

export const generateSquares = (picture) => {
  const times = getRandomNumber(1, 7);

  for (let i = 0; i < times; i++) {
    const elSquare = document.createElement('div');
    elSquare.setAttribute('class', 'square');
    elSquare.style.left = getRandomPosition();
    elSquare.style.top = getRandomPosition();

    const distributionControl = getRandomNumber(0, 100);
    let circleSize;
    if (distributionControl < 70) {
      circleSize = picture.clientWidth * getRandomSize(0.015, 0.03);
    } else {
      circleSize = picture.clientWidth * getRandomSize(0.03, 0.05);
    }
    const circleSizePx = `${circleSize}px`;

    elSquare.style.width = circleSizePx;
    elSquare.style.height = circleSizePx;
    elSquare.style.backgroundColor = allColors[getRandomNumber(0, allColors.length - 1)];
    elSquare.style.opacity = getRandomFloat(0.3, 1);

    picture.appendChild(elSquare);
  }
}

export const generateTriangles = (picture) => {
  const times = getRandomNumber(1, 2);

  for (let i = 0; i < times; i++) {
    const triangle = document.createElement('div');
    triangle.setAttribute('class', 'triangle');
    triangle.style.left = getRandomPosition(5, 60);
    triangle.style.top = getRandomPosition(0, 30);

    const lineWidth = getRandomFloat(0.3, 0.8) * picture.clientHeight;
    const lineHeight = '2px';
    const degree = getRandomNumber(40, 110);

    const firstLine = document.createElement('div');
    firstLine.setAttribute('class', 'line');
    firstLine.style.width = lineWidth;
    firstLine.style.height = lineHeight;
    firstLine.style.transform = `rotateZ(${90 + (degree / 2)}deg) translate(${lineWidth / 2}px)`;

    const secondLine = document.createElement('div');
    secondLine.setAttribute('class', 'line');
    secondLine.style.height = lineHeight;
    secondLine.style.width = lineWidth;
    secondLine.style.transform = `rotateZ(${90 - (degree / 2)}deg) translate(${lineWidth / 2}px)`;

    triangle.appendChild(firstLine);
    triangle.appendChild(secondLine);
    picture.appendChild(triangle);
  }
}
