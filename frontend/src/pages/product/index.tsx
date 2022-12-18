import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";
import GlobalProductSection from "../../components/GlobalProductSection";
import img from "../../asset/banner2.jpg";
import { BsArrowRight } from "react-icons/bs";

export default function Product() {
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
      <div className="product_hero">
        <div className="product_banner_image_div">
          <Image
            src={banner}
            layout="fill"
            objectFit="cover"
            alt=""
          />

          <div className="d-flex align-items-center justify-content-center ">
            <div className="product_search_div w-50 py-5 px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nulla optio eveniet minus dolores veniam qui adipisci natus facere ea neque tempore voluptatibus quia, provident quis magnam nostrum quos, autem accusantium. Sint vel aliquam exercitationem modi excepturi eum earum totam doloremque vero, quia incidunt veritatis fuga, error odio nostrum labore?</div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="row ">
          <div className="col-3">
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
                <h2 className=" px-5 text-center">New Designs for Wallpapers</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sit mi egestas eu. In arcu, netus maecenas in dictum enim.</p>
                <button
                  type="button"
                  className="btn btn-link ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {trendings &&
                trendings.map((trending: any, index: any) => (
                  <div
                    key={index}
                    className="trending_item col-4 mb-5">
                    <div className="trending_image_div ">
                      <Image
                        className="rounded-1"
                        src={trending.img}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                      <p className="h6 dark_blue">Flower vase</p>
                      <p className="h6 color_yellow">Nrs 500 /-</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
            {trendings &&
              trendings.map((trending: any, index: any) => (
                <div
                  key={index}
                  className="trending_item col-3 mb-5">
                  <div className="trending_image_div ">
                    <Image
                      className="rounded-1"
                      src={trending.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                    <p className="h6 dark_blue">Flower vase</p>
                    <p className="h6 color_yellow">Nrs 500 /-</p>
                  </div>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
}
