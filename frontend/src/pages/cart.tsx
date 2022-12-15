import Image from "next/image";
import React from "react";
import banner from "../asset/banner.png";
import { MdOutlineClear } from "react-icons/md";

export default function Cart() {
  return (
    <div>
      <div className="row mt-5 pt-5">
        <div className="col-8">
          <p className="h1 fw-bold">Shopping Cart</p>

          <div className="d-flex justify-content-between text-muted">
            <h5> Product</h5>
            <h5> Size</h5>
            <h5> Quantity</h5>
            <h5> Price</h5>
            <h5>Action </h5>
          </div>
          <div className="cart_item d-flex align-items-center justify-content-between mt-3">
            <div className="div">
              <Image
                className="rounded-2"
                src={banner}
                height={100}
                width={100}
                objectFit="cover"
                alt=""
              />
            </div>

            <h6> Size</h6>
            <h6> Size</h6>
            <h6> Size</h6>
            <MdOutlineClear size={25} />
          </div>
        </div>

        {/* ------------------------------ */}
        <div className="col-4">
          <h1 className="fw-bold">Payment Info</h1>
          <h5 className="h5 mb-3">Choose your payemet option</h5>
          <div className="form-check mb-2">
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault1">
              Credit Card
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault1">
              e-Sewa
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault1">
              Cash On Delivery
            </label>
          </div>

          <h5 className="h5 mt-4 mb-3">Your Payment Details</h5>
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
    </div>
  );
}
