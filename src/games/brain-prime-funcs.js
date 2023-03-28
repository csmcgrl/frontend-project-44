import { getRandomInRange, questionAndAnswer } from '../index.js';

const isPrime = num => {
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

export const rules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
export const generateRound = () => {
  const random = getRandomInRange(5, 100);
  const answer = questionAndAnswer(random);
  let correctAnswer;
  if (isPrime(random)) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return [correctAnswer, answer];
};
