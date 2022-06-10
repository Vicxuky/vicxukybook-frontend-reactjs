import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { formatCashVN } from "../../functionsStore";
import { useState } from "react";
import { postOrderService } from "../../services/orderService";

const Checkout = () => {
  const productsCart = useSelector((state) => state.cart.value);
  // total cart
  const totalPriceCart = productsCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const statusOrder =
    productsCart.map((item, stt = 0) => {
      stt += 1;
      return (
        stt +
        ". " +
        item.title +
        ": " +
        formatCashVN(item.price) +
        " x " +
        item.quantity +
        `\n`
      );
    }) +
    "Total: " +
    totalPriceCart;

  const [order, setOrder] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    note: "",
    status: statusOrder,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handlePostOrder = async (e) => {
    e.preventDefault();
    try {
      if (
        !order.fullName ||
        !order.email ||
        !order.phoneNumber ||
        !order.address
      ) {
        alert("Please complete all information.");
      } else {
        let response = await postOrderService(order);
        if (response && response.data.errCode !== 0) {
          alert(response.data.errMessage);
        } else {
          alert(response.data.errMessage);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log("order", order);

  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Order information</h1>
          <div className="container shadow">
            <div className="row">
              {/* <div className="col-lg-1">STT</div> */}
              <div className="col-lg-12">
                <h3 className="text-center">Products list</h3>
              </div>
            </div>
            {productsCart.map((item, stt = 0) => {
              stt += 1;
              return (
                <div key={item.id}>
                  <div className="row mt-1 border">
                    {/* <div className="col-lg-1">{stt}</div> */}
                    <div className="col-lg-2 mt-1">
                      {stt}
                      <img width={100} alt={item.title} src={item.image} />
                    </div>
                    <div className="col-lg-4">{item.title}</div>
                    <div className="col-lg-2">
                      Price: {formatCashVN(item.price)}
                    </div>
                    <div className="col-lg-2">Quantity: {item.quantity}</div>
                    <div className="col-lg-2" style={{ color: "red" }}>
                      {formatCashVN(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row border py-3 mt-1">
              <div className="col-lg-10">Total: </div>
              <div
                className="col-lg-2"
                style={{ color: "red", fontSize: "23px" }}
              >
                {formatCashVN(totalPriceCart)}
              </div>
            </div>
          </div>
          <form className="shadow px-1">
            <h3 className="text-center mt-5">Customer information</h3>
            <div className="form-group">
              <label htmlFor="inputFullName">Full Name</label>
              <input
                name="fullName"
                type="text"
                className="form-control"
                id="inputFullName"
                placeholder="Nguyen Van A.."
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="abc@gmail.com"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="0988888888.."
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputNote">Note</label>
              <textarea
                name="note"
                rows="5"
                type="text"
                className="form-control"
                id="inputNote"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group">
              <textarea
                name="status"
                rows="6"
                type="text"
                className="form-control"
                value={statusOrder}
                // {
                //   productsCart.map((item, stt = 0) => {
                //     stt += 1;
                //     return (
                //       stt +
                //       ". " +
                //       item.title +
                //       ": " +
                //       formatCashVN(item.price) +
                //       " x " +
                //       item.quantity +
                //       "<br />"
                //     );
                //   }) +
                //   "Total: " +
                //   totalPriceCart
                // }
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Agree to order
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary px-5 mb-1"
              onClick={(e) => handlePostOrder(e)}
            >
              Sent
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Checkout;
