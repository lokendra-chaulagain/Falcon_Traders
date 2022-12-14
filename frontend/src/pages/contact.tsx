import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Contact() {
  return (
    <div
      className="container"
      style={{ marginTop: "150px" }}>
      <div className="shadow_box py-5 px-4">
        <h2 className="text-center mb-5">Get In Touch</h2>

        <div className="row ">
          <div className="col-6">
            <h5>Leave us a message</h5>
            <div>
              <input
                className="form-control form-control-lg contact_input rounded-0 mt-4"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                className="form-control form-control-lg contact_input rounded-0 mt-4"
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                style={{ minHeight: "200px" }}
                className="form-control form-control-lg contact_input rounded-0 mt-4"
                placeholder="Your Message"
              />
            </div>
            <button
              type="button"
              className="btn btn-lg w-100 mt-5 rounded-1 login_button">
              Send
            </button>
          </div>

          <div className="col-6">
            <div className="d-flex align-items-center gap-2 mb-4">
              <GoLocation size={22} />
              Infomation technologies building, Victoria Island, Lagos, Nigeria.
            </div>

            <div className="d-flex align-items-center gap-2 mb-4">
              <BsTelephone size={20} />
              +234 081-1236-4568
            </div>

            <div className="d-flex align-items-center gap-2 mb-4">
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
  );
}
