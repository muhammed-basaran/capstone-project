import { useState } from "react";

export default function FavoriteIcon({ isFavorite }) {
  console.log(isFavorite);
  return (
    <>
      {isFavorite ? (
        <img src={"/assets/red.png"} className="fav" aria-label="favorite" />
      ) : (
        <img src={"/assets/black.png"} className="fav" aria-label="favorite" />
      )}
    </>
  );
}
