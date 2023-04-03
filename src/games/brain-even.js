import { questionAndAnswer, runEngine } from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNum = getRandomInRange(1, 100);
  const userAnswer = questionAndAnswer(randomNum);
  let correctAnswer;
  if (randomNum % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return [correctAnswer, userAnswer];
};

export default () => runEngine(rules, generateRound);
