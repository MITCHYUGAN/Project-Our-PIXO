import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { data } from "./data/carousel";
import { data } from "./Data/carousel";
import { BsFillArrowUpRightCircleFill as Arrow } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function NextArrow({onClick}) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        cursor: "pointer"
      }}
    >
      <FaArrowCircleRight style={{ fontSize: "30px", color: "black" }} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <FaArrowCircleLeft style={{ fontSize: "30px", color: "black" }} />
    </div>
  );
}

export default function ClientGallery({ signupLink }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      </div>
    </>
  );
}
