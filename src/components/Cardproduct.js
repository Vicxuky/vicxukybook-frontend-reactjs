import { Card, Button } from "react-bootstrap";
import "./Cardproduct.scss";
const Cardproduct = (props) => {
  // format price
  function moneyFormat(price, sign = " đ") {
    const pieces = parseFloat(price).toFixed(2).split("");
    let ii = pieces.length - 3;
    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ",");
    }
    return pieces.join("") + sign;
  }
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
          className="img-cardproduct"
          variant="center"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text>{moneyFormat(props.price)}</Card.Text>
        </Card.Body>
        <Button
          variant="warning"
          className="btn-block text-light btn-cardproduct"
        >
          XEM NGAY
        </Button>
      </Card>
    </>
  );
};
export default Cardproduct;
