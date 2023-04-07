import runEngine from '../index.js';

import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const firstNum = getRandomInRange(1, 10);
  const progressionDiff = getRandomInRange(1, 5);
  const progressionLength = getRandomInRange(5, 10);
  const progression = generateProgression(firstNum, progressionDiff, progressionLength);
  const positionOfMissing = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = String(progression[positionOfMissing]);
  progression[positionOfMissing] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runEngine(rules, generateRound);
