import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import Head from "next/head";

import styled from "styled-components";

export default function Home({
  sneakers,
  onClick,
  selectedIcon,
  handleSelectedIcon,
}) {
  return (
    <>
      <StyledDivForDesktop>
        <Head>
          <title>SNEAK PICK</title>
          <link rel="icon" href="/favicon.ico"></link>
          <link
            rel="icon"
            type="image/x-icon"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        <Header />
        <Filter
          selectedIcon={selectedIcon}
          handleSelectedIcon={handleSelectedIcon}
        />
        <Card
          sneakers={sneakers}
          onClick={onClick}
          selectedIcon={selectedIcon}
          handleSelectedIcon={handleSelectedIcon}
        />
        <Footer sneakers={sneakers} onClick={onClick} />
      </StyledDivForDesktop>
    </>
  );
}

const StyledDivForDesktop = styled.div`
  @media screen and (min-width: 500px) {
    margin: 40px auto 30px auto;
    width: 450px;
    height: 750px;
    overflow: scroll;
  }
`;
