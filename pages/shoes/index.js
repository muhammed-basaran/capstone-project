import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

export default function Home({ sneakers, onClick }) {
  return (
    <>
      <Header />
      <Card sneakers={sneakers} onClick={onClick} />
      <Footer />
    </>
  );
}
