import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroBanner({ banner }: any) {
  return (
    <div>
      {banner && banner.status === "1" && (
        <div className="hero_banner_img_div">
          <Image
            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${banner.image}`}
            layout="fill"
            objectFit="cover"
            alt=""
          />

          <div className="title_button_div">
            <h1 className="h1 fw-bold color_white">{banner.title}</h1>
            <Link href={"/product"}>
              <button
                type="button"
                className="btn hero_button px-4 mt-4 rounded-1 px-5 fw-semibold py-2">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
