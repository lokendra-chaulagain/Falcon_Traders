import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";


export default function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="row">
        <div className="col-8 d-flex  align-items-center justify-content-center ">
          <h5 className="fw-semibold h5 dark_blue">SUBSCRIBE TO OUR NEWSLETTER</h5>
          <input
          autoComplete="off"
            type="email"
            className="form-control w-50 rounded-0 subscribe_input ms-5"
            placeholder="Your E-mail Here"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <BsArrowRight size={26} color="grey"  />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center gap-3 dark_blue">
          JOIN US ON
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
      <hr />
      <div className="row footer_last_row ">
        <div className="col small d-flex align-items-center justify-content-center dark_blue">TERMS & CODITION POLICY</div>
        <div className="col h4 d-flex align-items-center justify-content-center dark_blue">Logo Here</div>
        <div className="col d-flex align-items-center justify-content-center dark_blue">© 2019 Bamboo All Rights Reserved</div>
      </div>
    </div>
  );
}
