import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "./VerticalSlider.module.css";

const VerticalSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="vertical-slider">
      <div className={slider.slide}>
        <img src="https://c1.wallpaperflare.com/preview/901/623/722/render-graphic-architecture-3d.jpg" 
        alt="Slide 1" />
      </div>
      <div className={slider.slide}>
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
          alt="Slide 2"
        />
      </div>
      <div className={slider.slide}>
        <img src="https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg" 
        alt="Slide 3" />
      </div>
      <div className={slider.slide}>
        <img src="https://wallpapers.com/images/high/4k-silver-car-next-to-building-1gd91djt8etqznsa.webp" 
        alt="Slide 4" />
      </div>
      <div className={slider.slide}>
        <img src="https://c1.wallpaperflare.com/preview/427/5/115/condominium-condo-architecture-apartment.jpg" 
        alt="Slide 5" />
      </div>
      <div className={slider.slide}>
        <img src="https://wallpapers.com/images/high/4k-white-car-by-stairs-a3qp889uyq8jfbsn.webp" 
        alt="Slide 6" />
      </div>
    </Slider>
  );
};

export default VerticalSlider;
