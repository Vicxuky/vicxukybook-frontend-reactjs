import Slider from "react-slick";
import Cardproduct from "../Cardproduct";

const SliderTieuThuyet = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fruid pr-3 mt-3">
      <Slider {...settings}>
        {props.listProduct
          .filter((item) => item.categoryId === "C3")
          .map((item) => {
            return (
              <div>
                <Cardproduct
                  width="13.6rem"
                  image={item.image}
                  title={item.title}
                  price={item.priceNew}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
export default SliderTieuThuyet;
