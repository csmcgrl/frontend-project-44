import runEngine from '../index.js';

import getRandomInRange from '../utils.js';

const greatestDivisor = (num1, num2) => {
  let i = num1 > num2 ? num2 : num1;

  while (i > 0) {
    if (num1 % i === 0 && num2 % i === 0) {
      break;
    } else i -= 1;
  }
  return i;
};

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const randomNum = getRandomInRange(10, 100);
  const randomNum2 = getRandomInRange(10, 100);
  const correctAnswer = String(greatestDivisor(randomNum, randomNum2));
  const question = `${randomNum} ${randomNum2}`;
  return [question, correctAnswer];
};

export default () => runEngine(rules, generateRound);
