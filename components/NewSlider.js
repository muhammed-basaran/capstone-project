import { useState } from "react";
import { FarrowAltCircleRight, FarrowAltCircleLeft } from "react-icons/fa";

const pics = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dvze0tvsd/image/upload/v1670928242/capstone-project/Nike/Off-White%20X%20Nike%20Air%20Terra%20Forma%20Wheat/IMG_4260_wtziea.png",
  },
];

export default function PicSlider() {
  const [current, setCurrent] = useState(0);
  const lenght = pics.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pics) || pics.length <= 0) {
    return null;
  }
  return (
    <div>
      <FarrowAltCircleLeft onclick={prevSlide} />
      <FarrowAltCircleRight onClick={nextSlide} />
      {pics.map((pic, index) => (
        <img src={pic.img} />
      ))}
    </div>
  );
}
