import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.png";
import SingleBlogCard from "../../components/blog/SingleBlogCard";

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

          <div className="featured_article_desc_div  py-5 px-5 ">
            <h4 className="text-muted">FEATURED ARTICLE</h4>
            <h1 className="h1 fw-bold">Awesome Interior Designing Services For Your Home</h1>
            <div className="d-flex align-items-center text-muted gap-5">
              <p>Lokendra Chaulagain</p>
              <p>May7,2019(6 mins read)</p>
            </div>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, tristique adipiscing feugiat ut placerat sagittis risus, nisl. Diam pellentesque viverra pretium integer senectus elementum, enim eu. Consectetur aenean pharetra, sed eget sagittis lorem cursus. Faucibus donec vel faucibus porta sit libero pellentesque convallis. Blandit quis et volutpat quis gravida integer dis. Tellus quam odio.</p>
          </div>
        </div>
      </div>

      <h1 className="text-center my-5">Best Picks</h1>

      <div className="container ">
        <div className="single_blog_card mb-5 row ">
          <div className="col-5 single_blog_img_div">
            <Image
              src={banner}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>

          <div className="col-7 ps-4 pe-5 d-flex flex-column justify-content-center">
            <h2>Culpa sit Laboris Exercitation ea Fugiat</h2>
            <div className="d-flex align-items-center text-muted gap-5">
              <p>Lokendra Chaulagain</p>
              <p>May7,2019(6 mins read)</p>
            </div>

            <p>
              ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim
              aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.{" "}
            </p>

            <button
              type="button"
              className="btn btn-link text-start">
              Read More
            </button>
          </div>
        </div>

        <div className="single_blog_card mb-5 row ">
          <div className="col-5 single_blog_img_div">
            <Image
              src={banner}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>

          <div className="col-7 ps-4 pe-5 d-flex flex-column justify-content-center">
            <h2>Culpa sit Laboris Exercitation ea Fugiat</h2>
            <div className="d-flex align-items-center text-muted gap-5">
              <p>Lokendra Chaulagain</p>
              <p>May7,2019(6 mins read)</p>
            </div>

            <p>
              ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim
              aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.{" "}
            </p>

            <button
              type="button"
              className="btn btn-link text-start">
              Read More
            </button>
          </div>
        </div>

        <div className="single_blog_card mb-5 row ">
          <div className="col-5 single_blog_img_div">
            <Image
              src={banner}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>

          <div className="col-7 ps-4 pe-5 d-flex flex-column justify-content-center">
            <h2>Culpa sit Laboris Exercitation ea Fugiat</h2>
            <div className="d-flex align-items-center text-muted gap-5">
              <p>Lokendra Chaulagain</p>
              <p>May7,2019(6 mins read)</p>
            </div>

            <p>
              ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.ncididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim
              aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.{" "}
            </p>

            <button
              type="button"
              className="btn btn-link text-start">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="second_featured_article_img_div">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt=""
        />

        <div className="second_featured_article_desc_div  py-5 px-5 ">
          <h4 className="text-muted">FEATURED ARTICLE</h4>
          <h1 className="h1 fw-bold">Awesome Interior Designing Services For Your Home</h1>
          <div className="d-flex align-items-center text-muted gap-5">
            <p>Lokendra Chaulagain</p>
            <p>May7,2019(6 mins read)</p>
          </div>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, tristique adipiscing feugiat ut placerat sagittis risus, nisl. Diam pellentesque viverra pretium integer senectus elementum, enim eu. Consectetur aenean pharetra, sed eget sagittis lorem cursus. Faucibus donec vel faucibus porta sit libero pellentesque convallis. Blandit quis et volutpat quis gravida integer dis. Tellus quam odio.</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="tag_row row">
          <div className="col-10">
            <SingleBlogCard />
            <SingleBlogCard />
            <SingleBlogCard />
          </div>
          <div className="col-2">
            <h4>TAGS</h4>

            {tags &&
              tags.map((tag: any, index: any) => (
                <div
                  key={index}
                  className="form-check mb-3">
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
