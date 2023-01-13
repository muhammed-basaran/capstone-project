import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import shoes from "../lib/shoes";

function MyApp({ Component, pageProps }) {
  const [sneakers, setSneakers] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState("all");

  async function getShoe() {
    try {
      const response = await fetch("/api/sneakers");
      const sneakersList = await response.json();
      setSneakers(sneakersList);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getShoe();
  }, []);

  function handleSelectedIcon(icon) {
    setSelectedIcon(icon);
  }

  function handleToggleLike(event, id) {
    event.preventDefault();
    event.stopPropagation();

    setSneakers(
      sneakers.map((sneaker) =>
        sneaker.id === id
          ? { ...sneaker, isFavorite: !sneaker.isFavorite }
          : sneaker
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        sneakers={sneakers}
        onClick={handleToggleLike}
        selectedIcon={selectedIcon}
        handleSelectedIcon={handleSelectedIcon}
      />
    </>
  );
}

export default MyApp;
