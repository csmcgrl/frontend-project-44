import { getRandomInRange, questionAndAnswer } from '../index.js';

const greatestDivisor = (n1, n2) => {
  let i = n1 > n2 ? n2 : n1;

  while (i > 0) {
    if (n1 % i === 0 && n2 % i === 0) {
      break;
    } else i -= 1;
  }
  return i;
};

export const rules = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const random = getRandomInRange(10, 100);
  const random2 = getRandomInRange(10, 100);
  const correctAnswer = greatestDivisor(random, random2);
  const answer = questionAndAnswer(`${random} ${random2}`);
  return [String(correctAnswer), answer];
};
