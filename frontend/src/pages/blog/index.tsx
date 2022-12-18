import Image from "next/image";
import React, { useState, useEffect } from "react";
import banner from "../../asset/banner.png";
import SingleBlogCard from "../../components/blog/SingleBlogCard";
import Api from "../../service/Api.js";
let CallApi = new Api();
import { format } from "timeago.js";
import parse from "html-react-parser";

export default function Blog() {
  const tags = [
    {
      name: "technology",
    },

    {
      name: "Cloud Computing",
    },

    {
      name: "Data Science",
    },

    {
      name: "Blockchain",
    },

    {
      name: "Machine Learning",
    },
  ];

  const [featuredBlogs, setFeaturedBlogs] = useState<any>([]);
  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        let res = await CallApi.fetchData(`blog?featured=1`);
        setFeaturedBlogs(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeaturedBlogs();
  }, []);

  const [bestPickBlogs, setBestPickBlogs] = useState<any>([]);
  useEffect(() => {
    const fetchBestPickBlogs = async () => {
      try {
        let res = await CallApi.fetchData(`blog?bestPick=1`);
        setBestPickBlogs(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestPickBlogs();
  }, []);

  const [allBlog, setAllBlog] = useState<any>([]);
  useEffect(() => {
    const fetchAllBlog = async () => {
      try {
        let res = await CallApi.fetchData(`blog`);
        setAllBlog(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlog();
  }, []);

  return (
    <div>
      <div className="blog_featured_article_div">
        <div className="featured_article_image_div">
          <Image
            src={banner}
            layout="fill"
            objectFit="cover"
            alt=""
          />

          {featuredBlogs[0] && (
            <div className="featured_article_desc_div  py-5 px-5 ">
              <h4 className="h4 text-muted pt-5">FEATURED ARTICLE</h4>
              <h1 className="h1 fw-bold">{featuredBlogs[0].title}</h1>
              <div className="d-flex align-items-center text-muted gap-5">
                <p>Lokendra Chaulagain</p>
                <p>
                  {format(featuredBlogs[0].createdAt)} ({featuredBlogs[0].timeRead} mins)
                </p>
              </div>
              <p className="fz18">{parse(featuredBlogs[0].description)}</p>
            </div>
          )}
        </div>
      </div>

      <h1 className="text-center my-5">Best Picks</h1>

      <div className="container ">
        <SingleBlogCard blogs={bestPickBlogs} />
      </div>

      <div className="second_featured_article_img_div">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt=""
        />

        {featuredBlogs[1] && (
          <div className="second_featured_article_desc_div  py-5 px-5 ">
            <h4 className="h4 text-muted pt-5">FEATURED ARTICLE</h4>
            <h1 className="h1 fw-bold">{featuredBlogs[1].title}</h1>
            <div className="d-flex align-items-center text-muted gap-5">
              <p>Lokendra Chaulagain</p>
              <p>
                {format(featuredBlogs[1].createdAt)} ({featuredBlogs[1].timeRead} mins)
              </p>
            </div>
            <p className="fz18">{parse(featuredBlogs[1].description)}</p>
          </div>
        )}
      </div>

      <div className="container my-5">
        <div className="tag_row row">
          <div className="col-12 col-md-10">
            <SingleBlogCard blogs={allBlog} />
          </div>
          <div className="col-2 d-none d-md-block">
            <h4>TAGS</h4>

            {tags &&
              tags.map((tag: any, index: any) => (
                <div
                  key={index}
                  className="form-check mb-3 ">
                  <input
                    className="form-check-input display-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1">
                    {tag.name}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
