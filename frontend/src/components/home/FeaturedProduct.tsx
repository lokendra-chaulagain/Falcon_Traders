import Image from "next/image";
import React from "react";
import img1 from "../../asset/banner1.jpg";
import img2 from "../../asset/banner2.jpg";
import img3 from "../../asset/banner1.jpg";
import { RiFacebookFill } from "react-icons/ri";

export default function FeaturedProduct() {
  return (
    <div className="featured_product_wrapper">
      <h2 className="text-center mb-5 dark_blue">
        Featured <br /> Product
      </h2>

      <div className="row">
        <div className="col-4">
          <div className="featured_product_img ">
            <Image
              className="rounded-2"
              src={img3}
              objectFit="cover"
              layout="fill"
              alt=""
            />
            <div className="featured_product_img_desc py-3 d-flex align-items-center  ">
              <h6>Awesome Chair</h6>
              <div className="d-flex align-items-center gap-3">
                <h6>Nrs. 1050 </h6>
                <RiFacebookFill
                  size={34}
                  className=" footer_icon_div2 rounded-circle  p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
