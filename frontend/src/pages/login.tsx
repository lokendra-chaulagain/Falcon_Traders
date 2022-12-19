import React, { useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../context/MiscellaneousContext.js";
import Api from "../service/Api.js";
let CallApi = new Api();

export default function Login() {
  const { somethingWentWrong, loginSuccess } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const loginUser = async () => {
    try {
      const res = await CallApi.storeData(`user/signin`, handleAllField);
      console.log(res);
      reset();
      loginSuccess();
    } catch (error) {
      somethingWentWrong();
      console.log(error);
    }
  };

  return (
    <div className="login_wrapper d-flex align-items-center justify-content-center container">
      <form
        onSubmit={handleSubmit(loginUser)}
        className="d-flex flex-column align-items-center login_form_box">
        <h1 className="h1 pb-2 dark_blue fw-bold">Welcome back! </h1>
        <p className="fz18">Sign in to get the most out of Falcon Traders</p>

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
          Do not have an account ?
          <Link href={"/register"}>
            <span className="forgot_pass">Create One</span>
          </Link>
        </small>
      </form>
    </div>
  );
}
