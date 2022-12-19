import React from "react";
import Image from "next/image";
import banner from "../../asset/banner.png";
import { BsArrowRight } from "react-icons/bs";

export default function TextImageSection() {
  return (
    <div className="row d-flex align-items-start  text_img_wrapper">
      <div className="col-12 col-xl-6 text_img_section_img_div">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="col-13 col-xl-6 d-flex flex-column  mt-4 mt-xl-0 ">
        <h1 className="h1 fw-bold dark_blue">Lorem, ipsum dolor.</h1>
        <p className="global_para d-none d-sm-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quam accusantium beatae, dolore labore incidunt suscipit nesciunt illo aut, nihil laudantium harum ullam! Libero incidunt cumque, quam itaque, vitae quo eum inventore adipisci exercitationem nesciunt quasi delectus mollitia eaque, sint in ipsam natus. Quaerat totam alias deserunt beatae cumque autem temporibus, et maiores earum delectus quod possimus sint dicta accusamus at voluptatum hic voluptatibus atque. Ipsam facere
          alias. Laborum blanditiis temporibus velit, at voluptatum quis nam sit eligendi dolorem, nemo molestias!
        </p>

        <p className="global_para d-block d-sm-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt suscipit nesciuntia eaque, sint in et maiores earum delectus quod possimus sint dicta accusamus at voluptatum hic voluptatibus atque. Ipsam facere \</p>

        <div className="mt-4 dark_blue cp">
          Shop More <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
