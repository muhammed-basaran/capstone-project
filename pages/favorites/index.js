import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import FavCard from "../../components/FavCard";

export default function FavouritesPage({ sneakers, onClick }) {
  return (
    <>
      <Header />
      <StyledHead />
      <FavCard sneakers={sneakers} onClick={onClick} />
      <Footer />
    </>
  );
}

const StyledHead = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;
`;
