import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { CgEreader } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Api from "../../service/Api.js";
import { useRouter } from "next/router";
let CallApi = new Api();

export default function Navbar() {
  const logo ="https://res.cloudinary.com/dxp4ne8fl/image/upload/v1671598656/logo_fmyg4z.png"
  const router = useRouter();
  const path = router.route;

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
          <div className="d-none d-md-block">
            <div className="dropdown">
              <button
                className="btn rounded-0 dropdown-toggle btn-lg px-5 nav_dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </button>
              <ul className="dropdown-menu custom_menu_dropdown rounded-0  ">
                {categories &&
                  categories.map((category: any, index: any) => (
                    <Link
                      key={index}
                      href={`/category/${category.url}`}>
                      <li className="py-2 ps-3 custom_menu_dropdown_item">{category.name}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>

          <div className="nav_logo_img_div  ">
            <Link href={"/"}>
              <Image
                className="rounded-2 "
                src={logo}
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </Link>
          </div>

          <div className="d-flex align-items-center gap-4">
            <Link href={"/cart"}>
              <BsCartFill
                className="cp color_orange"
                size={30}
              />
            </Link>

            <Link href={"/register"}>
              <BiUserCircle
                className="cp color_orange"
                size={30}
              />
            </Link>

            <GiHamburgerMenu
              className="nav_hamburger"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              size={30}
            />
          </div>

          <div
            className="offcanvas offcanvas-end"
            tab-index="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h4
                className="offcanvas-title dark_blue"
                id="offcanvasNavbarLabel">
                MENU
              </h4>
              <button
                type="button"
                className="btn-close offcanvas_clear_icon"
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
                    <div
                      className={`${path === "/" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <FaHome size={24} /> Home
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/product"}
                    className="nav-link  "
                    aria-current="page">
                    <div
                      className={`${path === "/product" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <AiOutlineShop size={24} /> Shop
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/about"}
                    className="nav-link  "
                    aria-current="page">
                    <div
                      className={`${path === "/about" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <BsInfoCircle size={24} /> About
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/blog"}
                    className="nav-link  "
                    aria-current="page">
                    <div
                      className={`${path === "/blog" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <CgEreader size={24} /> Blog
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/contact"}
                    className="nav-link  "
                    aria-current="page">
                    <div
                      className={`${path === "/contact" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <BsTelephone size={24} /> Contact
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href={"/register"}
                    className="nav-link  "
                    aria-current="page">
                    <div
                      className={`${path === "/register" ? "nav_link_active d-flex align-items-center gap-2" : " d-flex align-items-center gap-2 nav_link"}`}
                      data-bs-dismiss="offcanvas">
                      <FaCashRegister size={24} /> Register
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
