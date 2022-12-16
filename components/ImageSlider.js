import styled from "styled-components";

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
            <img src="/1.png" />
          </div>
          <div className="slide">
            <img src="/2.png" />
          </div>
          <div className="slide">
            <img src="/3.png" />
          </div>
          <div className="slide">
            <img src="/4.png" />
          </div>
        </div>
        <div className="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
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
