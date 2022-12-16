import { useRouter } from "next/router";
import Link from "next/link";
import shoes from "../../../lib/shoes";
import styled from "styled-components";

export default function Buy() {
  const router = useRouter();

  const { id } = router.query;

  const currentBuyPage = shoes.find((shoe) => shoe.id === id);

  if (!currentBuyPage) {
    return <p>Page not Found</p>;
  }

  const { shops } = currentBuyPage;
  console.log(shops);

  return (
    <>
      <StyledContainer>
        <StyledOverviewContainer>
          <h1>Retailer</h1>
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
              <button className="back-btn">BACK</button>
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

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
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

  .back-btn {
    display: inline-block;
    margin: 10px;
    padding: 10px;
  }
`;
