import Itemlist from "./Itemlist";
import styled from "styled-components";

export default function Card() {
  return (
    <>
      <StyledCard>
        <Itemlist />
      </StyledCard>
    </>
  );
}

const StyledCard = styled.section`
  border: 0px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
`;
