import axios from "axios";

const SLIDER = "https://38a0-197-14-11-2.ngrok.io";
import React from 'react'

export default function ImagesForSlider() {
  const getImages = async () => {
    try {
      const response = await axios.get(SLIDER + "/slider/", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (errors) {
      if (response.data) {
        const Images = response.data;
       const Imgs  = {
       img1: require(Images().img1),
       img2: require(Images().img2),
       img3: require(Images().img3),
       img4: require(Images().img4),
  
   }
  
      } else if (errors) {
        const Imgs = {
          img1: require("../DataForSlider/img1.png"),
          img2: require("../DataForSlider/img2.png"),
          img3: require("../DataForSlider/img3.png"),
          img4: require("../DataForSlider/img4.png"),
        };
        return Imgs;
      }
    }
   
  };
  return 
   Imgs
};
