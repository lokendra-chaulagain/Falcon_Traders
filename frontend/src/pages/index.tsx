import React from "react";
import Category from "../components/home/Category";
import HeroBanner from "../components/home/HeroBanner";
import Review from "../components/home/Review";
import TextImageSection from "../components/home/TextImageSection";
import Trending from "../components/home/Trending";

function Index() {
  return (
    <div>
      <HeroBanner />
      <Category />
      <Trending />
      <TextImageSection />
      <Review />
    </div>
  );
}

export default Index;
