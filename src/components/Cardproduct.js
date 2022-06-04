import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cardproduct.scss";
const Cardproduct = (props) => {
  const navigate = useNavigate();
  // format price
  function moneyFormat(price, sign = " đ") {
    const pieces = parseFloat(price).toFixed(2).split("");
    let ii = pieces.length - 3;
    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ",");
    }
    return pieces.join("") + sign;
  }

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
        }}
      >
        <Card.Img
          className="img-cardproduct cursor-p"
          variant="center"
          src={props.image}
          onClick={handleProductDetail}
        />
        <Card.Body>
          <Card.Title>
            <h3 className="cursor-p" onClick={handleProductDetail}>
              {props.title}
            </h3>
          </Card.Title>
          <Card.Text>{moneyFormat(props.price)}</Card.Text>
        </Card.Body>
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
