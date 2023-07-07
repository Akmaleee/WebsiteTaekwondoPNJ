import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productList = [
  {
    href: "images/bg2.png",
    brand: "Acer",
    name: "Nitro 5 2023",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/bg3.png",
    brand: "",
    name: "Nitro 16",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/bg4.png",
    brand: "Truthear x Crinacle",
    name: "ZERO:RED",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/bg5.png",
    brand: "MSI",
    name: "Stealth GS77",
    bgcolor: "dark",
    height: "tall",
  },
];

export const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    width: 500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative pt-10 flex justify-center ">
      <Slider {...carouselSettings} className="overflow-hidden w-1/2">
        {productList.map((item) => (
          <div key={item.href}>
            <img
              className="object-cover w-full h-[30rem] rounded-xl"
              src={item.href}
              alt="Card 1"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;