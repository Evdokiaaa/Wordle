import Guess from "./Guess";
import range from "../utils/range";
import styled from "styled-components";
import checkGuess from "../utils/checkGuess";
const GameBoard = styled.div`
  margin: 100px auto;
`;
interface checkedGuessVal {
  char: string;
  status: string;
}
interface BoardProps {
  checkedGuess: checkedGuessVal[][];
}
export default function Board({ checkedGuess }: BoardProps) {
  return (
    <GameBoard>
      {range(6).map((num, i) => (
        <Guess key={i} checkedGuess={checkedGuess[num]} />
      ))}
    </GameBoard>
  );
}
