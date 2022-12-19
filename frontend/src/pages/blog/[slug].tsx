import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import demo from "../../asset/banner3.jpg";
import Api from "../../service/Api.js";
let CallApi = new Api();
import { format } from "timeago.js";
import parse from "html-react-parser";

export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;

  const [singleBlog, setSingleBlog] = useState<any>([]);
  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const res = await CallApi.fetchData(`blog?slug=${slug}`);
        setSingleBlog(res[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleBlog();
  }, [slug]);

  // const [blogs, setBlogs] = useState([]);
  // const fetchAllBlog = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog?category=${singleBlog.category}`);

  //     setBlogs(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   slug && fetchSingleBlog();
  //   fetchAllBlog();
  // }, [slug, singleBlog.category]);

  return (
    <div className="px-0 px-md-5">
      {singleBlog && (
        <div>
          <div className="single_blog_image_div">
            <Image
              src={demo}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>

          <div className="px-2">
            <h1 className="text-center my-4 dark_blue">{singleBlog.title}</h1>
            <div className="d-flex align-items-center justify-content-center gap-5">
              <p>Lokendra Chaulagain</p>
              <p>
                {format(singleBlog.createdAt)} ({singleBlog.timeRead} mins)
              </p>
            </div>
            <p className="global_para">{singleBlog.description && parse(singleBlog.description)}</p>

            <div className="about_author_div ">
              <h3 className="text-muted fw-semibold py-5 h3 text-center text-lg-start">ABOUT THE AUTHOR</h3>
              <div className="row">
                <div className="col-12- col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start ">
                  <div className="author_image_div">
                    <Image
                      className="rounded-circle"
                      src={demo}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col">
                  <h2 className="h2 text-center text-lg-start dark_blue">Arthur Black</h2>
                  <p className="text-muted text-center text-lg-start">@arthurblack</p>
                  <p className="global_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus adipisci quae, sint a suscipit maxime obcaecati provident accusamus ipsum veniam rerum laboriosam est, delectus soluta ad ab autem facere! Deleniti beatae accusamus exercitationem, voluptatum reprehenderit doloribus nulla hic! Aut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
