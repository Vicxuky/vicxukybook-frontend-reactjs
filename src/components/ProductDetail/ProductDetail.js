import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductService } from "../../services/productService";
import { addProductCart } from "../../redux/cartSlice";
import { formatCashVN } from "../../functionsStore";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.value);

  const navigate = useNavigate();

  let { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [productDetail, setProductDetail] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const checkIdCart = () => {
    let idd = parseInt(id);
    if (productsCart.length === 0) {
      return false;
    } else {
      for (let i = 0; i < productsCart.length; i++) {
        if (productsCart[i].id === idd) {
          return true;
        }
      }
      return false;
    }
  };
  const handleAddToCart = () => {
    setShow(true);
    let checkKQ = checkIdCart();

    if (checkKQ === true) {
      console.log("San pham da ton tai");
    }
    if (checkKQ === false) {
      console.log("add to cart");
      dispatch(
        addProductCart({
          id: parseInt(id),
          image: productDetail.image,
          title: productDetail.title,
          price: productDetail.priceNew,
          quantity: quantity,
        })
      );
    }
  };

  const handleBuy = () => {
    let checkKQ = checkIdCart();
    if (checkKQ === true) {
      console.log("San pham da ton tai");
    }
    if (checkKQ === false) {
      console.log("add to cart");
      dispatch(
        addProductCart({
          id: parseInt(id),
          image: productDetail.image,
          title: productDetail.title,
          price: productDetail.priceNew,
          quantity: quantity,
        })
      );
    }
    navigate("/cart");
  };

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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    // get one product
    const getProductDetail = async () => {
      await getAllProductService(id).then((res) => {
        if (res && res.data.errCode === 0) {
          setProductDetail(res.data.products);
        }
      });
    };
    getProductDetail();
  }, [id]);

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
              <span>Nh?? xu???t b???n: {productDetail.publisher}</span>
              <span className="mr-5">T??c gi???: {productDetail.author}</span>
            </div>
            <div className="price mt-3">
              <strike>{formatCashVN(parseInt(productDetail.priceOld))}</strike>
              <span className="shadow"> -{percent()}%</span>
              <div className="new-price">
                {formatCashVN(parseInt(productDetail.priceNew))}
              </div>
            </div>
            <div className="quantity mt-5">
              S??? l?????ng: &nbsp;
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
              {/* modal */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Th??ng b??o</Modal.Title>
                </Modal.Header>
                <Modal.Body>S???n ph???m ???? ???????c th??m v??o gi??? h??ng!!!</Modal.Body>
                <Modal.Footer>
                  <Link to="/cart">
                    <Button variant="primary">Gi??? H??ng</Button>
                  </Link>
                  <Button variant="secondary" onClick={handleClose}>
                    ????ng
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* modal */}
              <button
                className="add-to-cart shadow hover-web"
                onClick={handleAddToCart}
              >
                <i className="bi bi-cart"></i>
                &nbsp;Th??m v??o gi??? h??ng
              </button>

              <button className="buy-now shadow hover-web" onClick={handleBuy}>
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
        <div className="full-info-book row mt-5 p-3">
          <div>
            <h3>Chi ti???t s???n ph???m</h3>
            <p>{productDetail.desc}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
