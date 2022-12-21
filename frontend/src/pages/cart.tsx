import Image from "next/image";
import React from "react";
import { MdOutlineClear } from "react-icons/md";
import Link from "next/link";

export default function Cart() {
  const demo = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1671595876/gem/2022-12-21T04-11-11.778Z.jpg";
  const products = [
    {
      name: "test1",
    },

    {
      name: "test2",
    },

    {
      name: "test3",
    },
  ];
  return (
    <div className="cart_page_wrapper">
      <div className="row px-2 px-md-5">
        <div className="col-12 col-md-6 col-xl-8">
          <p className="h2 fw-bold dark_blue">Shopping Cart ({products && products.length} items) </p>

          <div className="row">
            {products &&
              products.map((product: any, index: any) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-lg-6 col-xl-4">
                  <div className=" p-0 card rounded-1 overflow-hidden mt-5">
                    <div className="cart_image_div">
                      <Image
                        className=""
                        src={demo}
                        objectFit="cover"
                        layout="fill"
                        alt=""
                      />
                    </div>

                    <div className="cart_desc px-3 pb-3">
                      <div className="d-flex justify-content-end mt-2 ">
                        <MdOutlineClear
                          type="button"
                          className="cp dark_blue"
                          size={26}
                        />
                      </div>
                      <h4 className="h6 dark_blue">Product Name</h4>
                      <h4 className="h6 dark_blue">Price : 1000 /-</h4>

                      <div className=" d-flex align-items-center gap-3">
                        <h4 className="h6 dark_blue">Quantity</h4>
                        <input
                          autoComplete="off"
                          type="number"
                          className="form-control text-center w-25 quantity_input rounded-0 "
                          id="exampleFormControlInput1"
                          placeholder="1"
                        />
                      </div>
                      <h4 className="h6 dark_blue">Size : </h4>
                      <h4 className="h6 dark_blue">Color : </h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <hr className="mt-5" />
          <div className="d-flex flex-column align-items-start">
            <h4 className="dark_blue h5 ">Subtotal= 1000 /-</h4>
            <h4 className="dark_blue h5">Shipping =300 /-</h4>
            <hr className="w-25" />
            <h4 className="dark_blue h4">Total = 1300 /-</h4>
          </div>
        </div>

        {/* ------------------------------ */}
        <div className="col-12   col-md-6 col-xl-4 mt-5 com-md-0   ">
          <div className="px-4 cart_payment_info py-5 rounded-3">
            <h1 className="fw-bold dark_blue h1">Payment Info</h1>
            <h5 className="h5 dark_blue mb-3">Choose your payemet option</h5>
            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom "
                type="radio"
                name="flexRadioDefault"
                id="credit"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="credit">
                Credit Card
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input  select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="eSewa"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="eSewa">
                e-Sewa
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="cash"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="cash">
                Cash On Delivery
              </label>
            </div>

            <h5 className="h5 mt-4 dark_blue mb-3">Your Payment Details</h5>
            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Full Name"
            />

            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Card Number"
            />

            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="Exp Date"
                />
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn login_button btn-lg w-100 rounded-1">
              Confirm
            </button>
          </div>
        </div>
        <hr className="mt-5" />
        <Link href={"/product"}>
          <h5 className="dark_blue cp">
            {" "}
            <span className="h3">←</span> Continue Shopping
          </h5>
        </Link>
      </div>
    </div>
  );
}
