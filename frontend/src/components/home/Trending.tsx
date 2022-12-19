import Image from "next/image";
import React from "react";
import img from "../../asset/trending.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Trending({ products }: any) {
  return (
    <div>
      <h2 className="text-center mb-5 dark_blue">Trending Products</h2>
      <div className="row">
        {products &&
          products.map((product: any, index: any) => (
            <div
              key={index}
              className="trending_item col-4 mb-5 ">
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
                <p className="h6 color_yellow">Nrs {product.price} /-</p>
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
