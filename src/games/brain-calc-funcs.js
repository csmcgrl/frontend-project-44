import { getRandomInRange, questionAndAnswer } from '../index.js';

export const rules = 'What is the result of the expression?';

const calcExpression = (num1, num2, symbol) => {
  let result;
  switch (symbol) {
    case ' + ':
      result = num1 + num2;
      break;
    case ' - ':
      result = num1 - num2;
      break;
    case ' * ':
      result = num1 * num2;
      break;
    default:
      console.log('Некорректное выражение');
  }
  return result;
};

const getRandomArrayElement = arr =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateRound = () => {
  const symbol = getRandomArrayElement([' + ', ' - ', ' * ']);
  const random = getRandomInRange(1, 100);
  const random2 = getRandomInRange(1, 100);
  const correctAnswer = calcExpression(random, random2, symbol);
  const answer = questionAndAnswer(random + symbol + random2);
  return [String(correctAnswer), answer];
};
