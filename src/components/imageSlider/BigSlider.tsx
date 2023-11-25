import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BigSlider.css";

const BigSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className="w-[90%] mx-auto rounded mt-24">
      <div className="bigSlide bg-1">
        <h3 className="text-3xl 2xl:text-5xl text-white">
          djaeduaejduia djaeduaejduia djaeduaejduia
        </h3>
        <p className="text-white text-xl">
          text text text text text text text text text text text text text text
          text
        </p>
      </div>
      <div className="bigSlide bg-2">
        <h3 className="text-3xl 2xl:text-5xl text-white ">
          djaeduaejduia djaeduaejduia djaeduaejduia
        </h3>
        <p className="text-white text-xl">
          text text text text text text text text text text text text text text
          text
        </p>
      </div>
      <div className="bigSlide bg-3">
        <h3 className="text-3xl 2xl:text-5xl text-white">
          djaeduaejduia djaeduaejduia djaeduaejduia
        </h3>
        <p className="text-white text-xl">
          text text text text text text text text text text text text text text
          text
        </p>
      </div>
      <div className="bigSlide bg-4">
        <h3 className="text-3xl 2xl:text-5xl text-white">
          djaeduaejduia djaeduaejduia djaeduaejduia
        </h3>
        <p className="text-white text-xl">
          text text text text text text text text text text text text text text
          text
        </p>
      </div>
      <div className="bigSlide bg-5">
        <h3 className="text-3xl 2xl:text-5xl text-white">
          djaeduaejduia djaeduaejduia djaeduaejduia
        </h3>
        <p className="text-white text-xl">
          text text text text text text text text text text text text text text
          text
        </p>
      </div>
    </Slider>
  );
};

export default BigSlider;
