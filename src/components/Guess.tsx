import styled from "styled-components";
import range from "../utils/range";
import Cell from "./Cell";
import { MAX_NUMBER_OF_GUESSES } from "../utils/constants";
const GuessCell = styled.p`
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
`;
interface GuessProps {
  checkedGuess?: {
    char: string;
    status: string;
  }[];
}
export default function Guess({ checkedGuess }: GuessProps) {
  console.log("CHECKED GUESS - ", typeof checkedGuess);
  return (
    <GuessCell>
      {range(MAX_NUMBER_OF_GUESSES - 1).map((num, i) => (
        <Cell
          key={i}
          number={num}
          letter={checkedGuess?.[num].char}
          status={checkedGuess?.[num].status}
        />
      ))}
    </GuessCell>
  );
}
