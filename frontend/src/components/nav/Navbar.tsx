import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar  bg-light fixed-top d-flex align-content-center justify-content-center py-4 px-5">
      <div className="container-fluid">
        <div>
          <select
            className="form-select rounded-0 ps-4 pe-5"
            aria-label="Default select example ">
            <option
              selected
              className="">
              Categories
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <a
          className="navbar-brand"
          href="#">
          Logo Here
        </a>
        <div className="d-flex align-items-center gap-5 ">
          <Link href={"/cart"}>
            <FaShoppingCart
              size={26}
              className="color_yellow cp"
            />
          </Link>
          <FaRegUserCircle
            size={26}
            className="color_yellow cp"
          />
        </div>

        <div
          className="offcanvas offcanvas-end"
          tab-index="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex mt-3"
              role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
