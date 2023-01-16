import { ImFire } from "react-icons/im";

export default function FavoriteIcon({ isFavorite }) {
  return (
    <>
      {isFavorite ? (
        <ImFire color="red" size={30} aria-label="favorite" />
      ) : (
        <ImFire size={30} aria-label="favorite" />
      )}
    </>
  );
}
