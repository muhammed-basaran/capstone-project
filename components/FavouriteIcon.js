export default function FavoriteIcon({ isFavorite }) {
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
