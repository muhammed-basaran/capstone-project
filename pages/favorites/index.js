import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import FavCard from "../../components/FavCard";

export default function FavouritesPage({ sneakers, onClick }) {
  return (
    <>
      <StyledContainer>
        <Header />
        <StyledHead />
        <FavCard sneakers={sneakers} onClick={onClick} />
        <Footer />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  @media screen and (min-width: 500px) {
    width: 450px;
    height: 750px;
    margin: 40px auto;
  }
`;

const StyledHead = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;

  @media screen and (min-width: 500px) {
    margin-top: 60px;
  }
`;
