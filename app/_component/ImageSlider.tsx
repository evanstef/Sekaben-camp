import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
    children : React.ReactNode
}

const ImageSlider = ({children} : Props) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
        arrows: false,
      };

  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

export default ImageSlider