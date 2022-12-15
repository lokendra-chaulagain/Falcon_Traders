import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";
import GlobalProductSection from "../../components/GlobalProductSection";

export default function Product() {
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

      <div className="row loki">
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
          <GlobalProductSection />
        </div>
      </div>

      <div className="row">
        <GlobalProductSection />
      </div>
    </div>
  );
}
