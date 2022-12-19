import Image from "next/image";
import React from "react";
import img3 from "../../asset/banner1.jpg";
import Link from "next/link";

export default function Category({ categories }: any) {
  return (
    <div className="my-5 ">
      <h2 className="text-center mb-5 dark_blue">Shop by Category</h2>
      <div className="row">
        {categories &&
          categories.map((category: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4 mb-5">
              <Link href={`/category/${category.url}`}>
                <div className=" category_img_div">
                  <Image
                    src={img3}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                  <div className="category_img_div_desc px-3  ">
                    <h2 className="fw-bold ">{category.name}</h2>
                    <p className=""> {category.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
