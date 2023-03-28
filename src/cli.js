// import readlineSync from 'readline-sync';
// import { getRandomInRange } from '../src/index.js';

// let name;
// let random;
// let random2;
// prettier-ignore
// const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const calcExpression = (num1, num2, symbol) => {
//   let result;
//   switch (symbol) {
//     case ' + ':
//       result = num1 + num2;
//       break;
//     case ' - ':
//       result = num1 - num2;
//       break;
//     case ' * ':
//       result = num1 * num2;
//       break;
//     default:
//       console.log('Некорректное выражение');
//   }
//   return result;
// };

// const greatestDivisor = (n1, n2) => {
//   let i = n1 > n2 ? n2 : n1;

//   while (i > 0) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       break;
//     } else i -= 1;
//   }
//   return i;
// };

// const generateProgression = () => {
//   const length = getRandomInRange(5, 10);
//   const position = getRandomInRange(0, length - 1);
//   const a1 = getRandomInRange(1, 10);
//   const d = getRandomInRange(1, 5);

//   const progression = [];
//   for (let i = 0; i < length; i += 1) {
//     if (i === position) {
//       progression.push('..');
//     } else {
//       progression.push(a1 + d * i);
//     }
//   }
//   return {
//     progression: progression.join(' '),
//     answer: a1 + d * position,
//   };
// };
// prettier-ignore
// const isPrime = (num) => {
//   if (num % 2 === 0 || num === 1) {
//     return false;
//   }
//   const result = [];
//   for (let i = 3; i < num; i += 1) {
//     if (num % i === 0) {
//       result.push(i);
//     }
//     if (result.length > 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const makeWelcome = () => {
//   console.log('Welcome to the Brain Games!');

//   name = readlineSync.question('May I have your name? ');

//   console.log(`Hello, ${name}!`);
// };
// prettier-ignore
// const QuestionAndAnswer = (expression) => {
//   console.log('Question:', expression);
//   const answer = readlineSync.question('Your answer: ');
//   return answer;
// };
// prettier-ignore
// const wrongAnswer = (answer, correctAnswer) => {
//   console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
// };

// const brainEven = () => {
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   let i = 0;
//   let result = true;
//   while (i < 3 && result) {
//     random = getRandomInRange(1, 100);

//     const answer = QuestionAndAnswer(random);
//     if (random % 2 === 0 && answer !== 'yes') {
//       wrongAnswer(answer, 'yes');
//       result = false;
//     } else if (random % 2 !== 0 && answer !== 'no') {
//       wrongAnswer(answer, 'no');
//       result = false;
//     } else {
//       console.log('Correct!');
//       i += 1;
//       result = true;
//     }
//     if (i === 3) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };

// const brainCalc = () => {
//   console.log('What is the result of the expression?');
//   let i = 0;
//   let result = true;
//   while (i < 3 && result) {
//     random = getRandomInRange(1, 50);
//     random2 = getRandomInRange(1, 50);
//     const symbol = getRandomArrayElement([' + ', ' - ', ' * ']);
//     const correctAnswer = calcExpression(random, random2, symbol);

//     const answer = QuestionAndAnswer(random + symbol + random2);

//     if (answer !== String(correctAnswer)) {
//       wrongAnswer(answer, String(correctAnswer));

//       result = false;
//     } else {
//       console.log('Correct!');
//       i += 1;
//       result = true;
//     }
//     if (i === 3) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };

// const brainGCD = () => {
//   console.log('Find the greatest common divisor of given numbers.');
//   let i = 0;
//   let result = true;
//   while (i < 3 && result) {
//     random = getRandomInRange(1, 100);
//     random2 = getRandomInRange(1, 100);
//     const answer = QuestionAndAnswer(`${random} ${random2}`);
//     const correctAnswer = greatestDivisor(random, random2);
//     if (answer !== String(correctAnswer)) {
//       wrongAnswer(answer, String(correctAnswer));
//       result = false;
//     } else {
//       console.log('Correct!');
//       i += 1;
//       result = true;
//     }
//     if (i === 3) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };
// const brainProgression = () => {
//   console.log('What number is missing in the progression?');
//   let i = 0;
//   let result = true;
//   while (i < 3 && result) {
//     const currentProgression = generateProgression();
//     const answer = QuestionAndAnswer(currentProgression.progression);
//     if (answer !== String(currentProgression.answer)) {
//       wrongAnswer(answer, String(currentProgression.answer));
//       result = false;
//     } else {
//       console.log('Correct!');
//       i += 1;
//       result = true;
//     }
//     if (i === 3) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };
// const brainPrime = () => {
//   console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
//   let i = 0;
//   let result = true;
//   while (i < 3 && result) {
//     random = getRandomInRange(1, 100);
//     const answer = QuestionAndAnswer(random);
//     if (!isPrime(random) && answer !== 'no') {
//       wrongAnswer(answer, 'no');
//       result = false;
//     } else if (isPrime(random) && answer !== 'yes') {
//       wrongAnswer(answer, 'yes');
//       result = false;
//     } else {
//       console.log('Correct!');
//       i += 1;
//       result = true;
//     }
//     if (i === 3) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };
// prettier-ignore
// const commonFunc = (gameName) => {
//   makeWelcome();

//   switch (gameName) {
//     case 'brain-even':
//       brainEven();
//       break;
//     case 'brain-calc':
//       brainCalc();
//       break;
//     case 'brain-gcd':
//       brainGCD();
//       break;
//     case 'brain-progression':
//       brainProgression();
//       break;
//     case 'brain-prime':
//       brainPrime();
//       break;
//     default:
//       console.log('Игра не найдена');
//   }
// };

// export { commonFunc, makeWelcome };
