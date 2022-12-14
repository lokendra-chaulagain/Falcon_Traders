import React from "react";
import Image from "next/image";
import banner from "../../asset/banner.png";
import { BsArrowRight } from "react-icons/bs";

export default function TextImageSection() {
  return (
    <div className="row d-flex align-items-start  text_img_wrapper">
      <div className="col-6 text_img_section_img_div">
        <Image
          src={banner}
          layout="fill"
          objectFit="scale-down"
          alt=""
        />
      </div>

      <div className="col-6 d-flex flex-column">
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempore, amet libero quia commodi vel, doloribus repellat est eius unde magnam repudiandae nisi itaque? Eaque similique accusamus sequi distinctio possimus voluptate quis rerum explicabo. Saepe obcaecati, error debitis facilis modi ipsa possimus quisquam! Id minima facere natus, fugiat dolore sapiente?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quam accusantium beatae, dolore labore incidunt suscipit nesciunt illo aut, nihil laudantium harum ullam! Libero incidunt cumque, quam itaque, vitae quo eum inventore adipisci exercitationem nesciunt quasi delectus mollitia eaque, sint in ipsam natus. Quaerat totam alias deserunt beatae cumque autem temporibus, et maiores earum delectus quod possimus sint dicta accusamus at voluptatum hic voluptatibus atque. Ipsam facere
          alias molestias ad minus labore hic suscipit, eveniet, tempore voluptates possimus nostrum aliquid fugit, at autem? Necessitatibus, inventore unde. Porro sint in corporis maxime quo quos perspiciatis similique temporibus, impedit unde, ab officiis odit adipisci atque! Quam cumque ut necessitatibus. Laborum blanditiis temporibus velit, at voluptatum quis nam sit eligendi dolorem, nemo molestias!
        </p>

        <div className="">
          Shop More <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
