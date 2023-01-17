import styled from "styled-components";
import { GiRunningShoe } from "react-icons/gi";

export default function Header() {
  return (
    <StyledHeader>
      <GiRunningShoe size={40} /> SNEAK PICK
      <StyledSneakerIcon size={40} />
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  border-radius: 10px;
  position: fixed;
  width: 100%;
  height: auto;
  font-family: Arial, Helvetica, sans-serif;
  top: -25px;
  z-index: 1;
  padding: 1.5rem;
  background: linear-gradient(
    240deg,
    rgba(216, 216, 219, 1) 0%,
    rgba(163, 213, 217, 1) 20%,
    rgba(127, 188, 193, 1) 80%,
    rgba(216, 216, 216, 1) 100%
  );
`;

const StyledSneakerIcon = styled(GiRunningShoe)`
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  right: -10px;
`;
