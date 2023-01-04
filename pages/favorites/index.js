import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import FavoriteIcon from "../../components/FavouriteIcon";
import Link from "next/link";

export default function FavouritesPage({ sneakers, onClick }) {
  const likedSneakers = sneakers.filter(
    (sneaker) => sneaker.isFavorite === true
  );

  return (
    <>
      <Header />
      <StyledHead>My Favorites</StyledHead>
      <StyledCardContainer>
        {likedSneakers.map((likedSneaker) => (
          <StyledItemListContainer key={likedSneaker.id}>
            <StyledButton onClick={(event) => onClick(event, likedSneaker.id)}>
              <FavoriteIcon isFavorite={likedSneaker.isFavorite} />
            </StyledButton>

            <Link href={`/../shoes/${likedSneaker.id}`}>
              <img
                src={likedSneaker.img}
                max-width="200px"
                max-height="200px"
              />
              <h2 className="itemName">{likedSneaker.name}</h2>
            </Link>
            <StyledDivContainer>
              <span className="releaseDate">{likedSneaker.release}</span>
              <span className="price">{likedSneaker.price} €</span>
            </StyledDivContainer>
          </StyledItemListContainer>
        ))}
      </StyledCardContainer>
      <Footer />
    </>
  );
}

const StyledHead = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;
`;

const StyledItemListContainer = styled.section`
  position: relative;
  border: 0px solid black;
  width: 70vw;
  height: auto;
  border-radius: 30px;
  margin-top: 10px;
  padding: 2px;
  box-shadow: 0 5px 12px;
  background-color: #dadada;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    padding-top: 10px;
    margin-top: 10px;
    width: 60%;
    height: auto;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: black;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  width: 3.2rem;
  position: absolute;
  right: 5px;
  padding: 0;
  border: none;
  background-color: #dadada;
  cursor: pointer;
`;

const StyledDivContainer = styled.div`
  padding: 15px;
  margin: auto;
  width: 90%;
  height: 20%;
  padding-bottom: 20px;
  background-color: #7fbcc1;
  width: 100%;
  box-shadow: 0 3px 10px;
  border-radius: 20px;

  .releaseDate {
    font-size: 16px;
    text-align: left;
    padding: 0;
    margin: 0;
  }

  .price {
    font-size: 16px;
    text-align: right;
    padding: 0;
    margin: 0;
    float: right;
  }
`;
const StyledCardContainer = styled.section`
  border: 0px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
`;
