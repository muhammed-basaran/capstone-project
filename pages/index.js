import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

export default function Home({
  sneakers,
  onClick,
  selectedIcon,
  handleSelectedIcon,
}) {
  return (
    <>
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
