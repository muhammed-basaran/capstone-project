import { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function ImageSlider({ pictures }) {
  const [index, setIndex] = useState(0);

  const allPictures = pictures;

  function handleNext() {
    if (index < allPictures.length) {
      setIndex((index + 1) % allPictures.length);
    }
  }
  function handlePrev() {
    if (index > 0) {
      setIndex((index - 1) % allPictures.length);
    }
  }
  return (
    <>
      <StyledSlider className="slider">
        <div className="slide">
          <img src={allPictures[index]} />
        </div>
        <StyledIconContainer>
          <FaArrowCircleLeft
            size="25px"
            className="left"
            onClick={handlePrev}
          />
          <FaArrowCircleRight
            size="25px"
            className="right"
            onClick={handleNext}
          />
        </StyledIconContainer>
      </StyledSlider>
    </>
  );
}

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;

  .right {
    margin-left: 20px;
  }
  .left {
    margin-right: 20px;
  }
`;

const StyledSlider = styled.div`
  overflow: hidden;

  .slides {
    width: 100%;
    height: 120px;
    display: flex;
  }

  .slide img {
    width: 300px;
    height: 220px;
  }
`;
