import React from "react";
import randomWord from "../utils/randomWord";
import words from "../utils/words";
import Board from "./Board";
import UserInput from "./UserInput";
import { MAX_NUMBER_OF_GUESSES } from "../utils/constants";
import checkGuess from "../utils/checkGuess";
type guessesT = {
  id: number;
  guess: string;
};
export default function Game() {
  const [wordToGuess, setWordToGuess] = React.useState(() => randomWord(words));
  const [gameStatus, setGameStatus] = React.useState(true); //Игра запущена
  const [guesses, setGuesses] = React.useState<guessesT[]>([]);
  const resetGame = React.useCallback(() => {
    const newWord = randomWord(words);
    setWordToGuess(newWord);
    setGameStatus(true);
    setGuesses([]);
  }, []);
  console.log({ wordToGuess });

  //Добавление слов в массив
  const handleAddUserWord = (userGuess: string) => {
    const guessInfo = {
      id: Math.random(),
      guess: userGuess,
    };

    if (userGuess === wordToGuess) {
      alert("You won the game!");
      setGameStatus(false);
    } else if (guesses.length >= MAX_NUMBER_OF_GUESSES - 1) {
      alert("You lost the game!");
      setGameStatus(false);
    }
    setGuesses([...guesses, guessInfo]);
  };

  const checkUserGuess = guesses.map((item) => {
    const checkedGuess = checkGuess(item.guess, wordToGuess);
    return checkedGuess;
  });
  return (
    <>
      <Board checkedGuess={checkUserGuess} />
      <UserInput
        handleAddUserWord={handleAddUserWord}
        gameStatus={gameStatus}
      />
    </>
  );
}
