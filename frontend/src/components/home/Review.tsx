import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { ImQuotesRight } from "react-icons/im";

export default function Review() {
  const reviews = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias veritatis, recusandae illo facilis labore, commodi numquam adipisci ipsum ipsa, perspiciatis minima",
      name: "Lokendra Chaulagain",
      position: "CEO , Founder",
    },

    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias veritatis, recusandae illo facilis labore, commodi numquam adipisci ipsum ipsa, perspiciatis minima",
      name: "Lokendra Chaulagain",
      position: "CEO , Founder",
    },

    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias veritatis, recusandae illo facilis labore, commodi numquam adipisci ipsum ipsa, perspiciatis minima",
      name: "Lokendra Chaulagain",
      position: "CEO , Founder",
    },
  ];
  return (
    <div className="review_wrapper">
      <div className="container">
        <h2 className="text-center h2 fw-bold dark_blue">Reviews</h2>

        <div className="row">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            //   pagination={{
            //     clickable: true,
            //   }}
            modules={[FreeMode, Pagination]}
            className="mySwiper">
            {reviews &&
              reviews.map((review: any, index: any) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="d-flex justify-content-center pb-3 pt-4">
                      <ImQuotesRight size={30} className="color_yellow" />
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
