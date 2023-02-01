import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNEAK PICK</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link
          rel="icon"
          type="image/x-icon"
          href="/apple-touch-icon.png"
        ></link>
      </Head>
      <StyledStartingPageContainer>
        <StyledLink href="/sneakers">click to start choosing</StyledLink>
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

  @media screen and (min-width: 500px) {
    width: 450px;
    height: 750px;
    background-image: url("logo.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    background-color: #e4f4fc;
    z-index: 1;
    position: relative;
    margin: 40px auto;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 150px;
  left: 120px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    position: absolute;
    bottom: 150px;
    left: 150px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    cursor: pointer;
  }

  :hover {
    color: white;
  }
`;
