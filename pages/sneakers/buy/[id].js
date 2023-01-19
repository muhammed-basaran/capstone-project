import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Header from "../../../components/Header";

export default function Buy({ sneakers }) {
  const router = useRouter();

  const { id } = router.query;

  const currentBuyPage = sneakers.find((sneaker) => sneaker.id === id);

  if (!currentBuyPage) {
    return <p>Page not Found</p>;
  }

  const { shops } = currentBuyPage;

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledOverviewContainer>
          <StyledCaption>Retailer Page</StyledCaption>
          <StyledBorderBottom />

          <p>Click for visiting the retailers Homepage:</p>
          {shops.map((shop) => (
            <>
              <StyledLinkContainer>
                <h3>
                  <a href={shop.link}>{shop.store}</a>
                </h3>
              </StyledLinkContainer>
            </>
          ))}
          <StyledButtonContainer>
            <Link href={`/sneakers/${id}`}>
              <button className="back-button">BACK</button>
            </Link>
          </StyledButtonContainer>
        </StyledOverviewContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledOverviewContainer = styled.section`
  position: relative;
  width: 80vw;
  height: 80vh;
  border-radius: 40px;
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;
  background-color: #eee9e9;
  box-shadow: 0 3px 10px;
  margin-bottom: 20px;

  p {
    text-align: center;
    font-size: 17px;
    font-style: italic;
  }
`;
const StyledCaption = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

const StyledBorderBottom = styled.div`
  position: relative;
  width: 65vw;
  border-bottom: 3px solid gray;
  left: 1.5rem;
`;

const StyledLinkContainer = styled.section`
  border: 1px solid black;
  margin: 20px;
  background: linear-gradient(
    240deg,
    rgba(216, 216, 219, 1) 0%,
    rgba(163, 213, 217, 1) 20%,
    rgba(127, 188, 193, 1) 80%,
    rgba(216, 216, 216, 1) 100%
  );
  border-radius: 20px;

  h3 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: black;
    margin: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const StyledButtonContainer = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .back-button {
    display: inline-block;
    margin: 10px;
    padding: 12px;
    background: linear-gradient(
      240deg,
      rgba(216, 216, 219, 1) 0%,
      rgba(163, 213, 217, 1) 20%,
      rgba(127, 188, 193, 1) 80%,
      rgba(216, 216, 216, 1) 100%
    );
    border-radius: 20px;
    font-size: 15px;
  }
`;
