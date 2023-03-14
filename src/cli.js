import readlineSync from 'readline-sync';

const getRandomArrayElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const greatestDivisor = (n1, n2) => {
  let i;
  if (n1 > n2) {
    i = n2;
  } else i = n1;

  while (i > 0) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    } else i -= 1;
  }
};

const generateProgression = () => {
  let length = Math.floor(Math.random() * 6) + 5; // генерируем длину прогрессии от 5 до 10
  let position = Math.floor(Math.random() * length); // генерируем позицию пропущенного числа
  let a1 = Math.floor(Math.random() * 10) + 1; // генерируем первый член прогрессии от 1 до 10
  let d = Math.floor(Math.random() * 5) + 1; // генерируем разность прогрессии от 1 до 5

  let progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === position) {
      progression.push('..'); // добавляем пропущенное число вместо элемента на позиции position
    } else {
      progression.push(a1 + d * i);
    }
  }
  return {
    progression: progression.join(' '), // объединяем элементы прогрессии в строку
    answer: a1 + d * position, // вычисляем правильный ответ
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

  const name = readlineSync.question('May I have your name? ');

  console.log('Hello,', name + '!');
  return name;
};

const commonFunc = (gameName) => {
  const name = makeWelcome();

  let i = 0;
  let result = true;
  while (i < 3 && result) {
    const random = Math.floor(Math.random() * 100) + 1;
    const random2 = Math.floor(Math.random() * 100) + 1;
    const symbol = getRandomArrayElement([' + ', ' - ', ' * ']);
    const correctAnswer = eval(random + symbol + random2);

    if (gameName === 'brain-even') {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      console.log('Question:', random);
      const answer = readlineSync.question('Your answer: ');
      if (random % 2 === 0 && answer !== 'yes') {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`
        );
        result = false;
      } else if (random % 2 !== 0 && answer !== 'no') {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`
        );
        result = false;
      } else {
        console.log('Correct!');
        i += 1;
        result = true;
      }
    } else if (gameName === 'brain-calc') {
      console.log('What is the result of the expression?');
      console.log('Question: ' + random + symbol + random2);
      const answer = readlineSync.question('Your answer: ');
      if (answer !== String(correctAnswer)) {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`
        );
        result = false;
      } else {
        console.log('Correct!');
        i += 1;
        result = true;
      }
    } else if (gameName === 'brain-gcd') {
      console.log('Find the greatest common divisor of given numbers.');
      console.log('Question: ' + random + ' ' + random2);
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = greatestDivisor(random, random2);
      if (answer !== String(correctAnswer)) {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`
        );
        result = false;
      } else {
        console.log('Correct!');
        i += 1;
        result = true;
      }
    } else if (gameName === 'brain-progression') {
      let currentProgression = generateProgression();
      console.log('What number is missing in the progression?');
      console.log('Question: ' + currentProgression.progression);
      const answer = readlineSync.question('Your answer: ');
      if (answer !== String(currentProgression.answer)) {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${currentProgression.answer}'. \nLet's try again, ${name}!`
        );
        result = false;
      } else {
        console.log('Correct!');
        i += 1;
        result = true;
      }
    } else if (gameName === 'brain-prime') {
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".'
      );
      console.log('Question:', random);
      const answer = readlineSync.question('Your answer: ');
      if (!isPrime(random) && answer !== 'no') {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`
        );
        result = false;
      } else if (isPrime(random) && answer !== 'yes') {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`
        );
        result = false;
      } else {
        console.log('Correct!');
        i += 1;
        result = true;
      }
    }

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { commonFunc, makeWelcome };
