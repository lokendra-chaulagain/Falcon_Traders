import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { useForm } from "react-hook-form";
import Api from "../service/Api.js";
let CallApi = new Api();
import { MiscellaneousContext } from "../context/MiscellaneousContext.js";
import Link from "next/link";

export default function Register() {
  const { somethingWentWrong, createSuccess } = useContext(MiscellaneousContext);

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
      createSuccess();
    } catch (error) {
      somethingWentWrong();
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
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span className="text-danger fw-semibold">Password is required of Length 6</span>}
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
              className="form-check-input check_box rounded-0 cp"
              id="exampleCheck1"
            />
            <label
              className="form-check-label cp "
              htmlFor="exampleCheck1">
              Accept Terms & Conditions
            </label>
          </div>
          <div className="forgot_pass">
            <p>Forgot Password?</p>
          </div>
        </div>

        <button
          type="submit"
          className="btn  w-100 login_button rounded-1">
          Login
        </button>
        <small className="pb-2 pt-3 text-muted">
          Already have an account ?{" "}
          <Link href={"login"}>
            <span className="forgot_pass">Login</span>
          </Link>
        </small>
        <small className="pb-2 text-muted ">OR</small>

        <div className="d-flex gap-2">
          <GrFacebookOption
            size={34}
            className=" footer_icon_div2 rounded-circle cp  p-2"
          />
          <BsGoogle
            size={34}
            className=" footer_icon_div3 rounded-circle cp  p-2"
          />
        </div>
      </form>
    </div>
  );
}
