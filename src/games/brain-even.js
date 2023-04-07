import { questionAndAnswer, runEngine } from '../index.js';

import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNum = getRandomInRange(1, 100);
  const userAnswer = questionAndAnswer(randomNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [correctAnswer, userAnswer];
};

export default () => runEngine(rules, generateRound);
