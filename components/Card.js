import Itemlist from "./Itemlist";
import styled from "styled-components";

export default function Card({
  sneakers,
  onClick,
  selectedIcon,
  setSelectedIcon,
}) {
  return (
    <>
      <StyledCardContainer>
        <Itemlist
          sneakers={sneakers}
          onClick={onClick}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
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
  margin-bottom: 70px;
`;
