import styled from "styled-components";
import {
  SiNike,
  SiAdidas,
  SiReebok,
  SiJordan,
  SiPuma,
  SiNewbalance,
} from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";

export default function Filter() {
  return (
    <>
      <StyledContentContainer>
        <StyledIconContainer>
          <li>
            <StyledBrandNike size="70px" />
          </li>
          <li>
            <StyledBrandAdidas size="60px" />
          </li>
          <li>
            <StyledBrandReebok size="70px" />
          </li>
          <li>
            <StyledBrandJordan size="60px" />
          </li>
          <li>
            <StyledBrandConverse size="70px" />
          </li>
          <li>
            <StyledBrandPuma size="70px" />
          </li>
          <li>
            <StyledBrandNewBalance size="70px" />
          </li>
        </StyledIconContainer>
      </StyledContentContainer>
    </>
  );
}

const StyledContentContainer = styled.div`
  display: grid;
  overflow-x: scroll;
  margin: 10px 10px 20px 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid gray;
`;

const StyledIconContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: 20px;

  li {
    border: 3px solid black;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    text-align: center;
    margin-right: auto;
  }
`;

const StyledBrandNike = styled(SiNike)`
  padding: 5px;
`;

const StyledBrandAdidas = styled(SiAdidas)`
  padding: 5px;
`;

const StyledBrandReebok = styled(SiReebok)`
  padding: 5px;
`;

const StyledBrandJordan = styled(SiJordan)`
  padding: 5px;
`;

const StyledBrandConverse = styled(GiConverseShoe)`
  padding: 7px;
`;

const StyledBrandPuma = styled(SiPuma)`
  padding: 7px;
`;

const StyledBrandNewBalance = styled(SiNewbalance)`
  padding: 5px;
`;
