import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import Layout from "../../components/Layout";
import { formatCashVN } from "../../functionsStore";
import { postOrderService } from "../../services/orderService";
import { deleteAllProductCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsCart = useSelector((state) => state.cart.value);

  // total cart
  const totalPriceCart = useMemo(() => {
    const result = productsCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return result;
  }, [productsCart]);

  // save order
  const statusOrder = useMemo(() => {
    return (
      productsCart.map((item, stt = 0) => {
        stt += 1;
        return (
          stt +
          ". " +
          item.title +
          " | Price: " +
          item.price +
          " x Quantity: " +
          item.quantity
        );
      }) +
      " | Total: " +
      totalPriceCart
    );
  }, [productsCart, totalPriceCart]);

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
        if (response && response.data.errCode === 0) {
          setShow(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleCheck = () => {
    document.getElementById("btn-sent").disabled = true;
    console.log("check");
    document.getElementById("check-buy").onclick = function (e) {
      if (this.checked) {
        console.log("check true");
        document.getElementById("btn-sent").disabled = false;
      } else {
        document.getElementById("btn-sent").disabled = true;
      }
    };
  };
  const handleClose = (e) => {
    e.preventDefault();

    setShow(false);
    setOrder({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      note: "",
    });
    dispatch(deleteAllProductCart());
    navigate("/cart");
  };

  useEffect(() => {
    handleCheck();
  }, []);

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
                value={order.fullName}
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
                  value={order.email}
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
                  value={order.phoneNumber}
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
                value={order.address}
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
                value={order.note}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check-buy"
                />
                <label className="form-check-label" htmlFor="check-buy">
                  Agree to order
                </label>
              </div>
            </div>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Thông báo</Modal.Title>
              </Modal.Header>
              <Modal.Body>Đặt hàng thành công.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={(e) => handleClose(e)}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
            {/* modal */}
            <button
              id="btn-sent"
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
