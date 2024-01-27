export default function checkGuess(guess: string, answer: string) {
  const result = [];
  const SOLVED_CHAR = "SOLVED";
  const guessChars = guess.split(""); //Циферки юзера
  const answerChars = answer.split("");

  //Если находится на том же месте, то этот символ решен
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        char: guessChars[i],
        status: "correct",
      };
      guessChars[i] = SOLVED_CHAR;
      answerChars[i] = SOLVED_CHAR;
    }
  }
  //Ищем символы, которые стоят не на тех местах
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }
    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }
    result[i] = {
      char: guessChars[i],
      status,
    };
  }
  return result;
}
