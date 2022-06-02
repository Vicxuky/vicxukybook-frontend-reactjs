import Slider from "react-slick";

const HomePageBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fruid">
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
              alt="Third slide"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default HomePageBanner;
