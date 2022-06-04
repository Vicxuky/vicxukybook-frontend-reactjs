import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductService } from "../../services/productService";
import Layout from "../../components/Layout";

const ProductDetail = () => {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productDetail, setProductDetail] = useState([]);

  const percent = () => {
    let priceNew = productDetail.priceNew;
    let priceOld = productDetail.priceOld;
    let percent = 100 - (priceNew / priceOld) * 100;
    return Math.round(percent);
  };

  const handleInput = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleDash = () => {
    if (quantity < 1 || quantity === 1 || Number.isNaN(quantity) === true) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < 1 || Number.isNaN(quantity) === true) {
      setQuantity(1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // get one product
  const getProductDetail = async () => {
    await getAllProductService(id).then((res) => {
      if (res && res.data.errCode === 0) {
        setProductDetail(res.data.products);
      }
    });
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  console.log("props: ", useParams());
  return (
    <Layout>
      <div className="container shadow rounded mt-3">
        <div className="row">
          <div className="image-book col-12 col-lg-5 shadow-sm">
            <img
              className="mt-3"
              src={productDetail.image}
              alt={productDetail.title}
              width="400px"
            />
          </div>
          <div className="detail-book col-12 col-lg-7 mt-3">
            <div>
              <h1>{productDetail.title}</h1>
            </div>
            <div className="short-info-book d-flex justify-content-between">
              <span>Nhà xuất bản: {productDetail.publisher}</span>
              <span className="mr-5">Tác giả: {productDetail.author}</span>
            </div>
            <div className="price mt-3">
              <strike>{productDetail.priceOld} VNĐ</strike>
              <span className="shadow"> -{percent()}%</span>
              <div className="new-price">{productDetail.priceNew} VNĐ</div>
            </div>
            <div className="quantity mt-5">
              Số lượng: &nbsp;
              <div className="action-quantity shadow-sm ">
                <button className="dash-quantity" onClick={() => handleDash()}>
                  <i className="bi bi-dash "></i>
                </button>
                <input
                  type="text"
                  value={quantity}
                  maxvalue="999"
                  minvalue="0"
                  onChange={(e) => handleInput(e)}
                />
                <button className="plus-quantity" onClick={() => handlePlus()}>
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <div className="buy-product mt-5">
              <button className="add-to-cart shadow hover-web">
                <i className="bi bi-cart"></i>
                &nbsp;Thêm vào giỏ hàng
              </button>
              <button className="buy-now shadow hover-web">
                <Link to="/cart">Mua Ngay</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="full-info-book row mt-5 p-3">
          <div>
            <h3>Chi tiết sản phẩm</h3>
            <p>{productDetail.desc}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
