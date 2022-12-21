import React, { useState, useEffect, useContext } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import GlobalProductSection from "../../components/GlobalProductSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";;
import { MiscellaneousContext } from "../../context/MiscellaneousContext";

export default function ProductSlug() {
  const { addedCart } = useContext(MiscellaneousContext);
  const router = useRouter();
  const slug = router.query.slug;

  const [singleProduct, setSingleProduct] = useState({});
  const [singleProductId, setSingleProductId] = useState({});
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?url=${slug}`);
        setSingleProduct(res.data[0]);
        setSingleProductId(res.data[0]._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct();
  }, [slug]);

  const [singleCategoryUrl, setSingleCategoryUrl] = useState([]);
  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/${singleProduct.category}`);
        setSingleCategoryUrl(res.data.url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCategory();
  }, [singleProduct]);

  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${singleCategoryUrl}`);
        setCatProducts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryProduct();
  }, [singleCategoryUrl]);

  const addToCart = async () => {
    addedCart();
    router.push("/cart");
  };

  return (
    <div className="single_product_page_wrapper px-0 ">
      <div className="row px-2 px-sm-5  ">
        <div className="col-12 col-xl-6  ">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper">
            {singleProduct&&<SwiperSlide className="">
              <div className="single_product_swiper_img_div">
                <Image
                  className="rounded-3"
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${singleProduct.image}`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </SwiperSlide>}
          </Swiper>
        </div>

        {singleProduct && (
          <div className="col-12 col-xl-6 mt-4 mt-xl-0 ps-4 m-0 p-0">
            <h1 className="h1  dark_blue fw-semibold">{singleProduct.name}</h1>
            <h6 className="h5 dark_blue text_muted">Nrs. {singleProduct.price || "Not Mentioned"} /-</h6>
            <p className="fz18 ">{singleProduct.description}</p>
            <hr className="mt-4" />
            {/* <h4 className="h4 dark_blue">Details</h4> */}
            {/* <p className="fz18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacinia velit tellus in volutpat feugiat. Habitant fringilla sed dui sit eu nec. Ultricies sit dolor faucibus vitae ullamcorper pellentesque. Vulputate sed pulvinar arcu sit purus leo. Et dui mattis donec scelerisque cursus facilisi nunc in id. Et ultrices sapien ipsum pharetra eget vulputate aliquet. Vestibulum est.</p> */}
            {/* <hr className="mt-4" /> */}

            <div className="row mt-3">
              <div className="col">
                <h5 className="h5 dark_blue">Colors</h5>
                {singleProduct &&
                  singleProduct.color &&
                  singleProduct.color[0].split(",").map((color, index) => (
                    <div
                      key={index}
                      className="form-check form-check-inline  ">
                      <input
                        className="form-check-input select_color_input_custom "
                        type="radio"
                        name="inlineRadioOptions"
                        id="colorInputChooseOption"
                        value="option1"
                      />
                      <label
                        className="form-check-label select_size_input_custom_label"
                        htmlFor="colorInputChooseOption">
                        {color}
                      </label>
                    </div>
                  ))}
              </div>
              <div className="col">
                <h5 className="h5 dark_blue">Sizes</h5>
                {singleProduct &&
                  singleProduct.size &&
                  singleProduct.size[0].split(",").map((size, index) => (
                    <div
                      key={index}
                      className="form-check form-check-inline ">
                      <input
                        className="form-check-input select_size_input_custom "
                        type="radio"
                        name="sizeSelectRadio"
                        id="radioSizeSelect"
                        value="option1"
                      />
                      <label
                        className="form-check-label select_size_input_custom_label"
                        htmlFor="radioSizeSelect">
                        {size}
                      </label>
                    </div>
                  ))}
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-sm-6  d-flex align-items-center gap-3">
                <h4 className="h4 dark_blue">QTY</h4>
                <input
                  autoComplete="off"
                  type="number"
                  className="form-control text-center w-25 quantity_input rounded-1 "
                  id="exampleFormControlInput1"
                  placeholder="1"
                />
              </div>

              <div className="col-12 col-sm-6 mt-4 mt-sm-0 ">
                <button
                  onClick={addToCart}
                  type="button"
                  className="btn add_cart_btn rounded-1 fw-semibold">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="row mt-5">
              <div className="d-flex align-items-center gap-3">
                <h6 className="m-0 h6 dark_blue">SHARE</h6>
                <AiOutlineTwitter
                  size={34}
                  className=" footer_icon_div1 rounded-circle  p-2 ms-5"
                />
                <RiFacebookFill
                  size={34}
                  className=" footer_icon_div2 rounded-circle  p-2"
                />
                <AiFillInstagram
                  size={34}
                  className=" footer_icon_div3 rounded-circle  p-2"
                />
              </div>
            </div>
          </div>
        )}

        <div className="row mt-5 pt-4 p-0 m-0">
          <h2 className="text-center h2 fw-semibold pb-4 dark_blue">Similar Products</h2>
          <GlobalProductSection products={catProducts} />
        </div>
      </div>
    </div>
  );
}
