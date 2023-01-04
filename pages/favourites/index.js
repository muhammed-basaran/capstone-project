import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function FavouritesPage() {
  return (
    <>
      <Header />
      <StyledHead>My Favorites</StyledHead>
      <Footer />
    </>
  );
}

const StyledHead = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;
`;
