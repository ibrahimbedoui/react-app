import React from 'react'
import {Carousel as Carousel1} from 'react-bootstrap'






export default function Carousel() {
  const IMAGES = {
    img1: require("../DataForSlider/img1.png"),
    img2: require("../DataForSlider/img2.png"),
    img3:require("../DataForSlider/img3.png"),
    img4:require("../DataForSlider/img4.png"),
  };
  
  return (
    <div>
        <Carousel1>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={IMAGES.img1}
      alt="First slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={IMAGES.img2}
      alt="Second slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={IMAGES.img3}
      alt="Third slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={IMAGES.img4}
      alt="Third slide"
    />
  </Carousel1.Item>
</Carousel1>
    </div>
  )
}
