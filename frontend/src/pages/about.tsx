import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Api from "../service/Api.js";
import Link from "next/link.js";
let CallApi = new Api();

export default function About() {
  const banner1 = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1671598674/banner4_qap2db.jpg";
  const banner2 = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1671598841/fa_yrzbzr.jpg";
  const banner3 = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1671598836/banner3_i7nnxs.jpg";

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
                src={banner1}
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
                src={banner2}
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
                src={banner3}
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
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            freeMode={true}
            loop={true}
            navigation={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            breakpoints={{
              1650: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper">
            {products &&
              products.map((product: any, index: any) => (
                <SwiperSlide key={index}>
                  <Link href={`/product/${product.url}`}>
                    <div className="about_swiper_img_div">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${product.image}`}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />

                      <div className="about_swiper_desc_div color_white d-flex align-items-center gap-2">
                        <span> Shop More</span>
                        <BsArrowRight size={21} />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
