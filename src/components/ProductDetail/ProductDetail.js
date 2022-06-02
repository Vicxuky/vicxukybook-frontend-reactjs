import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

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
  return (
    <div className="container shadow rounded mt-3">
      <div className="row">
        <div className="image-book col-12 col-lg-4 shadow-sm">
          <img
            className="mt-3 shadow"
            src="https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg"
            alt="Nhà giả kim"
            width="200px"
          />
        </div>
        <div className="detail-book col-12 col-lg-8 mt-3">
          <div>
            <h1>Nhà Giả Kim</h1>
          </div>
          <div className="short-info-book d-flex justify-content-between">
            <span>Nhà xuất bản: Nhà Xuất Bản Văn Học</span>
            <span className="mr-5">Tác giả: Paulo Coelho</span>
          </div>
          <div className="price mt-3">
            <strike>99000 VNĐ</strike>
            <span className="shadow"> -80%</span>
            <div className="new-price">12000 VNĐ</div>
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
      <div className="full-info-book row mt-5">
        <div>
          <h3>Chi tiết sản phẩm</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
