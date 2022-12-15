import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";

export default function HeroBanner() {
  return (
    <div>
      <div className="hero_banner_img_div">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt=""
        />

        <div className="title_button_div">
          <h1 className="h1 fw-bold color_white">Delivering Happiness with every Package.</h1>
          <button
            type="button"
            className="btn hero_button px-4 mt-4 rounded-1 px-5 fw-semibold py-2">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
