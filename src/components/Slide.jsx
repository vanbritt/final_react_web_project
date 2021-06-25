import React from "react";
import Slider from "react-slick";
import '../Styles.css'
const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Slider {...settings} className="row mt-2 mx-auto">
      <div className="col-sm-12">
        <img
          src="/assets/image/4.png"
          className="img-responsive"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="col-sm-12">
        <img
          src="/assets/image/1.jpg"
          className="img-responsive"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="col-sm-12">
        <img
          src="/assets/image/2.jpeg"
          className="img-responsive"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="col-sm-12">
        <img
          src="/assets/image/3.jpg"
          className="img-responsive"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    </Slider>
  );
};

export default Slide;
