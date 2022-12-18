import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import { CgEreader } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import logo from "../../asset/logo.png";
import Image from "next/image";
import Api from "../../service/Api.js";
let CallApi = new Api();

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let res = await CallApi.fetchData(`category`);
        res && setCategories(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <nav className="navbar bg-light fixed-top py-4 px-5">
        <div className="container-fluid">
          <div>
            <select
              className="form-select  search_input rounded-0 ps-4 pe-5"
              aria-label="Default select example ">
              <option
                selected
                className="">
                Categories
              </option>
              {categories &&
                categories.map((category: any, index: any) => (
                  <option
                    key={index}
                    value="1">
                    <Link href={`/category/${category.url}`}>{category.name}</Link>
                  </option>
                ))}
            </select>
          </div>

          <div className="nav_logo_img_div">
            <Link href={"/"}>
              <Image
                className="rounded-2"
                src={logo}
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon">e</span>
          </button>
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li className="nav-item">
                  <Link
                    href={"/"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <FaHome size={24} /> Home
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/product"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <AiOutlineShop size={24} /> Shop
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/about"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <GrCircleInformation size={24} /> About
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/blog"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <CgEreader size={24} /> Blog
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/contact"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <BsTelephone size={24} /> Contact
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/register"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <BsTelephone size={24} /> Register
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/login"}
                    className="nav-link  "
                    aria-current="page">
                    <div className="d-flex align-items-center gap-2 nav_link">
                      <BsTelephone size={24} /> login
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
