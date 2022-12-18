import React, { useEffect, useState } from "react";
import Category from "../components/home/Category";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HeroBanner from "../components/home/HeroBanner";
import Review from "../components/home/Review";
import TextImageSection from "../components/home/TextImageSection";
import Trending from "../components/home/Trending";
import Api from "../service/Api.js";
let CallApi = new Api();

function Index() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const fetchAllBanner = async () => {
      try {
        let res = await CallApi.fetchData(`banner`);
        res && setBanners(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBanner();
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
      <HeroBanner />
      <div className="div px-5">
        <Category />
        <Trending />
        <TextImageSection />
        <FeaturedProduct />
      </div>
      <Review />
    </div>
  );
}

export default Index;
