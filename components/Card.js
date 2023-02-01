import Itemlist from "./Itemlist";
import styled from "styled-components";

export default function Card({
  sneakers,
  onClick,
  selectedIcon,
  handleSelectedIcon,
}) {
  return (
    <>
      <StyledCardContainer>
        <Itemlist
          sneakers={sneakers}
          onClick={onClick}
          selectedIcon={selectedIcon}
          handleSelectedIcon={handleSelectedIcon}
        />
      </StyledCardContainer>
    </>
  );
}

const StyledCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
  margin-bottom: 70px;
`;
