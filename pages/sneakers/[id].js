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
      <StyledContainer>
        <Header />
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
            <Link href="/sneakers">
              <button className="back-button">BACK</button>
            </Link>
            <Link href={`/sneakers/buy/${id}`}>
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
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  overflow: scroll;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;

  @media screen and (min-width: 500px) {
    width: 450px;
    height: 750px;
    margin: 40px auto;
    overflow: hidden;
  }
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
  width: 90vw;
  height: auto;
  border-radius: 20px;
  margin-top: 10px;
  padding: 2px;
  background-color: #eee9e9;
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
    padding: 5px;
  }

  @media screen and (min-width: 500px) {
    width: 80%;
    height: 750px;
    margin-top: 100px;
    margin-bottom: 20px;
    overflow: scroll;

    h2 {
      font-size: 16px;
    }
  }
`;

const StyledDivContainer = styled.div`
  padding: 20px;
  margin: auto;
  height: 10%;
  background: linear-gradient(
    240deg,
    rgba(216, 216, 219, 1) 0%,
    rgba(163, 213, 217, 1) 20%,
    rgba(127, 188, 193, 1) 80%,
    rgba(216, 216, 216, 1) 100%
  );
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
  @media screen and (min-width: 500px) {
    padding: 15px;
    margin-bottom: 20px;
    height: 8%;
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
    padding: 5px;
  }

  p {
    font-size: 14px;
    padding: 5px;
    margin: 10px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    margin-bottom: 20px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const StyledButtonContainer = styled.section`
  margin: 0 0 20px 0;
  padding: 0px;
  display: flex;
  justify-content: center;

  .back-button {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: linear-gradient(
      240deg,
      rgba(216, 216, 219, 1) 0%,
      rgba(163, 213, 217, 1) 20%,
      rgba(127, 188, 193, 1) 80%,
      rgba(216, 216, 216, 1) 100%
    );
    border-radius: 20px;
    font-size: 15px;
  }

  .buy-button {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    background: linear-gradient(
      240deg,
      rgba(216, 216, 219, 1) 0%,
      rgba(163, 213, 217, 1) 20%,
      rgba(127, 188, 193, 1) 80%,
      rgba(216, 216, 216, 1) 100%
    );
    border-radius: 20px;
    font-size: 15px;
  }
  @media screen and (min-width: 500px) {
    .back-button {
      margin-top: -30px;
    }

    .buy-button {
      margin-top: -30px;
    }
  }
`;
