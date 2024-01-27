import React from "react";
import styled from "styled-components";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputFormLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InputFormInput = styled.input.attrs({
  minLength: 5,
  maxLength: 5,
  pattern: "[a-zA-Z]{5}",
})`
  width: 420px;
  padding: 8px 16px;
  border-radius: 7px;
  border: 2px solid #000;
  font-size: 24px;
  height: 60px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`;
interface UserInputProps {
  handleAddUserWord: (userGuess: string) => void;
  gameStatus: boolean;
}

export default function UserInput({
  handleAddUserWord,
  gameStatus,
}: UserInputProps) {
  const [userGuess, setUserGuess] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddUserWord(userGuess);
    setUserGuess("");
  };
  return (
    <InputForm onSubmit={handleSubmit}>
      <InputFormLabel>Enter your guess: {userGuess} </InputFormLabel>
      <InputFormInput
        disabled={!gameStatus}
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value.toUpperCase())}
      />
    </InputForm>
  );
}
