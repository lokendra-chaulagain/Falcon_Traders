import Image from "next/image";
import React from "react";
import img1 from "../../asset/banner1.jpg";
import img2 from "../../asset/banner2.jpg";
import img3 from "../../asset/banner1.jpg";
import img4 from "../../asset/banner4.jpg";

export default function Category() {
  const categories = [
    {
      img: img1,
      name: " Lorem, ipsum dolor.",
    },

    {
      img: img2,
      name: " Lorem, ipsum dolor.",
    },

    {
      img: img3,
      name: " Lorem, ipsum dolor.",
    },

    {
      img: img4,
      name: " Lorem, ipsum dolor.",
    },
  ];
  return (
    <div>
      <h2 className="text-center">Shop by Category</h2>
      <div className="row">
        {categories &&
          categories.map((category: any, index: any) => (
            <div
              key={index}
              className=" col-3 category_img_div">
              <Image
                src={category.img}
                objectFit="cover"
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}
