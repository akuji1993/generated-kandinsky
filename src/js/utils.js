const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
}

const getRandomPosition = (min, max) => {
  if (min !== undefined && max !== undefined) {
    return `${Math.floor(Math.random() * (max - min + 1)) + min}%`;
  } else {
    return `${Math.floor(Math.random() * (95 - 5 + 1)) + 5}%`;
  }
}

const getRandomSize = (minPercentage, maxPercentage) => {
  return Math.random() * (maxPercentage - minPercentage) + minPercentage;
}

export {
  getRandomNumber,
  getRandomFloat,
  getRandomPosition,
  getRandomSize
};
