import styled from "styled-components";
import Link from "next/link";
import FavoriteIcon from "./FavouriteIcon";

export default function Itemlist({
  sneakers,
  onClick,
  selectedIcon,
  setSelectedIcon,
}) {
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

            <Link href={`/../shoes/${sneaker.id}`}>
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
  } else if (filteredSneakers.length === 0) {
    return <p>no result</p>;
  } else {
    return (
      <>
        {filteredSneakers.map((sneaker) => (
          <StyledItemListContainer key={sneaker.id}>
            <StyledButton onClick={(event) => onClick(event, sneaker.id)}>
              <FavoriteIcon isFavorite={sneaker.isFavorite} />
            </StyledButton>

            <Link href={`/../shoes/${sneaker.id}`}>
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
