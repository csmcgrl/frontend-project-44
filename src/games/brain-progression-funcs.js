import { getRandomInRange, questionAndAnswer } from '../index.js';

const generateProgression = () => {
  const length = getRandomInRange(5, 10);
  const position = getRandomInRange(0, length - 1);
  const a1 = getRandomInRange(1, 10);
  const d = getRandomInRange(1, 5);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === position) {
      progression.push('..');
    } else {
      progression.push(a1 + d * i);
    }
  }
  return {
    progression: progression.join(' '),
    answer: a1 + d * position,
  };
};

export const rules = 'What number is missing in the progression?';
export const generateRound = () => {
  const currentProgression = generateProgression();
  const answer = questionAndAnswer(currentProgression.progression);
  return [String(currentProgression.answer), answer];
};
