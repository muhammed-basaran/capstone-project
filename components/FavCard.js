import FavItemlist from "./FavItemList";
import styled from "styled-components";

export default function FavCard({ sneakers, onClick }) {
  return (
    <>
      <StyledCardContainer>
        <FavItemlist sneakers={sneakers} onClick={onClick} />
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
  margin-bottom: 90px;
`;
