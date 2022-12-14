import React from "react";
import { BiUser } from "react-icons/bi";
import { TbKey } from "react-icons/tb";

export default function Register() {
  return (
    <div className="login_wrapper my-5">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="h1 pb-2">Create an account </h1>
        <small>Signup to get the most out of Falcon Traders</small>

        <div className="d-flex align-items-center login_input_div px-2 mt-5 rounded-1 py-1 w-25">
          <BiUser size={25} />
          <input
            type="text"
            className="form-control login_input "
            placeholder="Username"
          />
        </div>

        <div className="d-flex align-items-center login_input_div px-2 mt-3 rounded-1 py-1 w-25">
          <TbKey size={25} />
          <input
            type="password"
            className="form-control  login_input"
            placeholder="Password"
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
        <small className="py-3 text-muted">Don’t Have an account ? Create One</small>
      </div>
    </div>
  );
}
