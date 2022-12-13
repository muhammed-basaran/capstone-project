import { shoes } from "../public/shoes";
import styled from "styled-components";

export default function Itemlist() {
  return (
    <>
      {shoes.map((shoe) => (
        <StyledItemListContainer>
          <StyledImage src={shoe.img} width="50%" height="70%" />
          <StyledItemName className="itemName">{shoe.name}</StyledItemName>
          <StyledDivContainer>
            <StyledItemDate className="releaseDate">
              {shoe.release}
            </StyledItemDate>
            <StyledItemPrice className="price">{shoe.price} €</StyledItemPrice>
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
  height: 300px;
  border-radius: 40px;
  margin-top: 10px;
  padding: 2px;
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  margin-top: 5px;
`;

const StyledItemName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const StyledDivContainer = styled.div`
  padding: 15px;
  margin: auto;
  width: 90%;
  height: 20%;
  padding-bottom: 20px;
`;
const StyledItemDate = styled.span`
  font-size: 16px;
  text-align: left;
  padding: 0;
  margin: 0;
`;
const StyledItemPrice = styled.span`
  font-size: 16px;
  text-align: right;
  padding: 0;
  margin: 0;
  float: right;
`;
