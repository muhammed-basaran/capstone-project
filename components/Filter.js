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

export default function Filter({ selectedIcon, handleSelectedIcon }) {
  return (
    <>
      <StyledContentContainer>
        <StyledIconContainer>
          <StyledBrandCircle>
            <StyledBrandAll
              onClick={() => handleSelectedIcon("all")}
              className={selectedIcon === "all" ? "clicked" : ""}
            >
              All Sneakers
            </StyledBrandAll>
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandNike
              size="70px"
              onClick={() => handleSelectedIcon("nike")}
              color={selectedIcon === "nike" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandAdidas
              size="60px"
              onClick={() => handleSelectedIcon("adidas")}
              color={selectedIcon === "adidas" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandReebok
              size="70px"
              onClick={() => handleSelectedIcon("reebok")}
              color={selectedIcon === "reebok" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandJordan
              size="60px"
              onClick={() => handleSelectedIcon("air jordan")}
              color={selectedIcon === "air jordan" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandConverse
              size="70px"
              onClick={() => handleSelectedIcon("converse")}
              color={selectedIcon === "converse" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle>
            <StyledBrandNewBalance
              size="70px"
              onClick={() => handleSelectedIcon("new balance")}
              color={selectedIcon === "new balance" ? "#7fbcc1" : ""}
            />
          </StyledBrandCircle>
        </StyledIconContainer>
      </StyledContentContainer>
    </>
  );
}

const StyledContentContainer = styled.div`
  display: grid;
  overflow-x: scroll;
  margin: 90px 20px 20px -25px;
  padding-bottom: 10px;
  border-bottom: 2px solid gray;
`;

const StyledIconContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: 20px;
`;

const StyledBrandCircle = styled.li`
  border: 3px solid black;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  cursor: pointer;

  .clicked {
    color: #7fbcc1;
  }
`;

const StyledBrandAll = styled.p`
  font-size: 13px;
  font-weight: bold;
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
