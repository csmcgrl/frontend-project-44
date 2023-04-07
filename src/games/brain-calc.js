import { runEngine } from '../index.js';

import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';

const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const generateRound = () => {
  const operator = getRandomOperator();
  const randomNum = getRandomInRange(1, 100);
  const randomNum2 = getRandomInRange(1, 100);
  const correctAnswer = String(calcExpression(randomNum, randomNum2, operator));
  const question = `${randomNum} ${operator} ${randomNum2}`;
  return [question, correctAnswer];
};

export default () => runEngine(rules, generateRound);
