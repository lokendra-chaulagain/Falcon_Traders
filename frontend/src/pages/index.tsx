import React, { useEffect, useState } from "react";
import GlobalProductSection from "../components/GlobalProductSection";
import Category from "../components/home/Category";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HeroBanner from "../components/home/HeroBanner";
import Review from "../components/home/Review";
import TextImageSection from "../components/home/TextImageSection";
import Api from "../service/Api.js";
let CallApi = new Api();

function Index() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        let res = await CallApi.fetchData(`banner`);
        res && setBanner(res[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanner();
  }, []);

  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const fetchAllTrendingProduct = async () => {
      try {
        let res = await CallApi.fetchData(`product?topSelling=1`);
        // Note topSelling==trending
        res && setTrendingProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrendingProduct();
  }, []);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    const fetchAllFeaturedProduct = async () => {
      try {
        let res = await CallApi.fetchData(`product?featured=1`);
        res && setFeaturedProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFeaturedProduct();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        let res = await CallApi.fetchData(`category`);
        res && setCategories(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategory();
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchAllReview = async () => {
      try {
        let res = await CallApi.fetchData(`review`);
        res && setReviews(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllReview();
  }, []);

  return (
    <div>
      <HeroBanner banner={banner} />
      <div className="div px-2 px-md-5">
        <Category categories={categories} />
        <div>
          <h2 className="text-center mb-5 dark_blue">Trending Products</h2>
          <GlobalProductSection products={trendingProducts} />
        </div>
        <TextImageSection />
        <FeaturedProduct products={featuredProducts} />
      </div>
      <Review reviews={reviews} />
    </div>
  );
}

export default Index;
