import Slider from "react-slick";
import Cardproduct from "../Cardproduct";

const SliderTieuThuyet = (props) => {
  const viEn = (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");

    str = str.replace(/\W+/g, " ");
    str = str.replace(/\s/g, "-");
    return str;
  };
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
              <div key={item.id}>
                <Cardproduct
                  width="13.6rem"
                  id={item.id}
                  url={viEn(item.title)}
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
