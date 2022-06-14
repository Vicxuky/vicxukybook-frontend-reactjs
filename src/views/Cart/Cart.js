import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import {
  deleteProductCart,
  updateQuantityProductCart,
} from "../../redux/cartSlice";
import { formatCashVN } from "../../functionsStore";

import "./Cart.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";
const Cart = () => {
  const navigate = useNavigate();

  // const [quantity, setQuantity] = useState();
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.value);

  const handleDeleteItemCart = (item) => {
    dispatch(deleteProductCart({ id: item.id }));
  };
  // total cart
  const totalPriceCart = productsCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // const handleQuantity = (e) => {
  //   setQuantity(parseInt(e.target.value));
  // };

  const handleQuantityDash = (item) => {
    dispatch(
      updateQuantityProductCart({ id: item.id, quantity: item.quantity - 1 })
    );
  };

  const handleQuantityPlus = (item) => {
    dispatch(
      updateQuantityProductCart({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Layout>
        <div className="container ">
          <h1 className="text-center">Cart</h1>
          {productsCart.length === 0 ? (
            <div className="text-center">
              <h3>Không có sản phẩm nào trong giỏ</h3>
              <Link to="/">
                &gt;&gt; <u>TRANG CHỦ</u>
              </Link>
            </div>
          ) : (
            <div className="container cart">
              <div className="row  th-cart">
                <div className="col-1 col-lg-1 ">STT</div>
                <div className="col-11 text-center col-lg-11 ">
                  List Products
                </div>
              </div>

              {productsCart.map((item, stt = 1) => {
                stt += 1;
                return (
                  <div
                    className="row  mt-1 pt-3 pb-3 list-product p-0 shadow-sm"
                    key={item.id}
                  >
                    <div className="col-1 col-lg-1 ">{stt}</div>
                    <div className="col-3 col-lg-1 click-detail">
                      <img
                        width={80}
                        src={item.image}
                        alt={item.title}
                        onClick={() => handleProductDetail(item.id)}
                      />
                    </div>
                    <div
                      className="col-8 col-lg-5 click-detail"
                      onClick={() => handleProductDetail(item.id)}
                    >
                      {item.title}
                    </div>
                    <div className="col-6 col-lg-2 ">
                      {formatCashVN(item.price)}
                    </div>
                    <div className="col-12 col-lg-2 form-quantity">
                      <button
                        className="btn-update-dash"
                        onClick={() => handleQuantityDash(item)}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <input
                        className="i-quantity"
                        type="text"
                        value={item.quantity}
                      />
                      <button
                        className="btn-update-plus"
                        onClick={() => handleQuantityPlus(item)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>

                    <div className="col-12 col-lg-1 p-0 ">
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteItemCart(item)}
                      >
                        <i className="bi bi-trash3"></i>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="row  mt-1 total">
                <div className="col-lg-7 ">Total</div>
                <div className="col-lg-5 total-price">
                  {formatCashVN(totalPriceCart)}
                </div>
              </div>
              <div className="row mt-1 payment">
                <Link to="/check-out">
                  <button className="btn-payment hover-web">
                    Payment orders
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
export default Cart;
