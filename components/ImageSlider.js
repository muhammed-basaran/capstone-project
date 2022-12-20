import styled from "styled-components";
import { images } from "../lib/shoes";
import shoes from "../lib/shoes";
import { useState } from "react";

const pics = [
  {
    id: 1,
    img1: [
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4262_w4yldp.png",
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928245/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4261_zkfbaw.png",
      "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928243/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4264_zqafzm.png",
    ],
  },
];

export default function ImageSlider() {
  return (
    <>
      <StyledSlider className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src="/1.PNG" />
          </div>
          <div className="slide">
            <img src="/2.PNG" />
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </StyledSlider>
    </>
  );
}

const StyledSlider = styled.div`
  overflow: hidden;

  .slider {
    width: 600px;
    height: 300px;
    border-radius: 20px;
  }

  .slides {
    width: 500%;
    height: 220px;
    display: flex;
  }

  .slides input {
    display: none;
  }

  .slide {
    width: 20%;
    transition: 2s;
  }

  .slide img {
    width: 300px;
    height: 220px;
  }

  .navigation-manual {
    position: absolute;
    width: 300px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }

  .manual-btn {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
  }

  .manual-btn:not(:last-child) {
    margin-right: 40px;
  }

  .manual-btn:hover {
    background-color: #40d3dc;
  }

  #radio1:checked ~ .first {
    margin-left: 0;
  }

  #radio2:checked ~ .first {
    margin-left: -20%;
  }
  #radio3:checked ~ .first {
    margin-left: -40%;
  }
  #radio4:checked ~ .first {
    margin-left: -60%;
  }
`;
