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
    <div className="my-5 ">
      <h2 className="text-center mb-5 dark_blue">Shop by Category</h2>
      <div className="row">
        {categories &&
          categories.map((category: any, index: any) => (
            <div
              key={index}
              className=" col-3 category_img_div">
              <Image
                src={category.img}
                objectFit="cover"
                layout="fill"
                alt=""
              />
              <div className="category_img_div_desc px-3  ">
                <h2 className="fw-bold text-center">Bathroom Ware</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sit mi egestas eu.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
