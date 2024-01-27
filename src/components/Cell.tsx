import styled from "styled-components";

//correct - green, misplaced - yellow, incorrect - grey
interface CellProps {
  number: number;
  letter?: string;
  status?: string;
}
const CellBlock = styled.span`
  border: 2px solid #bfbfbf;
  width: 80px;
  height: 80px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
  &.correct {
    background: green;
  }
  &.incorrect {
    background: grey;
  }
  &.misplaced {
    background: yellow;
  }
`;
export default function Cell({ number, letter, status }: CellProps) {
  const className = status ? `cell ${status}` : "cell";
  return (
    <CellBlock key={number} className={className}>
      {letter}
    </CellBlock>
  );
}
