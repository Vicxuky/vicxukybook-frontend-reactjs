import Slider from "react-slick";
import Cardproduct from "../Cardproduct";

const SliderMktbanHang = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
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
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
        <div>
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
      </Slider>
    </div>
  );
};
export default SliderMktbanHang;
