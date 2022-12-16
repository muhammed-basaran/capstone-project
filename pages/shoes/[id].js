import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import shoes from "../../lib/shoes";
import styled from "styled-components";
import FavoriteIcon from "../../components/FavouriteIcon";

export default function Overview() {
  const router = useRouter();

  const { id } = router.query;

  const currentShoe = shoes.find((shoe) => shoe.id === id);

  if (!currentShoe) {
    return <p>Page not Found</p>;
  }

  const { img, name, price, release, title, description1, description2 } =
    currentShoe;

  return (
    <>
      <StyledContainer>
        <StyledOverviewContainer>
          <FavoriteIcon className="fav" />
          <Image
            src={img}
            alt={`picture of ${name}`}
            width={300}
            height={400}
          />
          <h2 className="itemName">{name}</h2>
          <StyledDivContainer>
            <span className="releaseDate">{release}</span>
            <span className="price">{price} €</span>
          </StyledDivContainer>
          <StyledInfoContainer>
            <h3>{title}</h3>
            <p>{description1}</p>
            <p>{description2}</p>
          </StyledInfoContainer>
          <StyledButtonContainer>
            <Link href="/shoes">
              <button className="back-btn">BACK</button>
            </Link>

            <Link href={`/shoes/buy/${id}`}>
              <button className="buy-btn">FORWARD </button>
            </Link>
          </StyledButtonContainer>
        </StyledOverviewContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  align-items: center;
  overflow: scroll;
`;

const StyledOverviewContainer = styled.section`
  position: relative;
  border: 2px solid black;
  width: 80vw;
  height: auto;
  border-radius: 40px;
  margin-top: 10px;
  padding: 2px;

  .fav {
    width: 2rem;
    position: absolute;
    right: 20px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    margin-top: 5px;
    width: 60%;
    height: auto;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: black;
    text-decoration: none;
  }
`;

const StyledDivContainer = styled.div`
  padding: 15px;
  margin: auto;
  width: 90%;
  height: 20%;
  padding-bottom: 20px;

  .releaseDate {
    font-size: 16px;
    text-align: left;
    padding: 0;
    margin: 0;
  }

  .price {
    font-size: 16px;
    text-align: right;
    padding: 0;
    margin: 0;
    float: right;
  }
`;

const StyledInfoContainer = styled.section`
  margin: 5px;
  padding: 2px;
  border-top: 1px solid black;

  h3 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: black;
  }

  p {
    font-size: 14px;
    padding: 5px;
    margin: 10px;
  }
`;

const StyledButtonContainer = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;

  .back-btn {
    display: inline-block;
    margin: 10px;
    padding: 10px;
  }

  .buy-btn {
    display: inline-block;
    padding: 10px;
    margin: 10px;
  }
`;
