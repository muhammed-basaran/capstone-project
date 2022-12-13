import { shoes } from "../public/shoes";
import styled from "styled-components";

export default function Itemlist() {
  return (
    <>
      {shoes.map((shoe) => (
        <StyledItemList>
          <StyledImage src={shoe.img} width="300px" height="250px" />
          <StyledListContainer>
            <StyledItemName className="itemName">{shoe.name}</StyledItemName>
            <StyledDivContainer>
              <StyledItemDate className="releaseDate">
                {shoe.release}
              </StyledItemDate>
              <StyledItemPrice className="price">{shoe.price}€</StyledItemPrice>
            </StyledDivContainer>
          </StyledListContainer>
        </StyledItemList>
      ))}
    </>
  );
}

const StyledItemList = styled.section`
  position: relative;
  border: 2px solid black;
  width: 70vw;
  height: 35vh;
  border-radius: 10%;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
`;

const StyledListContainer = styled.ul`
  list-style: none;
  display: inline;
`;

const StyledItemName = styled.li`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const StyledDivContainer = styled.div`
  padding: 15px;
  margin: 10px;
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
