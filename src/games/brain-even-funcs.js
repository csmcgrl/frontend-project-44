import { getRandomInRange, questionAndAnswer } from '../index.js';

// prettier-ignore
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const random = getRandomInRange(1, 100);
  const answer = questionAndAnswer(random);
  let correctAnswer;
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return [correctAnswer, answer];
};
