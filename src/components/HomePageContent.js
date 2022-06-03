import { Link } from "react-router-dom";

import Card2 from "./Card2";

import "./HomePageContent.scss";
import HomePageBanner from "./HomePageBanner";
import SliderTieuThuyet from "./SliderTieuThuyet/SliderTieuThuyet";
import SliderMktbanHang from "./SlideMktBanHang.js/SlideMktbanhnag";
import { getAllProductService } from "../services/productService";
import { useState, useEffect } from "react";
const HomePageContent = () => {
  const [listProduct, setListProduct] = useState([]);

  // get All product
  const getAllProduct = async () => {
    await getAllProductService("ALL").then((res) => {
      if (res && res.data.errCode === 0) {
        setListProduct(res.data.products);
      }
    });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      {/* banner - ads */}
      <div className="banner container-fruid mt-3 ml-3 mr-3">
        <div className="row banner">
          <div className="col-12 col-lg-8 py-0 pl-3 pr-3 img-banner1">
            <HomePageBanner />
          </div>
          <div className="col-12 col-lg-4 p-0 ">
            <div className="row mr-0 ml-0  img-banner1">
              <img
                alt="123"
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/fsale_bigsale2_392x156.jpg"
              />
            </div>
            <div className="row pt-1 mr-0 ml-0  img-banner1">
              <img
                alt="123"
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/fsale_bigsale2_392x156.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row pt-1 pl-3">
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/salelon_bigsale2_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 p-0 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/salelon_bigsale2_310x210.jpg"
            />
          </div>
        </div>
      </div>
      {/* *banner - ads */}

      {/* Category product */}
      <div className="container text-center category mt-3 ">
        <h3 className=" pt-3">Danh Mục Sản Phẩm:</h3>
        <div className=" row mt-3 mb-3">
          <div className="col-lg-3 category-items">
            <img alt="123" src={"/assets/images/marketing-can-ban.jpg"} />
            <Link to="/products">Marketing</Link>
          </div>
          <div className="col-lg-3 category-items">
            <img alt="111" src={"/assets/images/hieu-ve-trai-tim.jpg"} />
            <Link to="/products"> Tâm lý - Kỹ năng</Link>
          </div>
          <div className="col-lg-3 category-items">
            <img alt="111" src={"/assets/images/mat-biec.jpg"} />
            <Link to="/products">Tiểu thuyết</Link>
          </div>
          <div className="col-lg-3 category-items">
            <img
              alt="111"
              src={"/assets/images/30-chu-de-tu-vung-tieng-anh.jpg"}
            />
            <Link to="/products"> Tiếng anh</Link>
          </div>
        </div>
      </div>
      {/* *Category */}

      {/* marketing -ban hang */}
      <div className="container-fruid category-products mt-3 pl-3 ">
        <div className="d-flex justify-content-between title-category p-0">
          <h3 className="pt-3 pl-3 ">
            <Link to="/products">Marketing - bán hàng:</Link>
          </h3>
          <span className="pt-3 pr-3">
            <Link to="/products">Xem tất cả..</Link>
          </span>
        </div>
        <SliderMktbanHang listProduct={listProduct} />
      </div>
      {/* tam ly ky nang song */}
      <div className="container-fruid category-products mt-5 mr-3 ml-3 pl-3">
        <div className="row title-category">
          <h3 className="pt-3 pl-3">Tâm lý - Kỹ năng</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 p-0 img-banner2">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-8 p-0">
            <div className="d-flex flex-wrap justify-content-around">
              {listProduct
                .filter((item) => item.categoryId === "C2")
                .map((item) => {
                  return (
                    <Card2
                      // width="10.5rem"
                      image={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  );
                })}

              <button className="btn-web mt-3 mb-3 ">
                <Link to="/products">Xem Thêm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tieu thuyet */}
      <div className="container-fruid category-products mt-5 pl-3">
        <div className="d-flex justify-content-between title-category p-0">
          <h3 className="pt-3 pl-3 ">Tiểu thuyết</h3>
          <span className="pt-3 pr-3">
            <Link to="/products">Xem tất cả..</Link>
          </span>
        </div>
        <SliderTieuThuyet listProduct={listProduct} />
        {/* *tieu thuyet */}
        {/* </div> */}
      </div>
      {/* sach hoc tieng anh */}
      <div className="container-fruid category-products mt-5 mr-3 ml-3 pl-3">
        <div className="row title-category">
          <h3 className="pt-3 pl-3">Sách học tiếng anh</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 p-0 img-banner2">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          {/* <div className="col-lg-8 p-0"> */}
          <div className="col-lg-8 p-0 d-flex flex-wrap justify-content-around">
            {listProduct
              .filter((item) => item.categoryId === "C4")
              .map((item) => {
                return (
                  <Card2
                    // width="10.5rem"
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                );
              })}
            <button className="btn-web mt-3 mb-3">
              <Link to="/products">Xem Thêm</Link>
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* NXB */}
      <div className="container-fruid">
        <div className="d-flex justify-content-around mt-5 mb-5 publisher">
          <div className=" publisher-items nxb-book mr-3 ml-3">
            <img alt="123" src={"/assets/images/marketing-can-ban.jpg"} />
            Thanh Niên
          </div>
          <div className=" publisher-items nxb-book mr-3">
            <img alt="111" src={"/assets/images/hieu-ve-trai-tim.jpg"} />
            Kim Đồng
          </div>
          <div className=" publisher-items nxb-book mr-3">
            <img alt="111" src={"/assets/images/mat-biec.jpg"} />
            Nhà xuất bản trẻ
          </div>
          <div className=" publisher-items nxb-book mr-3">
            <img
              alt="111"
              src={"/assets/images/30-chu-de-tu-vung-tieng-anh.jpg"}
            />
            Lao Động
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageContent;
