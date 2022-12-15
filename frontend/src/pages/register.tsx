import React from "react";
import { BsGoogle } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

export default function Register() {
  return (
    <div className="login_wrapper my-5">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="h1 pb-2">Create an account </h1>
        <small>Signup to get the most out of Falcon Traders</small>

        <div className="w-25 my-2">
          <input
            type="text"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Full Name"
          />
        </div>

        <div className="w-25 my-2">
          <input
            type="text"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Email"
          />
        </div>

        <div className="w-25 my-2">
          <input
            type="text"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Password"
          />
        </div>

        <div className="w-25 my-2">
          <input
            type="text"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Confirm Password"
          />
        </div>

        <div className=" d-flex  w-25 justify-content-between py-2">
          <div className=" form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="">
            <p>Forgot Password?</p>
          </div>
        </div>

        <button
          type="button"
          className="btn  w-25 login_button rounded-1">
          Login
        </button>
        <small className="py-3 text-muted">Already have an account ? Create One</small>
        <small className="py-3 text-muted">OR</small>

        <div className="d-flex gap-2">
          <GrFacebookOption
            size={34}
            className=" footer_icon_div2 rounded-circle  p-2"
          />
          <BsGoogle
            size={34}
            className=" footer_icon_div3 rounded-circle  p-2"
          />
        </div>

        <div></div>
      </div>
    </div>
  );
}
