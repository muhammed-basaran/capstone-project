import shoes from "../lib/shoes";
import styled from "styled-components";
import Link from "next/link";
import FavoriteIcon from "./FavouriteIcon";

export default function Itemlist() {
  return (
    <>
      {shoes.map((shoe) => (
        <StyledItemListContainer key={shoe.id}>
          <FavoriteIcon className="fav" />
          <Link href={`/../shoes/${shoe.id}`}>
            <img src={shoe.img} max-width="200px" max-height="200px" />
            <h2 className="itemName">{shoe.name}</h2>
          </Link>
          <StyledDivContainer>
            <span className="releaseDate">{shoe.release}</span>
            <span className="price">{shoe.price} €</span>
          </StyledDivContainer>
        </StyledItemListContainer>
      ))}
    </>
  );
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

  .fav {
    width: 2rem;
    position: absolute;
    right: 20px;
  }

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
