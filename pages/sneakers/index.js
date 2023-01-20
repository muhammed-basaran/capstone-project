import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import Head from "next/head";

export default function Home({
  sneakers,
  onClick,
  selectedIcon,
  handleSelectedIcon,
}) {
  return (
    <>
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
    </>
  );
}
