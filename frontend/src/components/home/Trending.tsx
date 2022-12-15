import Image from "next/image";
import React from "react";
import img from "../../asset/trending.png";
import { BsArrowRight } from "react-icons/bs";

export default function Trending() {
  const trendings = [
    {
      img: img,
      name: " Lorem, ipsum dolor.",
    },

    {
      img: img,
      name: " Lorem, ipsum dolor.",
    },

    {
      img: img,
      name: " Lorem, ipsum dolor.",
    },
  ];
  return (
    <div>
      <h2 className="text-center mb-5 dark_blue">Trending Products</h2>
      <div className="row">
        {trendings &&
          trendings.map((trending: any, index: any) => (
            <div
              key={index}
              className="trending_item col-4 ">
              <div className="trending_image_div ">
                <Image
                  className="rounded-1"
                  src={trending.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                <p className="h6 dark_blue">Flower vase</p>
                <p className="h6 color_yellow">Nrs 500 /-</p>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-4 dark_blue">
        Shop More <BsArrowRight />
      </div>
    </div>
  );
}
