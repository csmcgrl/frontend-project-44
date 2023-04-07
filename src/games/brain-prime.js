import { questionAndAnswer, runEngine } from '../index.js';

import getRandomInRange from '../utils.js';

const isPrime = (num) => {
  if (num % 2 === 0 || num === 1) {
    return false;
  }
  const result = [];
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
    if (result.length > 0) {
      return false;
    }
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const randomNum = getRandomInRange(5, 100);
  const userAnswer = questionAndAnswer(randomNum);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [correctAnswer, userAnswer];
};

export default () => runEngine(rules, generateRound);
