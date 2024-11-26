import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { data } from "./data/carousel";
import { data } from "./Data/carousel";
import { BsFillArrowUpRightCircleFill as Arrow } from "react-icons/bs";

export default function ClientGallery({ signupLink }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel">
        <h2>Our Clients Galleries</h2>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="carousel-content">
                <a href={d.link} target="_blank">
                  <p className="carousel-text">Explore - {d.name}</p>
                </a>
                <a href={d.link} target="_blank">
                  <img
                    src={`${d.image}`}
                    alt="Gallery image"
                    className="carousel-image"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <div className="after-carousel">
          <a href={signupLink} target="_blank">
            <p>Start now to create yours!</p>
            <button>
              Start for free
              <Arrow />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
