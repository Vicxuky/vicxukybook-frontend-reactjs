// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { deleteProductCart } from "../../redux/cartSlice";
import { moneyFormat, formatCashVN } from "../../functionsStore";

import "./Cart.scss";

const Cart = () => {
  // const cart = useSelector((state) => state.cart.value);

  // const [productCart, setProductCart] = useState("");
  const dispath = useDispatch();
  const productsCart = useSelector((state) => state.cart.value);

  const handleDeleteItemCart = (item) => {
    dispath(deleteProductCart({ id: item.id }));
  };
  // total cart
  const totalPriceCart = productsCart.reduce((total, item) => {
    console.log("Price: ", item.price);

    return total + item.price * item.quantity;
  }, 0);

  // const moneyFormat = (price, sign = " đ") => {
  //   const pieces = parseFloat(price).toFixed(2).split("");
  //   let ii = pieces.length - 3;
  //   while ((ii -= 3) > 0) {
  //     pieces.splice(ii, 0, ",");
  //   }
  //   return pieces.join("") + sign;
  // };

  return (
    <>
      <Layout>
        <div className="container ">
          <h1 className="text-center">Cart</h1>
          <div className="container cart">
            <div className="row  th-cart">
              <div className="col-lg-1 ">STT</div>
              <div className="col-lg-6 ">Title</div>
              <div className="col-lg-2 ">Price</div>
              <div className="col-lg-2 ">Quantity</div>
              <div className="col-lg-1 ">Delete</div>
            </div>

            {productsCart.map((item, stt = 1) => {
              stt += 1;
              return (
                <div
                  className="row  mt-1 pt-3 pb-3 list-product p-0 shadow-sm"
                  key={item.id}
                >
                  <div className="col- col-lg-1 ">{stt}</div>
                  <div className="col-lg-6 ">{item.title}</div>
                  <div className="col-lg-2 ">{formatCashVN(item.price)}</div>
                  <div className="col-lg-2 ">{item.quantity}</div>
                  <div className="col-lg-1 p-0 ">
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteItemCart(item)}
                    >
                      <i className="bi bi-trash3"></i>
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
              <button className="btn-payment hover-web">Payment orders</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Cart;
