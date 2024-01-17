import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.css";

export const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data?.images?.length;
  console.log(data);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data.images) || data.images.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {data?.images?.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide} alt="travel image" className="image" />}
          </div>
        );
      })}
    </section>
  );
};
