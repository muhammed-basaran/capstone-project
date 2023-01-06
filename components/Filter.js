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
import { useState } from "react";

export default function Filter() {
  const [selectedIcon, setSelectedIcon] = useState();
  const [isActive, setIsActive] = useState(false);

  function handleToggleIcon() {
    setIsActive(!isActive);
  }

  return (
    <>
      <StyledContentContainer>
        <StyledIconContainer>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandNike
              size="70px"
              onClick={() => setSelectedIcon("nike")}
              color={isActive ? (selectedIcon === "nike" ? "#7fbcc1" : "") : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandAdidas
              size="60px"
              onClick={() => setSelectedIcon("adidas")}
              color={
                isActive ? (selectedIcon === "adidas" ? "#7fbcc1" : "") : ""
              }
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandReebok
              size="70px"
              onClick={() => setSelectedIcon("reebok")}
              color={
                isActive ? (selectedIcon === "reebok" ? "#7fbcc1" : "") : ""
              }
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandJordan
              size="60px"
              onClick={() => setSelectedIcon("air-jordan")}
              color={
                isActive ? (selectedIcon === "air-jordan" ? "#7fbcc1" : "") : ""
              }
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandConverse
              size="70px"
              onClick={() => setSelectedIcon("converse")}
              color={
                isActive ? (selectedIcon === "converse" ? "#7fbcc1" : "") : ""
              }
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandPuma
              size="70px"
              onClick={() => setSelectedIcon("puma")}
              color={isActive ? (selectedIcon === "puma" ? "#7fbcc1" : "") : ""}
            />
          </StyledBrandCircle>
          <StyledBrandCircle onClick={() => handleToggleIcon()}>
            <StyledBrandNewBalance
              size="70px"
              onClick={() => setSelectedIcon("new-balance")}
              color={
                isActive
                  ? selectedIcon === "new-balance"
                    ? "#7fbcc1"
                    : ""
                  : ""
              }
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
  margin: 10px 20px 20px -25px;
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

  :active {
    background-color: #7fbcc1;
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
