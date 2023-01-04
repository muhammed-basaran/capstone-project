import styled from "styled-components";
import { AiOutlineFire, AiFillFire } from "react-icons/ai";
import { RiHome4Line, RiHome4Fill } from "react-icons/ri";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";

export default function Footer() {
  const [isActive, setIsActive] = useLocalStorageState("is-active", true);

  return (
    <>
      <StyledNav>
        <Link href={"/shoes"} onClick={() => setIsActive(false)}>
          {isActive == false ? (
            <StyledFilledHomeIcon />
          ) : (
            <StyledEmptyHomeIcon />
          )}
        </Link>
        <Link href={"/../favorites"} onClick={() => setIsActive(true)}>
          {isActive == true ? <StyledFilledFire /> : <StyledEmptyFire />}
        </Link>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  bottom: 0;
  z-index: 1;
  padding: 0.5rem;
  background: linear-gradient(
    240deg,
    rgba(216, 216, 219, 1) 0%,
    rgba(163, 213, 217, 1) 20%,
    rgba(127, 188, 193, 1) 80%,
    rgba(216, 216, 216, 1) 100%
  );
`;

const StyledFilledHomeIcon = styled(RiHome4Fill)`
  font-size: 3rem;
  color: black;

  :hover {
    color: white;
  }
`;

const StyledEmptyHomeIcon = styled(RiHome4Line)`
  font-size: 3rem;
  color: black;

  :hover {
    color: white;
  }
`;

const StyledEmptyFire = styled(AiOutlineFire)`
  font-size: 3rem;
  color: black;

  :hover {
    color: white;
  }
`;

const StyledFilledFire = styled(AiFillFire)`
  font-size: 3rem;
  color: black;

  :hover {
    color: white;
  }
`;
