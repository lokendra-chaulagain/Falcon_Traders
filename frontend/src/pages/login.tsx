import React from "react";
import { BiUser } from "react-icons/bi";
import { TbKey } from "react-icons/tb";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login_wrapper my-5">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="h1 pb-2 fw-bold dark_blue">Welcome back ! </h1>
        <p className="fz18">Sign in to get the most out of Falcon Traders</p>

        <div className="d-flex align-items-center login_input_div  px-2 mt-5 rounded-1 py-1 w-25">
          <BiUser size={25} />
          <input
            type="text"
            className="form-control login_input  "
            placeholder="Username"
          />
        </div>

        <div className="d-flex align-items-center login_input_div  px-2 mt-3 rounded-1 py-1 w-25">
          <TbKey size={25} />
          <input
            type="password"
            className="form-control  login_input "
            placeholder="Password"
          />
        </div>

        <div className=" d-flex  w-25 justify-content-between py-3">
          <div className=" form-check">
            <input
              type="checkbox"
              className="form-check-input check_box rounded-0"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1">
              Accept Terms & Conditions
            </label>
          </div>
          <div className="">
            <p className="forgot_pass">Forgot Password?</p>
          </div>
        </div>

        <button
          type="button"
          className="btn  w-25 login_button rounded-1">
          Login
        </button>
        <small className="py-3 text-muted">
          Don’t Have an account ?{" "}
          <Link href={"/register"}>
            <span className="forgot_pass">Create One</span>
          </Link>
        </small>
      </div>
    </div>
  );
}
