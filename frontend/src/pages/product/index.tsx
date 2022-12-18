import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../asset/banner.png";
import GlobalProductSection from "../../components/GlobalProductSection";
import img from "../../asset/banner2.jpg";
import { BsArrowRight } from "react-icons/bs";
import Api from "../../service/Api.js";
let CallApi = new Api();

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        let res = await CallApi.fetchData(`product`);
        res && setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProduct();
  }, []);

  const randomProducts = products.slice(3, 7);

  return (
    <div>
      <div className="product_hero">
        <div className="product_banner_image_div">
          <Image
            src={banner}
            layout="fill"
            objectFit="cover"
            alt=""
          />

          <div className=" d-flex align-items-center justify-content-center ">
            <div className="product_search_div mb-5   p-5">
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  className="form-control rounded-0 py-3  search_input"
                  placeholder="Search Product"
                />
              </div>

              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <select
                    className="form-select search_input rounded-0 ps-4 pe-5"
                    aria-label="Default select example ">
                    <option
                      selected
                      className="">
                      Categories
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="col-12 col-md-6 mt-4 mt-md-0">
                  <input
                    type="number"
                    className="form-control rounded-0 search_input "
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 px-sm-5">
        <div className="row ">
          <div className=" col-xl-4  d-none d-xl-block">
            <div className="product_left_div">
              <div className="product_left_img_div">
                <Image
                  src={banner}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="px-3   d-flex flex-column justify-content-center align-items-center pb-4">
                <h2 className="h1 mt-3 px-5 text-center">New Designs for Wallpapers</h2>
                <p className="text-center fz18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sit mi egestas eu. In arcu, netus maecenas in dictum enim.</p>
                <button
                  type="button"
                  className="btn btn-link  fz18">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-12">
            <div className="row">
              {randomProducts &&
                randomProducts.map((product: any, index: any) => (
                  <div
                    key={index}
                    className="trending_item col-12 col-md-6  col-xl-6 mb-5">
                    <div className="trending_image_div ">
                      <Image
                        className="rounded-1"
                        src={img}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                      <p className="h6 dark_blue">{product.name}</p>
                      <p className="h6 color_yellow">Nrs 500 /-</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <GlobalProductSection products={products} />
        </div>
      </div>
    </div>
  );
}
