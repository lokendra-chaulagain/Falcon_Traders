import Image from "next/image";
import React from "react";
import img3 from "../../asset/banner1.jpg";
import Link from "next/link";

export default function FeaturedProduct({ products }: any) {
  return (
    <div className="featured_product_wrapper">
      <h2 className="text-center mb-5 dark_blue">
        Featured <br /> Product
      </h2>

      <div className="row">
        {products &&
          products.map((product: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4   px-2 pb-5">
              <div className="featured_product_item ">
                <div className="featured_product_item_desc py-4 w-100 d-flex justify-content-between px-3">
                  <h5 className="  h5 m-0 ">{product.name}</h5>
                  <h5 className="  h5 m-0 ">{product.name}</h5>
                </div>

                <Link href={`/product/${product.url}`}>
                  <div className="feature_product_image_div ">
                    <Image
                      className="rounded-4"
                      src={img3}
                      layout="fill"
                      objectFit="cover"
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
