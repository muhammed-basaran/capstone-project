import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";

export default function Home({ sneakers, onClick }) {
  return (
    <>
      <Header />
      <Filter />
      <Card sneakers={sneakers} onClick={onClick} />
      <Footer />
    </>
  );
}
