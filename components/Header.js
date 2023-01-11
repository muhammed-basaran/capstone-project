import styled from "styled-components";

export default function Header() {
  return <StyledHeader>SNEAK PICK</StyledHeader>;
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
