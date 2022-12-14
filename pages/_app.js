import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import shoes from "../lib/shoes";

function MyApp({ Component, pageProps }) {
  const [sneakers, setSneakers] = useState(shoes);
  const [selectedIcon, setSelectedIcon] = useState("all");

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
