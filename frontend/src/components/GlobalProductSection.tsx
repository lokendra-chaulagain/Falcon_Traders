import Image from "next/image";
import React from "react";
import img from "../asset/banner.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function GlobalProductSection({ products }: any) {
  return (
    <div className="row p-0 m-0">
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="product_item col-12 col-md-6  col-xl-4  col-xxl-3 mb-5">
            <Link href={`/product/${product.url}`}>
              <div className="trending_image_div ">
                <Image
                  className="rounded-1"
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </Link>

            <div className="d-flex align-items-center justify-content-between mt-3 px-2">
              <p className="h6 dark_blue">{product.name}</p>
              <p className="h6 color_yellow">Nrs 500 /-</p>
            </div>
          </div>
        ))}
    </div>
  );
}
