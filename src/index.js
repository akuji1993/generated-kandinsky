import './index.scss';

import {
  generateCircles, generateBackground, generateTriangles, generateSquares
} from './js/generators';

window.onload = () => {
  main();
}

// main
let picture;
const main = () => {
  picture = document.getElementById('kandinsky-main');
  generateBackground(picture);
  generateCircles(picture);
  generateSquares(picture);
  generateTriangles(picture);
}

