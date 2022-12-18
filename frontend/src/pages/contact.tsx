import React, { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Api from "../service/Api.js";
import { MiscellaneousContext } from "../context/MiscellaneousContext.js";
let CallApi = new Api();

export default function Contact() {
  const { msgSendSuccess, somethingWentWrong } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const sendMail = async () => {
    try {
      const res = await CallApi.storeData(`contact`, handleAllField);
      res && msgSendSuccess();
      reset();
    } catch (error) {
      somethingWentWrong();
      console.log(error);
    }
  };

  return (
    <div className="contact_page_wrapper">
      <div className="container">
        <div className="shadow_box py-5  px-4">
          <div className="contact_heading_div">
            <h2 className="text-center mb-5 contact_heading ">Get In Touch</h2>
          </div>

          <div className="row ">
            <form
              className=" col-12 col-lg-6"
              onSubmit={handleSubmit(sendMail)}>
              <h4 className=" h4 dark_blue">Leave us a message</h4>
              <div>
                <input
                  className="form-control form-control-lg contact_input rounded-0 mt-4 py-3"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-danger fw-semibold">Full Name is required</span>}
              </div>

              <div>
                <input
                  className="form-control form-control-lg contact_input rounded-0 mt-4 py-3"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-danger fw-semibold">Email is required</span>}
              </div>

              <div>
                <textarea
                  className="form-control form-control-lg contact_input rounded-0 mt-4 contact_text_area"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                />
                {errors.message && <span className="text-danger fw-semibold">Message is required</span>}
              </div>
              <button
                type="submit"
                className="btn btn-lg w-100 mt-4 rounded-1 login_button">
                Send
              </button>
            </form>

            <div className=" col-12 col-lg-6 mt-5 mt-lg-0">
              <div className="d-flex align-items-center gap-2 mb-4 fz18_dark_blue">
                <GoLocation size={22} />
                Infomation technologies building, Victoria Island, Lagos, Nigeria.
              </div>

              <div className="d-flex align-items-center gap-2 mb-4 fz18_dark_blue">
                <BsTelephone size={20} />
                +234 081-1236-4568
              </div>

              <div className="d-flex align-items-center gap-2 mb-4 fz18_dark_blue">
                <MdOutlineMailOutline size={22} />
                hello@info.com.ng
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <AiFillYoutube
                  size={22}
                  className="contact_social_icon"
                />
                <AiFillInstagram
                  size={22}
                  className="contact_social_icon"
                />
                <GrFacebookOption
                  size={22}
                  className="contact_social_icon"
                />
                <AiOutlineTwitter
                  size={22}
                  className="contact_social_icon"
                />
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.142367895714!2d85.30715908700091!3d27.685844849236144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1837725d4d59%3A0x9814faeae42622df!2sGem%20Plasticrafts%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1668755430995!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: "6" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
