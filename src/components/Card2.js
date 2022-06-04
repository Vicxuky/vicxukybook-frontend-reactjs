import "./Card2.scss";
import { useNavigate } from "react-router-dom";
import { formatCashVN } from "../functionsStore";

const Card2 = (props) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate(`/product/${props.id}?title=${props.url}`);
  };

  return (
    <div className="card-tow d-flex justify-content-around col-lg-6 p-1 py-3">
      <div className="card-tow-img">
        <img
          width={148}
          alt="123"
          src={props.image}
          onClick={handleProductDetail}
        />
      </div>
      <div className="card-tow-body">
        <div className="card-tow-title">
          <h3 onClick={handleProductDetail}>{props.title}</h3>
        </div>
        <div className="card-tow-price">{formatCashVN(props.price)}</div>
      </div>
    </div>
  );
};
export default Card2;
