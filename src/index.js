import readlineSync from 'readline-sync';

export const questionAndAnswer = (expression) => {
  console.log('Question:', expression);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const roundsCount = 3;

export const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
