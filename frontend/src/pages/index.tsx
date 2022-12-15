import React from "react";
import Category from "../components/home/Category";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HeroBanner from "../components/home/HeroBanner";
import Review from "../components/home/Review";
import TextImageSection from "../components/home/TextImageSection";
import Trending from "../components/home/Trending";

function Index() {
  return (
    <div>
      <HeroBanner />
      <div className="div px-5">
        <Category />
        <Trending />
        <TextImageSection />
        <FeaturedProduct/>
      </div>
      <Review />
    </div>
  );
}

export default Index;
