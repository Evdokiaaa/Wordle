import styled from "styled-components";
import "./App.css";
import { Container } from "./components/Container";
import Header from "./components/Header";

import Board from "./components/Board";
import UserInput from "./components/UserInput";
import Game from "./components/Game";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Game />
      {/* <Board />
      <UserInput /> */}
    </Wrapper>
  );
};

export default App;
