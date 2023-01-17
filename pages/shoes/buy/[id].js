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
          <h1>Retailer Page</h1>

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
  margin-top: 90px;
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
  width: 80vw;
  height: 80vh;
  border-radius: 40px;
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;
  background-color: #dadada;
  box-shadow: 0 5px 15px;
  margin-bottom: 20px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }

  p {
    text-align: center;
    font-size: 17px;
  }
`;

const StyledLinkContainer = styled.section`
  border: 1px solid black;
  margin: 10px;
  background-color: #7fbcc1;
  border-radius: 20px;

  h3 {
    font-size: 24px;
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
  margin-top: 80px;

  .back-button {
    display: inline-block;
    margin: 10px;
    padding: 12px;
    background-color: #7fbcc1;
    border-radius: 20px;
    font-size: 16px;
  }
`;
