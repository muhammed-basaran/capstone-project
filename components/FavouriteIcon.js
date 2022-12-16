import { useState } from "react";
import styled from "styled-components";

export default function FavoriteIcon() {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleToggle() {
    setIsFavorite(!isFavorite);
  }

  return (
    <img
      src={isFavorite ? "/assets/red.png" : "/assets/black.png"}
      className="fav"
      onClick={handleToggle}
      aria-label="favorite"
    />
  );
}
