import Image from "next/image";
import React from "react";
import banner from "../asset/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <div className="about_page_wrapper">
      <div className="div d-flex align-items-center justify-content-center">
        <div className="about_hero d-flex flex-column align-items-center justify-content-center ">
          <h1 className="h1 dark_blue">Who We Are</h1>
          <p className="mt-3 fz18 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat libero, praesent quam enim. Sit tempus fermentum nunc mi rhoncus ultricies sit. Sit mauris eget eget ornare nec vestibulum tellus porta.</p>
        </div>
      </div>

      <div className="grey_bg ">
        {/* First Image text section--------------- */}

        <div className="row my-5 ">
          <div className="order-2 mt-4 mt-xl-0 col-12 col-xl-4 p-0  pe-0 pe-xl-3   d-flex flex-column  justify-content-center">
            <h1 className="h1 fw-bold dark_blue">Our Values</h1>
            <h6 className="text-muted mb-3">Best Place to get your Interior Needs</h6>

            <p className="fz18 para_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, et fermentum eget urna. Turpis sodales massa mi est. Lectus tincidunt maecenas auctor purus, egestas ornare dui. Cursus enim turpis id arcu sagittis dignissim quam justo. Eget neque mus semper ac dictumst. Sit volutpat pellentesque elementum integer dictum convallis ullamcorper nibh. Mi ante sed risus eu porta nibh morbi lorem a. Diam tincidunt pellentesque est sed justo vulputate rhoncus ut. Faucibus maecenas
              convallis libero nec.
            </p>
          </div>

          <div className="order-1 order-xl-2 col-lg-12 col-xl-8 p-0   ">
            <div className="about_sec_1_right_img_div">
              <Image
                src={banner}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Second Image text section--------------- */}
        <div className="div  d-flex align-items-center justify-content-center my-5 py-5">
          <div className="row  col-12 col-xl-8  ">
            <div className="about_sec_1_right_img_div ">
              <Image
                src={banner}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <h1 className="dark_blue fw-bold my-2 p-0 mt-3 mt-xl-0">Our Story</h1>
            <h6 className="text-muted mb-3 p-0">Best Place to get your Interior Needs</h6>

            <p className="fz18 p-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, et fermentum eget urna. Turpis sodales massa mi est. Lectus tincidunt maecenas auctor purus, egestas ornare dui. Cursus enim turpis id arcu sagittis dignissim quam justo. Eget neque mus semper ac dictumst. Sit volutpat pellentesque elementum integer dictum convallis ullamcorper nibh. Mi ante sed risus eu porta nibh morbi lorem a. Diam tincidunt pellentesque est sed justo vulputate rhoncus ut. Faucibus maecenas
              convallis libero nec. Lobortis suscipit neque pellentesque et lectus dolor.
            </p>
          </div>
        </div>

        {/* Last image text section------------- */}
        <div className="row my-5 ">
          <div className=" col-lg-12 col-xl-8 p-0 pe-0 pe-xl-3">
            <div className="about_sec_1_right_img_div">
              <Image
                src={banner}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-xl-4 p-0 mt-4 mt-xl-0 d-flex flex-column  justify-content-center">
            <h1 className="h1 fw-bold dark_blue">Our Values</h1>
            <h6 className="text-muted mb-3">Best Place to get your Interior Needs</h6>

            <p className="fz18 para_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, et fermentum eget urna. Turpis sodales massa mi est. Lectus tincidunt maecenas auctor purus, egestas ornare dui. Cursus enim turpis id arcu sagittis dignissim quam justo. Eget neque mus semper ac dictumst. Sit volutpat pellentesque elementum integer dictum convallis ullamcorper nibh. Mi ante sed risus eu porta nibh morbi lorem a. Diam tincidunt pellentesque est sed justo vulputate rhoncus ut. Faucibus maecenas
              convallis libero nec.
            </p>
          </div>
        </div>

        <div className="row about_swiper_section my-5">
          <h1 className="dark_blue fw-bold my-2 p-0">Our Products</h1>
          <h6 className="text-muted mb-3 p-0">Best Place to get your Interior Needs</h6>
          <p className="fz18 pe-5 mb-4 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, et fermentum eget urna. Turpis sodales massa mi est. Lectus tincidunt maecenas auctor purus, egestas ornare dui. Cursus enim turpis id arcu sagittis dignissim quam justo. Eget neque mus semper ac dictumst.</p>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <div className="about_swiper_img_div">
                <Image
                  src={banner}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />

                <div className="about_swiper_desc_div color_white d-flex align-items-center gap-2">
                  <span> Shop More</span>
                  <BsArrowRight size={21} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="about_swiper_img_div">
                <Image
                  src={banner}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />

                <div className="about_swiper_desc_div color_white d-flex align-items-center gap-2">
                  <span> Shop More</span>
                  <BsArrowRight size={21} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="about_swiper_img_div">
                <Image
                  src={banner}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />

                <div className="about_swiper_desc_div color_white d-flex align-items-center gap-2">
                  <span> Shop More</span>
                  <BsArrowRight size={21} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
