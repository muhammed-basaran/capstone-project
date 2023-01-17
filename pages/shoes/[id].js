import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import FavoriteIcon from "../../components/FavouriteIcon";
import ImageSlider from "../../components/ImageSlider";
import { useState } from "react";
import Header from "../../components/Header";

export default function Overview({ sneakers, onClick }) {
  const router = useRouter();

  const { id } = router.query;

  const currentShoe = sneakers.find((sneaker) => sneaker.id === id);

  if (!currentShoe) {
    return <p>Page not Found</p>;
  }

  const {
    pictures,
    name,
    price,
    release,
    title,
    description1,
    description2,
    isFavorite,
  } = currentShoe;

  const [counter, setCounter] = useState(100);

  function handleCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledOverviewContainer>
          <StyledButton onClick={(event) => onClick(event, id)}>
            <FavoriteIcon className="fav" isFavorite={isFavorite} />
            {isFavorite ? <p>{counter + 1}</p> : <p>{counter}</p>}
          </StyledButton>
          <ImageSlider pictures={pictures} id={id} />
          <h2 className="itemName">{name}</h2>
          <StyledDivContainer>
            <span className="releaseDate">{release}</span>
            <span className="price">{price} €</span>
          </StyledDivContainer>
          <StyledInfoContainer>
            <h3>{title}</h3>
            <p>{description1}</p>
            <p>{description2}</p>
          </StyledInfoContainer>
          <StyledButtonContainer>
            <Link href="/">
              <button className="back-button">BACK</button>
            </Link>
            <Link href={`/shoes/buy/${id}`}>
              <button className="buy-button" sneakers={sneakers}>
                FORWARD
              </button>
            </Link>
          </StyledButtonContainer>
        </StyledOverviewContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
  overflow: scroll;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  width: 2rem;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 0;
  border: none;
  background-color: transparent;

  p {
    position: absolute;
    top: 20px;
    right: 5px;
  }
`;

const StyledOverviewContainer = styled.section`
  position: relative;
  width: 80vw;
  height: 80vh;
  border-radius: 40px;
  margin-top: 10px;
  padding: 2px;
  overflow: scroll;
  background-color: #dadada;
  box-shadow: 0 5px 15px;
  margin-bottom: 20px;

  .fav {
    width: 2rem;
    position: absolute;
    right: 18px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    margin-top: 5px;
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
`;

const StyledDivContainer = styled.div`
  padding: 20px;
  margin: auto;
  height: 10%;
  background-color: #7fbcc1;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 3px 10px;
  margin-bottom: 20px;

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

const StyledInfoContainer = styled.section`
  margin: 5px;
  padding: 2px;
  border-top: 1px solid black;

  h3 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: black;
  }

  p {
    font-size: 14px;
    padding: 5px;
    margin: 10px;
  }
`;

const StyledButtonContainer = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;

  .back-button {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: #7fbcc1;
    border-radius: 20px;
    font-size: 15px;
  }

  .buy-button {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    background-color: #7fbcc1;
    border-radius: 20px;
    font-size: 15px;
  }
`;
