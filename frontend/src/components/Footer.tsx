import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

export default function Footer() {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createSubscriber = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscriber`, handleAllField);
      console.log("Form has been submitted");
      mailSendSuccess();
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div className="footer_wrapper">
      <div className="row  d-flex align-items-center px-2 px-md-5">
        <div className="col-12 col-lg-4">
          <h5 className="fw-semibold text-center text-lg-start mb-0 h5 dark_blue">SUBSCRIBE TO OUR NEWSLETTER</h5>
        </div>

        <form
          onSubmit={handleSubmit(createSubscriber)}
          className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="w-100">
            <div className="d-flex align-items-center mt-4 w-100">
              <input
                type="email"
                className="form-control  rounded-0 subscribe_input ms-0 ms-md-5 my-lg-0"
                placeholder="Your E-mail Here"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("email", { required: "Email is required" })}
              />

              <button
                type="submit"
                className="btn btn-primary btn-sm subscribe_button rounded-1">
                Subscribe
              </button>
            </div>
            {errors.email && <p className="text-danger text-center mt-0 mt-lg-2  fw-semibold ">{`${errors.email.message}`}</p>}
          </div>
        </form>

        <div className="col-12 col-lg-4 mt-4 mt-lg-2  d-flex align-items-center justify-content-center gap-3 dark_blue">
          JOIN US ON
          <a
            href="https://twitter.com/falcontech4"
            target="_blank"
            rel="noopener noreferrer">
            <AiOutlineTwitter
              size={34}
              className=" footer_icon_div1 rounded-circle cp p-2 ms-5"
            />
            ​
          </a>
          <a
            href="https://www.facebook.com/falcontechnep/"
            target="_blank"
            rel="noopener noreferrer">
            <RiFacebookFill
              size={34}
              className=" footer_icon_div2 rounded-circle cp p-2"
            />
            ​
          </a>
          <a
            href="https://www.instagram.com/falcontechnepal/"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillInstagram
              size={34}
              className=" footer_icon_div3 rounded-circle cp p-2"
            />
            ​
          </a>
        </div>
      </div>

      <hr className="mt-5 "/>
      <div className="row footer_last_row px-2 px-md-5 ">
        <div className="col small d-flex align-items-center justify-content-center dark_blue">TERMS & CODITION POLICY</div>
        {/* <div className="col d-none d-md-block h4 d-flex align-items-center justify-content-center dark_blue">Logo Here</div> */}
        <div className="col small d-flex align-items-center justify-content-center dark_blue">© 2019 Bamboo All Rights Reserved</div>
      </div>
    </div>
  );
}
