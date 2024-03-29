import styled from "styled-components";
import Link from "next/link";
import FavoriteIcon from "./FavouriteIcon";

export default function Itemlist({ sneakers, onClick, selectedIcon }) {
  const filteredSneakers = sneakers.filter(
    (sneaker) => sneaker.producer.toLowerCase() === selectedIcon
  );
  if (selectedIcon === "all") {
    return (
      <>
        {sneakers.map((sneaker) => (
          <StyledItemListContainer key={sneaker.id}>
            <StyledButton onClick={(event) => onClick(event, sneaker.id)}>
              <FavoriteIcon isFavorite={sneaker.isFavorite} />
            </StyledButton>

            <Link href={`/../sneakers/${sneaker.id}`}>
              <img src={sneaker.img} />
              <h2 className="itemName">{sneaker.name}</h2>
            </Link>
            <StyledDivContainer>
              <span className="releaseDate">{sneaker.release}</span>
              <span className="price">{sneaker.price} €</span>
            </StyledDivContainer>
          </StyledItemListContainer>
        ))}
      </>
    );
  } else if (filteredSneakers.length === 0) {
    return <p>no results</p>;
  } else {
    return (
      <>
        {filteredSneakers.map((sneaker) => (
          <StyledItemListContainer key={sneaker.id}>
            <StyledButton onClick={(event) => onClick(event, sneaker.id)}>
              <FavoriteIcon isFavorite={sneaker.isFavorite} />
            </StyledButton>

            <Link href={`/../sneakers/${sneaker.id}`}>
              <img src={sneaker.img} max-width="200px" max-height="200px" />
              <h2 className="itemName">{sneaker.name}</h2>
            </Link>
            <StyledDivContainer>
              <span className="releaseDate">{sneaker.release}</span>
              <span className="price">{sneaker.price} €</span>
            </StyledDivContainer>
          </StyledItemListContainer>
        ))}
      </>
    );
  }
}

const StyledItemListContainer = styled.section`
  position: relative;
  width: 80vw;
  height: auto;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 3px;
  box-shadow: 0 5px 12px;
  background-color: #eee9e9;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    margin-top: 10px;
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: black;
    text-decoration: none;
    padding: 0 10px 0 10px;
  }
  a {
    text-decoration: none;
  }

  @media screen and (min-width: 500px) {
    width: 75%;
  }
`;

const StyledButton = styled.button`
  width: 3.2rem;
  position: absolute;
  right: 0px;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const StyledDivContainer = styled.div`
  padding: 20px;
  margin: auto;
  width: 90%;
  height: 10%;
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
    font-weight: bold;
  }
`;
