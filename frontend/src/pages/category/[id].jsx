import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function Id() {
  const router = useRouter();
  const slug = router.query.id;

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category?url=${slug}`);
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCategory();
  }, [slug]);

  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${slug}`);
        setCatProducts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryProduct();
  }, [slug]);

  return (
    <div>
      <div className="">
        {category && (
          <div className="product_banner_image_div">
            <Image
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${category.image}`}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        )}
      </div>

      <div className="px-2 px-sm-5">
        {category && <h2 className="text-center my-5 dark_blue">Category : {category.name}</h2>}
        <div className="row ">
          {catProducts &&
            catProducts.map((product, index) => (
              <div
                key={index}
                className="trending_item col-12 col-md-6  col-xl-4  col-xxl-3 mb-5">
                <Link href={`/product/${product.url}`}>
                  <div className="trending_image_div ">
                    <Image
                      className="rounded-1"
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${product.image}`}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </Link>

                <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                  <p className="h6 dark_blue">{product.name}</p>
                  <p className="h6 color_yellow">Nrs {product.price || "Not Mentioned"} /-</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
