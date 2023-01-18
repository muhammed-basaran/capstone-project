import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import styled from "styled-components";
import Link from "next/link";

export default function Home({
  sneakers,
  onClick,
  selectedIcon,
  handleSelectedIcon,
}) {
  return (
    <>
      <StyledStartingPageContainer>
        <StyledLink href="/sneakers">start choosing</StyledLink>
      </StyledStartingPageContainer>
    </>
  );
}

const StyledStartingPageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  background-color: #e4f4fc;
  z-index: 1;
  position: relative;
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 150px;
  left: 140px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  text-shadow: 0px 1px;
  cursor: pointer;

  :hover {
    color: white;
  }
`;
