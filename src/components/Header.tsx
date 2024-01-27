import styled from "styled-components";

const HeaderBlock = styled.header`
  border-bottom: 1px solid grey;
  padding: 10px 0;
`;
const HeaderContainer = styled.div``;
const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 32px;
`;
export default function Header() {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderTitle>Word Game</HeaderTitle>
      </HeaderContainer>
    </HeaderBlock>
  );
}
