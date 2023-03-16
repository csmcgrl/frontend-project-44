import readlineSync from 'readline-sync';

let name;
let random;
let random2;

const getRandomArrayElement = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

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
  }
  return result;
};

const greatestDivisor = (n1, n2) => {
  let i = n1 > n2 ? n2 : n1;

  while (i > 0) {
    if (n1 % i === 0 && n2 % i === 0) {
      break;
    } else i -= 1;
  }
  return i;
};

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const position = Math.floor(Math.random() * length);
  const a1 = Math.floor(Math.random() * 10) + 1;
  const d = Math.floor(Math.random() * 5) + 1;

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

const isPrime = (num) => {
  if (num % 2 === 0) {
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

const makeWelcome = () => {
  console.log('Welcome to the Brain Games!');

  name = readlineSync.question('May I have your name? ');

  console.log('Hello,', name, '!');
};

const QuestionAndAnswer = (expression) => {
  console.log('Question:', expression);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const wrongAnswer = (answer, correctAnswer) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`
  );
};

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  let result = true;
  while (i < 3 && result) {
    random = Math.floor(Math.random() * 100) + 1;

    const answer = QuestionAndAnswer(random);
    if (random % 2 === 0 && answer !== 'yes') {
      wrongAnswer(answer, 'yes');
      result = false;
    } else if (random % 2 !== 0 && answer !== 'no') {
      wrongAnswer(answer, 'no');
      result = false;
    } else {
      console.log('Correct!');
      i += 1;
      result = true;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const brainCalc = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  let result = true;
  while (i < 3 && result) {
    random = Math.floor(Math.random() * 100) + 1;
    random2 = Math.floor(Math.random() * 100) + 1;
    const symbol = getRandomArrayElement([' + ', ' - ', ' * ']);
    const correctAnswer = calcExpression(random, random2, symbol);

    const answer = QuestionAndAnswer(random + symbol + random2);

    if (answer !== String(correctAnswer)) {
      wrongAnswer(answer, String(correctAnswer));

      result = false;
    } else {
      console.log('Correct!');
      i += 1;
      result = true;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  let result = true;
  while (i < 3 && result) {
    random = Math.floor(Math.random() * 100) + 1;
    random2 = Math.floor(Math.random() * 100) + 1;
    const twoNums = random + ' ' + random2;
    const answer = QuestionAndAnswer(twoNums);
    const correctAnswer = greatestDivisor(random, random2);
    if (answer !== String(correctAnswer)) {
      wrongAnswer(answer, String(correctAnswer));
      result = false;
    } else {
      console.log('Correct!');
      i += 1;
      result = true;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  let result = true;
  while (i < 3 && result) {
    const currentProgression = generateProgression();
    const answer = QuestionAndAnswer(currentProgression.progression);
    if (answer !== String(currentProgression.answer)) {
      wrongAnswer(answer, String(currentProgression.answer));
      result = false;
    } else {
      console.log('Correct!');
      i += 1;
      result = true;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  let result = true;
  while (i < 3 && result) {
    random = Math.floor(Math.random() * 100) + 1;
    const answer = QuestionAndAnswer(random);
    if (!isPrime(random) && answer !== 'no') {
      wrongAnswer(answer, 'no');
      result = false;
    } else if (isPrime(random) && answer !== 'yes') {
      wrongAnswer(answer, 'yes');
      result = false;
    } else {
      console.log('Correct!');
      i += 1;
      result = true;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const commonFunc = (gameName) => {
  makeWelcome();

  switch (gameName) {
    case 'brain-even':
      brainEven();
      break;
    case 'brain-calc':
      brainCalc();
      break;
    case 'brain-gcd':
      brainGCD();
      break;
    case 'brain-progression':
      brainProgression();
      break;
    case 'brain-prime':
      brainPrime();
      break;
    default:
      console.log('Игра не найдена');
  }
};

export { commonFunc, makeWelcome };
