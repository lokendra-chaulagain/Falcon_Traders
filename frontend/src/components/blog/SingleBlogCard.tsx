import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";
import { format } from "timeago.js";
import parse from "html-react-parser";
import Link from "next/link";

export default function SingleBlogCard({ blogs }: any) {
  return (
    <div>
      {blogs &&
        blogs.map((blog: any, index: any) => (
          <div
            key={index}
            className="single_blog_card mb-5 row ">
            <div className=" col-12  col-md-5 single_blog_img_div">
              <Image
                src={banner}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>

            <div className="col-12 col-md-7 ps-3   ps-md-4  pe-0  pe-md-5 d-flex flex-column justify-content-center mt-4 mt-md-0">
              <h2 className="h2 dark_blue">{blog.title}</h2>
              <div className="d-flex align-items-center text-muted gap-4  ">
                <p>Lokendra Chaulagain</p>
                <p>
                  {format(blog.createdAt)} ({blog.timeRead} mins)
                </p>
              </div>

              <p className="fz18">{parse(blog.description)}</p>

              <Link href={`/blog/${blog.url}`}>
                <button
                  type="button"
                  className="btn btn-link text-start p-0 m-0 pb-4 pb-md-0">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
