import styled from "styled-components";

import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Game />
    </Wrapper>
  );
};

export default App;
