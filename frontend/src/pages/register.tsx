import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { useForm } from "react-hook-form";
import Api from "../service/Api.js";
let CallApi = new Api();
import { MiscellaneousContext } from "../context/MiscellaneousContext.js";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();
  console.log(handleAllField);

  const registerUser = async () => {
    try {
      const res = await CallApi.storeData(`user/signup`, handleAllField);
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_wrapper d-flex align-items-center justify-content-center container">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="d-flex flex-column align-items-center w-50">
        <h1 className="h1 pb-2 dark_blue fw-bold">Create an account </h1>
        <p className="fz18">Signup to get the most out of Falcon Traders</p>

        <div className="w-100 my-2">
          <input
            type="text"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Full Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span className="text-danger fw-semibold">Full Name is required</span>}
        </div>

        <div className="w-100 my-2">
          <input
            type="email"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-danger fw-semibold">Email is required</span>}
        </div>

        <div className="w-100 my-2">
          <input
            type="password"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-danger fw-semibold">Password is required</span>}
        </div>

        <div className="w-100 my-2">
          <input
            type="password"
            className="form-control register_input rounded-1 py-3 "
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <span className="text-danger fw-semibold">Confirm Password is required</span>}
          {handleAllField.password && handleAllField.confirmPassword && handleAllField.password != handleAllField.confirmPassword && <span className="text-danger fw-semibold">Password does not match !</span>}
        </div>

        <div className=" d-flex  w-100 justify-content-between py-2">
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
          type="submit"
          className="btn  w-100 login_button rounded-1">
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
      </form>
    </div>
  );
}
