import Image from "next/image";
import React from "react";
import img from "../asset/banner.png";
import { BsArrowRight } from "react-icons/bs";

export default function GlobalProductSection() {
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
      <div className="row">
        {trendings &&
          trendings.map((trending: any, index: any) => (
            <div
              key={index}
              className="trending_item col-4 ">
              <div className="trending_image_div ">
                <Image
                  className="rounded-3"
                  src={trending.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center justify-content-between px-2">
                <p>Flower vase</p>
                <p>Nrs 500 /-</p>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        Shop More <BsArrowRight />{" "}
      </div>
    </div>
  );
}
