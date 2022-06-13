import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card3.scss";
import { formatCashVN } from "../../functionsStore";
const Cardproduct = (props) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate(`/product/${props.id}`);
  };

  return (
    <>
      <Card
        className="card-product"
        style={{
          //   // width: "13.6rem",
          width: props.width,
          height: "400px",
        }}
      >
        <Card.Img
          className="img-cardproduct cursor-p"
          variant="center"
          src={props.image}
          height="300px"
          onClick={handleProductDetail}
        />
        <Card.Body>
          <Card.Title>
            <h3 className="cursor-p" onClick={handleProductDetail}>
              {props.title}
            </h3>
          </Card.Title>
        </Card.Body>
        <Card.Text className="text-center">
          <strike>{formatCashVN(parseInt(props.priceOld))}</strike>&nbsp;
          <i className="bi bi-forward"></i> &nbsp;
          {formatCashVN(parseInt(props.priceNew))}
        </Card.Text>

        <Button
          variant="warning"
          className="btn-block text-light btn-cardproduct"
          onClick={handleProductDetail}
        >
          XEM NGAY
        </Button>
      </Card>
    </>
  );
};
export default Cardproduct;
