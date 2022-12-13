import Itemlist from "./Itemlist";
import styled from "styled-components";

export default function Card() {
  return (
    <>
      <StyledCardContainer>
        <Itemlist />
      </StyledCardContainer>
    </>
  );
}

const StyledCardContainer = styled.section`
  border: 0px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
`;
