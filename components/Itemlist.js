import shoes from "../lib/shoes";
import styled from "styled-components";
import Link from "next/link";

export default function Itemlist() {
  return (
    <>
      {shoes.map((shoe) => (
        <StyledItemListContainer key={shoe.id}>
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
  border: 2px solid black;
  width: 70vw;
  height: auto;
  border-radius: 40px;
  margin-top: 10px;
  padding: 2px;

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
  padding: 15px;
  margin: auto;
  width: 90%;
  height: 20%;
  padding-bottom: 20px;

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
