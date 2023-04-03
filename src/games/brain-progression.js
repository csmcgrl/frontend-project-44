import { questionAndAnswer, runEngine } from '../index.js';

import getRandomInRange from '../utils.js';

const generateProgression = () => {
  const progressionLength = getRandomInRange(5, 10);
  const positionOfMissing = getRandomInRange(0, progressionLength - 1);
  const firstNum = getRandomInRange(1, 10);
  const progressionDiff = getRandomInRange(1, 5);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === positionOfMissing) {
      progression.push('..');
    } else {
      progression.push(firstNum + progressionDiff * i);
    }
  }
  return {
    progression: progression.join(' '),
    answer: firstNum + progressionDiff * positionOfMissing,
  };
};

const rules = 'What number is missing in the progression?';
const generateRound = () => {
  const currentProgression = generateProgression();
  const userAnswer = questionAndAnswer(currentProgression.progression);
  const strCorrectAnswer = String(currentProgression.answer);
  return [strCorrectAnswer, userAnswer];
};

export default () => runEngine(rules, generateRound);
