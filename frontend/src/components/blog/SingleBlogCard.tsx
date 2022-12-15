import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";

export default function SingleBlogCard() {
  return (
    <div>
      <div className="single_blog_card mb-5 row ">
        <div className="col-5 single_blog_img_div">
          <Image
            src={banner}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>

        <div className="col-7 ps-4 pe-5 d-flex flex-column justify-content-center">
          <h2>Culpa sit Laboris Exercitation ea Fugiat</h2>
          <div className="d-flex align-items-center text-muted gap-5">
            <p>Lokendra Chaulagain</p>
            <p>May7,2019(6 mins read)</p>
          </div>

          <p>
            ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim
            aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.{" "}
          </p>

          <button
            type="button"
            className="btn btn-link text-start">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
