import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { ImQuotesRight } from "react-icons/im";

export default function Review({ reviews }: any) {
  return (
    <div className="review_wrapper">
      <div className="container">
        <h2 className="text-center h2 fw-bold dark_blue">Reviews</h2>

        <div className="row">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            freeMode={true}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, FreeMode]}
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
            {reviews &&
              reviews.map((review: any, index: any) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="d-flex justify-content-center pb-3 pt-4">
                      <ImQuotesRight
                        size={30}
                        className="color_yellow"
                      />
                    </div>
                    <div className="d-flex flex-column  align-items-center">
                      <p className="text-center fz18">{review.description}</p>
                      <h5 className="pt-4">{review.name}</h5>
                      <small className="text-muted">{review.position}</small>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
