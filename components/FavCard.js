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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  align-items: center;
  margin-bottom: 5rem;
`;
