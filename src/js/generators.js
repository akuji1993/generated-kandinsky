import {
  getRandomNumber,
  getRandomPosition,
  getRandomSize,
  getRandomFloat
} from './utils';

import {
  colorBlack,
  colorWhite,
  paletteTones,
  backgroundTones,
  redTones,
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
    triangle.style.left = getRandomPosition(30, 60);
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

export const generateChessSkyscraper = (picture) => {
  const skyscraper = document.createElement('div');
  skyscraper.style.left = getRandomPosition(20, 30);
  skyscraper.style.top = getRandomPosition(20, 50);
  skyscraper.style.width = getRandomPosition(10, 20);
  skyscraper.style.height = getRandomPosition(40, 60);
  skyscraper.style.transform = `rotateZ(${getRandomNumber(35, 55)}deg)`;
  skyscraper.setAttribute('class', 'skyscraper');

  let filledArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]

  const getRandomColor = () => {
    const randomNumber = getRandomNumber(0, 100);
    if (randomNumber < 30) {
      return colorWhite;
    } else if (randomNumber < 60) {
      return colorBlack;
    } else {
      return paletteTones[getRandomNumber(0, paletteTones.length - 1)];
    }
  }

  for (let x = 0; x <= 11; x++) {
    const skyRow = document.createElement('div');
    skyRow.setAttribute('class', 'row');
    if (x === 11) {
      skyRow.className += ' row__slim';
    }
    for (let y = 0; y <= 9; y++) {
      const skyCell = document.createElement('div');
      skyCell.setAttribute('class', 'cell');
      if (filledArray[x][y] === 1) {
        skyCell.className += ' cell__filled';
        if (x === 11) {
          skyCell.style.backgroundColor = colorBlack;
        } else {
          skyCell.style.backgroundColor = getRandomColor();
        }
      }
      skyRow.appendChild(skyCell);
    }
    skyscraper.appendChild(skyRow);
  }

  picture.appendChild(skyscraper);
}

export const generateLines = (picture) => {
  const times = getRandomNumber(6, 8);
  const lineContainer = document.createElement('div');
  lineContainer.setAttribute('class', 'line-container');

  // Do the lines going to a point
  for (let i = 0; i < times; i++) {
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    if (i < (times / 2)) {
      line.style.left = getRandomPosition(5, 35);
      line.style.top = getRandomPosition(10, 90);
      line.style.transform = `rotateZ(-${getRandomNumber(20, 40)}deg)`;
    } else {
      line.style.left = getRandomPosition(45, 75);
      line.style.top = getRandomPosition(10, 90);
      line.style.transform = `rotateZ(${getRandomNumber(20, 40)}deg)`;
    }

    line.style.width = getRandomPosition(10, 30);
    line.style.height = `${getRandomNumber(1, 5)}px`;

    lineContainer.appendChild(line);
  }

  // Do some straight lines
  for (let i = 0; i < (times / 3); i++) {
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    line.style.left = getRandomPosition(5, 35);
    line.style.top = getRandomPosition(10, 90);
    line.style.width = getRandomPosition(30, 70);
    line.style.height = '1px';
    lineContainer.appendChild(line);
  }

  picture.appendChild(lineContainer);
}

export const generateChessSquare = (picture) => {
  const chessSquare = document.createElement('div');
  chessSquare.setAttribute('class', 'chess-square');
  chessSquare.style.left = getRandomPosition(70, 90);
  chessSquare.style.top = getRandomPosition(10, 90);
  const size = `${getRandomNumber(64, 84)}px`;
  chessSquare.style.width = size;
  chessSquare.style.height = size;

  const getRandomColor = () => {
    const randomNumber = getRandomNumber(0, 100);
    if (randomNumber < 50) {
      return colorWhite;
    } else {
      return redTones[getRandomNumber(0, redTones.length - 1)];
    }
  }

  for (let i = 0; i < 4; i++) {
    const chessRow = document.createElement('div');
    chessRow.setAttribute('class', 'row');

    for (let j = 0; j < 4; j++) {
      const chessCell = document.createElement('div');
      chessCell.setAttribute('class', 'cell');
      if ((i === 1 || i === 2) && (j === 1 || j === 2)) {
        chessCell.style.backgroundColor = getRandomColor();
      } else {
        chessCell.style.backgroundColor = 'transparent';
      }
      chessRow.appendChild(chessCell);
    }

    chessSquare.appendChild(chessRow);
  }

  picture.appendChild(chessSquare);
}
