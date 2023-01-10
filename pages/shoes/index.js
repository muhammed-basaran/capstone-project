import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";

export default function Home({
  sneakers,
  onClick,
  selectedIcon,
  setSelectedIcon,
}) {
  return (
    <>
      <Header />
      <Filter selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      <Card
        sneakers={sneakers}
        onClick={onClick}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
      <Footer />
    </>
  );
}
