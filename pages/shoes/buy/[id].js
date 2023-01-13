import { useRouter } from "next/router";
import Link from "next/link";
import shoes from "../../../lib/shoes";
import styled from "styled-components";

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
      <StyledContainer>
        <StyledOverviewContainer>
          <h1>Retailer</h1>

          <p>Click on the name for visiting the retailers Homepage:</p>
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
            <Link href={`/shoes/${id}`}>
              <button className="back-button">BACK</button>
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
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledOverviewContainer = styled.section`
  position: relative;
  border: 2px solid black;
  width: 80vw;
  height: auto;
  border-radius: 40px;
  margin-top: 10px;
  padding: 2px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }

  p {
    text-align: center;
  }
`;

const StyledLinkContainer = styled.section`
  border: 1px solid black;
  margin: 10px;
  background-color: lightgray;
  h3 {
    font-size: 18px;
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

  .back-button {
    display: inline-block;
    margin: 10px;
    padding: 10px;
  }
`;
