import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import GlobalProductSection from "../../components/GlobalProductSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import img from "../../asset/banner.png";

export default function ProductSlug() {
  const colors = [
    {
      name: "red",
    },

    {
      name: "green",
    },

    {
      name: "blue",
    },

    {
      name: "pink",
    },
  ];

  const sizes = [
    {
      name: "S",
    },

    {
      name: "M",
    },

    {
      name: "L",
    },

    {
      name: "XL",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide className="">
              <div className="single_product_swiper_img_div">
                <Image
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="col-6">
          <h2>Ceramic Flower Vase</h2>
          <h6>Nrs. 500/-</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacinia velit tellus in volutpat feugiat. Habitant fringilla sed dui sit eu nec. Ultricies sit dolor faucibus vitae ullamcorper pellentesque. Vulputate sed pulvinar arcu sit purus leo. Et dui mattis donec scelerisque cursus facilisi nunc in id. Et ultrices sapien ipsum pharetra eget vulputate aliquet. Vestibulum est.</p>
          <hr />
          <h4>Details</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacinia velit tellus in volutpat feugiat. Habitant fringilla sed dui sit eu nec. Ultricies sit dolor faucibus vitae ullamcorper pellentesque. Vulputate sed pulvinar arcu sit purus leo. Et dui mattis donec scelerisque cursus facilisi nunc in id. Et ultrices sapien ipsum pharetra eget vulputate aliquet. Vestibulum est.</p>
          <hr />

          <div className="row mt-5">
            <div className="col">
              <h5>Colors</h5>
              {colors &&
                colors.map((color: any, index: any) => (
                  <div
                    key={index}
                    className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="colorInputChooseOption"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="colorInputChooseOption">
                      {color.name}
                    </label>
                  </div>
                ))}
            </div>
            <div className="col">
              <h5>Sizes</h5>
              {sizes &&
                sizes.map((size: any, index: any) => (
                  <div
                    key={index}
                    className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineRadio1">
                      {size.name}
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6  d-flex align-items-center gap-3">
              <h4>QTY</h4>
              <input
                autoComplete="off"
                type="number"
                className="form-control text-center w-25 quantity_input rounded-1 "
                id="exampleFormControlInput1"
                placeholder="1"
              />
            </div>

            <div className="col">
              <button
                type="button"
                className="btn add_cart_btn rounded-1">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="d-flex align-items-center gap-3">
              <h6 className="m-0">SHARE</h6>
              <AiOutlineTwitter
                size={34}
                className=" footer_icon_div1 rounded-circle  p-2 ms-5"
              />
              <RiFacebookFill
                size={34}
                className=" footer_icon_div2 rounded-circle  p-2"
              />
              <AiFillInstagram
                size={34}
                className=" footer_icon_div3 rounded-circle  p-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h3 className="text-center">Simillar Products</h3>
        <GlobalProductSection />
      </div>
    </div>
  );
}
